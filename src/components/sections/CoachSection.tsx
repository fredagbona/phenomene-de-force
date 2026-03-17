import Image from "next/image";
import { CHECKOUT_URL } from "@/lib/constants";

export function CoachSection() {
  return (
    <section
      className="relative bg-surface py-24 md:py-32 px-6 -mt-[4vw]"
      style={{ clipPath: "polygon(0 4vw, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="max-w-6xl mx-auto pt-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-[280px] md:w-[380px] aspect-[3/4]">
              {/* Glow orange derrière */}
              <div className="absolute inset-0 bg-primary/15 blur-3xl scale-90 -z-10" />

              {/* Cadre photo */}
              <div className="relative w-full h-full overflow-hidden border border-white/10">
                <Image
                  src="/images/phenomene.jpg"
                  alt="Le coach — Phénomène de Force"
                  fill
                  className="object-cover object-top"
                  style={{
                    filter: "grayscale(60%) contrast(1.15) brightness(0.9)",
                  }}
                  sizes="(max-width: 768px) 280px, 380px"
                  priority
                />

                {/* Gradient bas — fondu vers surface */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />

                {/* Gradient haut léger */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />

                {/* Accent ligne gauche orange */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary/70 via-primary/20 to-transparent" />

                {/* Label bas */}
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p className="font-body text-secondary/80 text-[10px] tracking-[0.4em] uppercase">
                    Phénomène de Force
                  </p>
                </div>
              </div>

              {/* Coins orange */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-primary/60" />
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-primary/60" />
            </div>
          </div>

          {/* Content */}
          <div>
            
            <h2 className="font-title text-[clamp(2rem,5vw,4rem)] leading-[0.9] text-white mb-8">
              JE SUIS UN PHÉNOMÈNE.
              <br />
              <span className="text-primary">TU PEUX L&apos;ÊTRE AUSSI.</span>
            </h2>

            <p className="font-body text-secondary leading-relaxed mb-6">
              Ma mission est simple : rendre la force accessible à ceux qui n&apos;ont rien
              d&apos;autre que leur détermination. Pas besoin de machines coûteuses. Juste toi
              contre toi-même.
            </p>

            <p className="font-body text-secondary leading-relaxed mb-10">
              J&apos;ai construit ce programme pour ceux qui en ont marre des excuses et des
              promesses vides. 30 jours. Pas un de moins, pas un de plus. C&apos;est là que tout
              commence.
            </p>

            {/* Séparateur */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12 bg-primary/60" />
              <p className="font-body text-primary text-xs tracking-[0.3em] uppercase">
                Le phénomène, c&apos;est toi.
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              REJOINDRE LA MEUTE
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
