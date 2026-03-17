import { CHECKOUT_URL } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Facebook01Icon,
  InstagramIcon,
  ThreadsIcon,
} from "@hugeicons/core-free-icons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pb-[4vw] pt-16 md:pt-20"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
    >
      {/* Radial glow derrière le titre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Ligne diagonale accent */}
      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-primary/60 via-primary/10 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      

        <h1 className="font-title leading-[1.1] tracking-wide text-white mb-0">
          <span className="block text-[clamp(3rem,12vw,9rem)]">LE MONDE</span>
          <span className="block text-[clamp(3rem,12vw,9rem)] text-primary">S&apos;EN FOUT</span>
          <span className="block text-[clamp(3rem,12vw,9rem)]">DE TOI.</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-secondary max-w-xl mx-auto mt-10 mb-10">
          Bâtis un corps d&apos;élite sans matériel.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            JE COMMENCE MAINTENANT — 9,15€
          </a>
          <p className="font-body text-secondary text-sm">
            <span className="line-through">22,86€</span>&nbsp; Offre limitée
          </p>
        </div>

        {/* Social proof discret */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-2">
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Facebook01Icon} size={14} color="#A0A0A0" />
            <HugeiconsIcon icon={InstagramIcon} size={14} color="#A0A0A0" />
            <HugeiconsIcon icon={ThreadsIcon} size={14} color="#A0A0A0" />
          </div>
          <span className="font-body text-secondary/70 text-xs">
            Rejoint par <span className="text-white/80">+320 000 guerriers</span> sur les réseaux
          </span>
        </div>

        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[6vw] left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <HugeiconsIcon icon={ArrowDown01Icon} size={24} color="white" />
      </div>
    </section>
  );
}
