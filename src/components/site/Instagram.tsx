import { Instagram as InstagramIcon, Play, Sparkles } from "lucide-react";
import nails1 from "@/assets/nail1.jpeg";
import nails2 from "@/assets/nail2.jpeg";
import nails3 from "@/assets/nail3.jpeg";
import nails4 from "@/assets/nail4.jpeg";
import nails5 from "@/assets/nail5.jpeg";
import nails6 from "@/assets/nail6.jpeg";
import { useReveal } from "@/hooks/useReveal";

const HANDLE = "izabelinails_";
const PROFILE_URL = `https://instagram.com/${HANDLE}`;
const REELS_URL = `https://instagram.com/${HANDLE}/reels/`;

const posts = [
  { src: nails1, isReel: true },
  { src: nails2, isReel: false },
  { src: nails3, isReel: true },
  { src: nails4, isReel: false },
  { src: nails5, isReel: true },
  { src: nails6, isReel: false },
];

export function Instagram() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.Ref<HTMLElement>} className={`bg-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown-deep shadow-sm">
            <Sparkles className="size-3.5 text-brand-gold" />
            Siga no Instagram
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            @{HANDLE}
          </h2>
          <div className="h-px w-48 bg-foreground/20" />
          <p className="max-w-sm text-sm text-foreground/60 leading-relaxed">
            Acompanhe os trabalhos, novidades e bastidores do estúdio.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.isReel ? REELS_URL : PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={post.src}
                alt={`Post ${i + 1} — Izabeli Nails`}
                loading="lazy"
                className="size-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl" />
              {/* ícone central */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.isReel ? (
                  <Play className="size-8 text-white drop-shadow-lg fill-white" />
                ) : (
                  <InstagramIcon className="size-8 text-white drop-shadow-lg" />
                )}
              </div>
              {/* badge reel */}
              {post.isReel && (
                <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  <Play className="size-2.5 fill-white" /> Reel
                </span>
              )}
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-brown-deep shadow-sm transition-all hover:bg-brand-gold/20 hover:-translate-y-0.5"
          >
            <InstagramIcon className="size-4" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
