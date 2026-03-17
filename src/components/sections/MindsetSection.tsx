export function MindsetSection() {
  return (
    <section
      className="relative bg-black py-24 md:py-40 px-6 overflow-hidden -mt-[4vw]"
      style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
    >
      {/* Tiger watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span
          className="font-title text-white leading-none"
          style={{
            fontSize: "clamp(200px, 55vw, 600px)",
            opacity: 0.025,
            letterSpacing: "-0.05em",
          }}
        >
          FORCE
        </span>
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-[4vw]">
        {/* Quote */}
        <div className="mb-8">
          <div className="w-8 h-[3px] bg-primary mx-auto mb-8" />
          <blockquote className="font-title text-[clamp(2rem,6vw,5rem)] leading-[0.95] text-white italic">
            &ldquo;TANT QUE TU NE MEURS PAS,
            <br />
            <span className="text-primary">TU NE LÂCHES PAS.&rdquo;</span>
          </blockquote>
          <div className="w-8 h-[3px] bg-primary mx-auto mt-8" />
        </div>

        {/* Community stat */}
        <p className="font-body text-secondary text-lg max-w-lg mx-auto leading-relaxed">
          Rejoins une communauté de{" "}
          <span className="text-white font-body font-bold">320 000 guerriers</span>{" "}
          qui ont choisi la discipline plutôt que la facilité.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-12 mt-16">
          {[
            { value: "320K", label: "Membres actifs" },
            { value: "30", label: "Jours de programme" },
            { value: "5", label: "Séances / semaine" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-title text-[clamp(2.5rem,6vw,5rem)] text-primary leading-none">
                {s.value}
              </p>
              <p className="font-body text-secondary text-xs tracking-[0.3em] uppercase mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
