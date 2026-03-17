import Image from "next/image";
import { CHECKOUT_URL } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { Dumbbell01Icon, Video01Icon, Target01Icon, Download01Icon } from "@hugeicons/core-free-icons";

const benefits = [
  { icon: Dumbbell01Icon, text: "Planification sur 4 semaines (5 séances/sem)" },
  { icon: Video01Icon, text: "Démonstrations vidéo pour chaque mouvement" },
  { icon: Target01Icon, text: "Adaptable de Débutant à Intermédiaire" },
  { icon: Download01Icon, text: "Accès immédiat après paiement" },
];

export function ProgrammeSection() {
  return (
    <section
      id="programme"
      className="relative bg-surface py-24 md:py-32 px-6 -mt-[4vw]"
      style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
    >
      <div className="max-w-6xl mx-auto pt-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/15 blur-3xl scale-90 -z-10" />
              <div className="relative overflow-hidden border border-white/10">
                <Image
                  src="/images/covers/30-jours.jpg"
                  alt="Programme 30 Jours — Phénomène de Force"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary/60" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary/60" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-body text-primary text-xs tracking-[0.4em] uppercase mb-4">
              Le programme
            </p>
            <h2 className="font-title text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.9] text-white mb-8">
              30 JOURS.
              <br />
              ZÉRO MATÉRIEL.
              <br />
              <span className="text-primary">100% RÉSULTATS.</span>
            </h2>

            <ul className="space-y-5 mb-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
                    <HugeiconsIcon icon={b.icon} size={16} color="#FF4500" />
                  </div>
                  <p className="font-body text-white/80 leading-relaxed">{b.text}</p>
                </li>
              ))}
            </ul>

            {/* Prix */}
            <div className="glass-card mb-8">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-title text-5xl text-primary">9,15€</p>
                  <p className="font-body text-secondary text-sm">
                    au lieu de <span className="line-through">22,86€</span>
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <p className="font-body text-secondary text-sm leading-relaxed">
                  Accès à vie. Paiement unique.
                  <br />
                  Aucun abonnement.
                </p>
              </div>
            </div>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              JE VEUX CE PROGRAMME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
