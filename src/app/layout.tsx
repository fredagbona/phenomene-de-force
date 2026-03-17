import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import { Providers } from "@/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phenomene-de-force.com"),
  title: "Phénomène de Force | Bâtis ton corps en 30 jours (Sans matériel)",
  description:
    "Arrête les excuses. Transforme ton physique et ton mental en 30 jours avec une méthode brute, sans équipement. Rejoins la meute de +320 000 guerriers.",
  keywords: [
    "fitness maison",
    "musculation sans matériel",
    "programme 30 jours",
    "phénomène de force",
    "transformation physique",
    "calisthénie",
    "mindset guerrier",
  ],
  openGraph: {
    title: "LE MONDE S'EN FOUT DE TOI. LÈVE-TOI.",
    description:
      "Télécharge ton guide de 30 jours pour bâtir un corps d'élite à la maison.",
    url: "https://phenomene-de-force.com",
    siteName: "Phénomène de Force",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phénomène de Force — Programme 30 Jours Sans Matériel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LE MONDE S'EN FOUT DE TOI. LÈVE-TOI.",
    description: "Télécharge ton guide de 30 jours pour bâtir un corps d'élite à la maison.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${bebas.variable} ${roboto.variable} font-body bg-background text-white antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
