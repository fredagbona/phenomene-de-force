interface LogoProps {
  variant?: "full" | "icon";
  size?: number;
  className?: string;
}

function TigerIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left ear */}
      <polygon points="12,36 21,4 32,36" fill="#FF4500" />
      {/* Right ear */}
      <polygon points="68,36 79,4 88,36" fill="#FF4500" />

      {/* Head */}
      <polygon
        points="12,36 88,36 94,58 88,84 66,98 50,104 34,98 12,84 6,58"
        fill="#FF4500"
      />

      {/* Left inner ear (dark) */}
      <polygon points="16,34 21,16 28,34" fill="#0A0A0A" />
      {/* Right inner ear (dark) */}
      <polygon points="72,34 79,16 84,34" fill="#0A0A0A" />

      {/* Left eye — slant agressif */}
      <polygon points="16,62 28,55 32,63 20,70" fill="#0A0A0A" />
      {/* Right eye — miroir */}
      <polygon points="68,55 80,62 76,70 64,63" fill="#0A0A0A" />

      {/* Forehead stripes — 3 traits verticaux */}
      <polygon points="47,38 53,38 52,54 48,54" fill="#0A0A0A" />
      <polygon points="35,39 41,39 39,52 34,52" fill="#0A0A0A" />
      <polygon points="59,39 65,39 66,52 61,52" fill="#0A0A0A" />

      {/* Nose */}
      <polygon points="44,82 50,76 56,82 50,88" fill="#0A0A0A" />

      {/* Mouth — angular W */}
      <polygon points="38,92 44,88 50,95 56,88 62,92 58,96 50,90 42,96" fill="#0A0A0A" />
    </svg>
  );
}

export function Logo({ variant = "full", size = 40, className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={className}>
        <TigerIcon size={size} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TigerIcon size={size} />
      <div className="flex flex-col leading-none">
        <span
          className="font-title text-white tracking-[0.2em]"
          style={{ fontSize: size * 0.55 }}
        >
          PHÉNOMÈNE
        </span>
        <span
          className="font-title text-primary tracking-[0.2em]"
          style={{ fontSize: size * 0.55 }}
        >
          DE FORCE
        </span>
      </div>
    </div>
  );
}
