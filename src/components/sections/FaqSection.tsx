"use client";

import { useState } from "react";
import { CHECKOUT_URL } from "@/lib/constants";

const faqs = [
  {
    question: "Est-ce que j'ai vraiment besoin de matériel ?",
    answer:
      "Absolument aucun. Pas de barres, pas d'haltères, pas de banc. On utilise uniquement le poids de ton corps et des objets du quotidien (chaise, mur). Ta détermination est ton seul équipement.",
  },
  {
    question: "Je suis débutant, est-ce que c'est trop dur pour moi ?",
    answer:
      "Le programme est conçu pour être progressif. Chaque exercice possède des variantes. Si tu ne peux pas faire une pompe classique, je te montre comment commencer. L'important n'est pas d'où tu pars, mais que tu ne t'arrêtes pas.",
  },
  {
    question: "Comment je reçois le programme après l'achat ?",
    answer:
      "Immédiatement. Dès que le paiement est validé, tu reçois un lien par email pour télécharger ton guide PDF et accéder aux vidéos d'exécution. Pas d'attente, pas de livraison, tu peux commencer dans 5 minutes.",
  },
  {
    question: "Qu'est-ce qui différencie ce programme des vidéos gratuites ?",
    answer:
      "La structure. Sur YouTube, tu papillonnes. Ici, tu as un plan de guerre sur 30 jours. Chaque séance est calculée pour optimiser la tension musculaire et la perte de gras. Tu n'as plus à réfléchir, juste à exécuter.",
  },
  {
    question: "Est-ce que je peux le suivre si je voyage souvent ?",
    answer:
      "C'est l'outil parfait pour les nomades. Que tu sois dans une chambre d'hôtel, un parc ou ton salon, ton programme est sur ton téléphone. Aucune excuse n'est acceptée.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-white/10 cursor-pointer group transition-colors duration-200 ${
        isOpen ? "border-l-2 border-l-primary pl-5" : "pl-0"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <h3
          className={`font-title text-xl md:text-2xl leading-tight transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-white group-hover:text-primary/80"
          }`}
        >
          {question}
        </h3>
        <span
          className={`shrink-0 w-8 h-8 border flex items-center justify-center font-title text-xl transition-all duration-200 ${
            isOpen
              ? "border-primary text-primary rotate-45"
              : "border-white/20 text-secondary"
          }`}
        >
          +
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-body text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section
      className="relative bg-surface py-24 md:py-32 px-6 -mt-[4vw]"
      style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
    >
      <div className="max-w-3xl mx-auto pt-[4vw]">
        {/* Header */}
        <div className="mb-14">
          <p className="font-body text-primary text-xs tracking-[0.4em] uppercase mb-4">
            On répond à tout
          </p>
          <h2 className="font-title text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] text-white">
            TES QUESTIONS.
            <br />
            <span className="text-primary">NOS RÉPONSES.</span>
          </h2>
        </div>

        {/* Accordéons */}
        <div className="divide-y-0">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Final Close */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <p className="font-title text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.95] text-white mb-8">
            PLUS DE QUESTIONS ?
            <br />
            <span className="text-primary">PASSE À L&apos;ACTION.</span>
          </p>

          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            OBTENIR MON ACCÈS INSTANTANÉ — 9,15€
          </a>

          <p className="font-body text-secondary text-sm mt-4">
            <span className="line-through">22,86€</span>&nbsp;·&nbsp;Accès à vie&nbsp;·&nbsp;Paiement unique
          </p>
        </div>
      </div>
    </section>
  );
}
