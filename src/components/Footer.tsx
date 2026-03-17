import { Logo } from "@/components/Logo";
import { CHECKOUT_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-8 mb-8">
          {/* Logo */}
          <Logo variant="full" size={28} />

          {/* CTA discret */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm !px-6 !py-3"
          >
            OBTENIR LE PROGRAMME — 9,15€
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-center md:justify-between items-center gap-4">
          <p className="font-body text-secondary text-xs tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Phénomène de Force
          </p>
          <p className="font-body text-secondary text-xs">
            Built by{" "}
            <a
              href="https://fredthedev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-primary transition-colors"
            >
              FredTheDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
