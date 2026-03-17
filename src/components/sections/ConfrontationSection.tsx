const columns = [
  {
    title: "Pas de salle ?",
    body: "Ton corps est la seule salle de sport dont tu as besoin. Chaque muscle, chaque tendon, tout est là.",
  },
  {
    title: "Pas de temps ?",
    body: "20 minutes par jour suffisent pour ceux qui ont de la volonté. L'excuse du temps est la plus lâche qui soit.",
  },
  {
    title: "Pas de résultats ?",
    body: "Tu manques de méthode, pas de potentiel. La méthode change tout. C'est ce qu'on t'apporte.",
  },
];

export function ConfrontationSection() {
  return (
    <section className="relative bg-background py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="font-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
            ARRÊTE DE CHERCHER
            <br />
            <span className="text-primary">DES EXCUSES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {columns.map((col, i) => (
            <div
              key={i}
              className="glass-card border-r-0 last:border-r border-white/10 group hover:bg-surface/80 transition-colors duration-200"
            >
              <p className="font-body text-xs text-primary tracking-[0.3em] uppercase mb-3">
                0{i + 1}
              </p>
              <h3 className="font-title text-2xl md:text-3xl text-white mb-4 group-hover:text-primary transition-colors duration-200">
                {col.title}
              </h3>
              <p className="font-body text-secondary leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
