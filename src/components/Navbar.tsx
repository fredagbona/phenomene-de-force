import { Logo } from "@/components/Logo";
import { CHECKOUT_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between px-6 md:px-10 h-16 md:h-20 max-w-7xl mx-auto">
        <a href="#" aria-label="Phénomène de Force — Accueil">
          <Logo variant="full" size={32} />
        </a>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block btn-primary !text-sm !px-6 !py-2.5"
        >
          OBTENIR LE PROGRAMME
        </a>

        {/* Mobile — prix pill */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden font-title text-sm text-white bg-primary px-4 py-2 shadow-[0_0_12px_rgba(255,69,0,0.4)]"
        >
          9,15€
        </a>
      </nav>
    </header>
  );
}
