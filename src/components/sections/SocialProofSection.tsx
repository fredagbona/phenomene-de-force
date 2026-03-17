"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook01Icon, InstagramIcon, ThreadsIcon } from "@hugeicons/core-free-icons";

const socials = [
  {
    name: "Facebook",
    icon: Facebook01Icon,
    target: 234000,
    display: (n: number) => `${Math.round(n / 1000)}K`,
    final: "234K",
    label: "Followers",
    url: "https://www.facebook.com/profile.php?id=100088681437185",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    target: 87300,
    display: (n: number) => `${(n / 1000).toFixed(1)}K`,
    final: "87.3K",
    label: "Followers",
    url: "https://www.instagram.com/phenomene_de_force/",
  },
  {
    name: "Threads",
    icon: ThreadsIcon,
    target: null,
    display: () => "Actif",
    final: "Actif",
    label: "Communauté",
    url: "https://www.threads.com/@phenomene_de_force",
  },
];

function useCountUp(target: number | null, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatCard({
  social,
  active,
}: {
  social: (typeof socials)[0];
  active: boolean;
}) {
  const count = useCountUp(social.target, active);
  const displayed =
    social.target === null ? social.final : active ? social.display(count) : "0";

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-8 md:p-12 border-r border-white/10 last:border-0 group hover:bg-white/[0.02] transition-colors duration-200"
    >
      <HugeiconsIcon
        icon={social.icon}
        size={28}
        color="#A0A0A0"
        className="mb-5 group-hover:text-primary transition-colors"
      />
      <span className="font-title text-[clamp(3rem,8vw,6rem)] leading-none text-primary tracking-tighter">
        {displayed}
      </span>
      <div className="flex items-center gap-2 mt-3">
        <span className="font-body text-secondary uppercase tracking-[0.3em] text-xs">
          {social.name}
        </span>
        <span className="text-white/20">·</span>
        <span className="font-body text-secondary uppercase tracking-[0.3em] text-xs">
          {social.label}
        </span>
      </div>
    </a>
  );
}

export function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-background border-t-2 border-primary py-16 md:py-24 px-6"
    >
      {/* Glow sur la bordure supérieure */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary shadow-[0_0_20px_4px_rgba(255,69,0,0.4)]" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="font-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
            LA PUISSANCE
            <br />
            <span className="text-primary">DU NOMBRE.</span>
          </h2>
          <p className="font-body text-secondary mt-4 text-lg">
            Ce n&apos;est pas juste un programme. C&apos;est un mouvement.
          </p>
        </div>

        {/* Compteurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {socials.map((s) => (
            <StatCard key={s.name} social={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
