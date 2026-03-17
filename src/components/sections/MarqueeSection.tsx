import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fire02Icon, Medal01Icon, Target01Icon, ZapIcon, Dumbbell01Icon } from "@hugeicons/core-free-icons";

const testimonialsImages = [
  { src: "/images/testimonials/test1.jpg", alt: "Rencontre communauté — membre 1" },
  { src: "/images/testimonials/test2.jpg", alt: "Rencontre communauté — membre 2" },
  { src: "/images/testimonials/test3.jpg", alt: "Rencontre communauté — membre 3" },
];

const items = [
  { type: "stat", icon: Dumbbell01Icon, value: "320 000", label: "Guerriers actifs" },
  { type: "quote", text: "\"J'ai perdu 8kg en 30 jours. Aucune excuse.\"", author: "— Thomas R." },
  { type: "stat", icon: Fire02Icon, value: "5 séances", label: "par semaine" },
  { type: "quote", text: "\"Le meilleur investissement de ma vie. 9€ pour changer mon corps.\"", author: "— Karim M." },
  { type: "stat", icon: Target01Icon, value: "30 jours", label: "Programme complet" },
  { type: "quote", text: "\"Fini les vidéos YouTube au hasard. Ici c'est un vrai plan.\"", author: "— Julien B." },
  { type: "stat", icon: Medal01Icon, value: "4.9/5", label: "Note moyenne" },
  { type: "quote", text: "\"En déplacement ou à la maison, aucune excuse ne tient.\"", author: "— Sarah L." },
  { type: "stat", icon: ZapIcon, value: "Accès", label: "instantané après achat" },
  { type: "quote", text: "\"Commencé débutant. À la semaine 3, je faisais des tractions.\"", author: "— Mehdi A." },
];

function MarqueeItem({ item }: { item: (typeof items)[0] }) {
  if (item.type === "stat") {
    return (
      <div className="flex items-center gap-4 px-8 border-l border-white/10 shrink-0 group grayscale hover:grayscale-0 transition-all duration-300">
        <div className="w-10 h-10 border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          {item.icon && <HugeiconsIcon icon={item.icon} size={18} color="#FF4500" />}
        </div>
        <div>
          <p className="font-title text-white text-xl leading-none">{item.value}</p>
          <p className="font-body text-secondary text-xs mt-0.5 uppercase tracking-widest">{item.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 border-l border-white/10 max-w-xs shrink-0 group grayscale hover:grayscale-0 transition-all duration-300">
      <p className="font-body text-white/70 text-sm italic leading-snug group-hover:text-white transition-colors">
        {item.text}
      </p>
      <p className="font-body text-primary text-xs mt-1">{item.author}</p>
    </div>
  );
}

export function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <section className="relative bg-black py-16 md:py-20 border-y border-white/5 overflow-hidden">
      {/* Fadeouts gauche/droite */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-10 px-6">
        <p className="font-body text-primary text-xs tracking-[0.4em] uppercase mb-4">
          La communauté
        </p>
        <h2 className="font-title text-[clamp(2rem,6vw,5rem)] leading-[0.9] text-white">
          REJOINS LES{" "}
          <span className="text-primary">320 000</span>{" "}
          GUERRIERS
        </h2>
        <p className="font-body text-secondary italic mt-4">
          Ils ont arrêté les excuses. Ils ont choisi la force.
        </p>
      </div>

      {/* Photos rencontres communauté */}
      <div className="flex justify-center gap-3 px-6 mb-10">
        {testimonialsImages.map((img, i) => (
          <div
            key={i}
            className="relative w-28 h-36 md:w-40 md:h-52 shrink-0 overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 112px, 160px"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Marquee témoignages */}
      <div className="overflow-hidden">
        <div className="animate-marquee gap-0 py-2">
          {doubled.map((item, i) => (
            <MarqueeItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
