"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/constants";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");

    let heroGone = false;
    let footerVisible = false;
    const update = () => setVisible(heroGone && !footerVisible);

    const heroObs = new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting; update(); }, { threshold: 0 });
    const footerObs = new IntersectionObserver(([e]) => { footerVisible = e.isIntersecting; update(); }, { threshold: 0 });

    if (hero) heroObs.observe(hero);
    if (footer) footerObs.observe(footer);

    return () => { heroObs.disconnect(); footerObs.disconnect(); };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm border-t border-white/10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full flex items-center justify-center text-center"
      >
        OBTENIR LE PROGRAMME — 9,15€
      </a>
    </div>
  );
}
