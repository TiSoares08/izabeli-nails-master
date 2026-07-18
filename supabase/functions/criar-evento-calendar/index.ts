import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const CALENDAR_ID = "d37a20d8a576cb4b734b65708c3ad1be49159f2ed14c468f6ffa1b9fbda1ef45@group.calendar.google.com";

function base64url(data: Uint8Array): string {
  return btoa(String.fromCharCode(...data))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function getAccessToken(serviceAccount: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  const headerB64 = base64url(new TextEncoder().encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const payloadB64 = base64url(new TextEncoder().encode(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/calendar",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })));

  const signingInput = `${headerB64}.${payloadB64}`;

  const privateKey = serviceAccount.private_key
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\n/g, "")
    .trim();

  const binaryKey = Uint8Array.from(
    [...atob(privateKey)].map((c) => c.charCodeAt(0))
  );

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const jwt = `${signingInput}.${base64url(new Uint8Array(signature))}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, content-type",
      },
    });
  }

  try {
    const { nome, telefone, procedimento, data, horario, observacoes } = await req.json();

    const serviceAccount = JSON.parse(Deno.env.get("GOOGLE_SERVICE_ACCOUNT") ?? "{}");
    const accessToken = await getAccessToken(serviceAccount);

    // Monta inicio e fim do evento
    const [hora, minuto] = horario.split(":").map(Number);
    const inicio = new Date(`${data}T${horario}:00-03:00`);
    const fim = new Date(inicio.getTime() + 60 * 60 * 1000); // +1 hora

    const evento = {
      summary: `${procedimento} — ${nome}`,
      description: `📋 Procedimento: ${procedimento}\n👤 Cliente: ${nome}\n📱 Telefone: ${telefone}${observacoes ? `\n📝 Observações: ${observacoes}` : ""}`,
      start: { dateTime: inicio.toISOString(), timeZone: "America/Sao_Paulo" },
      end: { dateTime: fim.toISOString(), timeZone: "America/Sao_Paulo" },
    };

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(evento),
      }
    );

    const result = await res.json();
    console.log("Google Calendar response:", JSON.stringify(result));

    return new Response(JSON.stringify({ ok: true, eventId: result.id, result }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
});
