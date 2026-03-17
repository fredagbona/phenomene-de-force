

# 📂 DESIGN_SYSTEM.md

## 🎨 Univers Visuel : Phénomène de Force (V2)
**Concept :** Dark Mode Premium, Haute Intensité, Discipline.

---

## 🛠 1. Configuration Tailwind CSS (`tailwind.config.js`)

À copier-coller dans le projet pour harmoniser toutes les couleurs et les polices.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A", // Noir profond mat
        surface: "#161616",    // Gris très foncé pour les cartes/sections
        primary: {
          DEFAULT: "#FF4500",  // Orange Brûlé principal
          hover: "#E63E00",
          glow: "rgba(255, 69, 0, 0.35)",
        },
        secondary: "#A0A0A0",  // Gris pour le texte secondaire
      },
      fontFamily: {
        title: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)',
      },
    },
  },
  plugins: [],
};
```

---

## 🔡 2. Intégration des Polices (Next.js `layout.tsx`)

Utilisation de `next/font` pour optimiser le chargement via Google Fonts.

```typescript
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-bebas' 
});

const roboto = Roboto({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-roboto' 
});

// Appliquer les variables dans le Body :
// <body className={`${bebas.variable} ${roboto.variable} font-body bg-background text-white`}>
```

---

## 🖌 3. Styles Globaux (`globals.css`)

Règles pour le rendu visuel et les effets de "Force".

```css
@layer base {
  h1, h2, h3, .font-title {
    @apply font-title uppercase tracking-wider;
  }
  
  body {
    @apply bg-background text-white antialiased;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary hover:bg-primary-hover text-white font-title text-xl px-8 py-4 
           transition-all duration-300 ease-in-out transform hover:scale-105
           shadow-[0_0_15px_rgba(255,69,0,0.4)];
  }

  .glass-card {
    @apply bg-surface border border-white/10 rounded-none p-6;
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white to-primary;
  }
}
```

---

## ⚡ 4. Directives UI pour le Dév

1.  **Bords :** Ne pas utiliser d'arrondis (`rounded-none`). On veut un aspect brut, "coupé au couteau".
2.  **Images :** Appliquer un léger filtre de contraste et de désaturation sur les photos de fitness, sauf pour les éléments orange.
3.  **Animations :** Transitions rapides (200-300ms). Pas de fioritures "smooth" inutiles, on veut de la réactivité.
4.  **CTA :** Le bouton principal doit toujours avoir le "glow" orange (`shadow-primary-glow`).

