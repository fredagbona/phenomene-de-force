import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

const videos = [
  { label: "Pompes & Variantes", duration: "12 min", span: "col-span-1 row-span-2" },
  { label: "Gainage Total", duration: "8 min", span: "col-span-1 row-span-1" },
  { label: "Squats Explosifs", duration: "10 min", span: "col-span-1 row-span-1" },
  { label: "Tractions & Pull", duration: "15 min", span: "col-span-1 row-span-1" },
  { label: "HIIT Brûleur", duration: "20 min", span: "col-span-1 row-span-2" },
  { label: "Mobilité & Force", duration: "18 min", span: "col-span-1 row-span-1" },
];

export function MethodeSection() {
  return (
    <section
      className="relative bg-background py-24 md:py-32 px-6 -mt-[4vw]"
      style={{ clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
    >
      <div className="max-w-6xl mx-auto pt-[4vw]">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-xs tracking-[0.4em] uppercase mb-4">
            La méthode
          </p>
          <h2 className="font-title text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white mb-6">
            L&apos;EXÉCUTION FAIT
            <br />
            <span className="text-primary">LE PHÉNOMÈNE.</span>
          </h2>
          <p className="font-body text-secondary text-lg max-w-xl mx-auto">
            Ne devine plus. Regarde, apprends, et explose tes limites.
          </p>
        </div>

        {/* Grille Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3 h-[600px] md:h-[700px]">
          {videos.map((v, i) => (
            <div
              key={i}
              className={`${v.span} relative overflow-hidden bg-surface border border-white/10 group cursor-pointer`}
            >
              {/* BW gradient background */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover:opacity-0"
                style={{
                  background: `linear-gradient(135deg, #1a1a1a ${i * 10}%, #0a0a0a 100%)`,
                  filter: "grayscale(100%) contrast(1.2)",
                }}
              />
              {/* Color version on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, #1a0800 0%, #2a0a00 ${50 + i * 5}%, #0a0a0a 100%)`,
                }}
              />

              {/* Orange accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="self-end">
                  <span className="font-body text-secondary text-xs tracking-widest uppercase">
                    {v.duration}
                  </span>
                </div>

                <div>
                  <div className="mb-3 w-10 h-10 bg-primary/0 border border-primary/40 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                    <HugeiconsIcon icon={PlayIcon} size={16} color="#FF4500" />
                  </div>
                  <p className="font-title text-white text-lg leading-tight">{v.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
