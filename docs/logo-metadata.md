

# 📑 SPÉCIFICATIONS : LOGO & METADATA

## 1. Le Logo (L'Identité Visuelle)

L'objectif est de passer d'une photo de tigre à un **logotype vectoriel** minimaliste, agressif et moderne.

### A. Style Graphique
* **Concept :** "Le Prédateur Discipliné". 
* **Forme :** Une tête de tigre de face ou de profil, stylisée avec des traits géométriques et angulaires (pas de courbes douces).
* **Rendu :** * Version **Solid** : Orange (`#FF4500`) sur fond noir.
    * Version **Outline** : Traits fins blancs ou orange sur fond noir pour un look plus "technique/streetwear".
* **Typographie associée :** "PHÉNOMÈNE DE FORCE" écrit en **Bebas Neue** juste à côté ou en dessous, avec un espacement de lettres (letter-spacing) important pour le côté premium.

### B. Usage UI (Next.js)
* **Header (Navbar) :** Le logo en format horizontal (Icône + Texte). L'icône doit faire environ 32px de haut.
* **Footer :** Une version plus grande du logo seul (l'icône) en opacité réduite (10%) en arrière-plan pour le branding.
* **Format :** Impérativement en **SVG** pour garantir une netteté absolue sur tous les écrans (Retina).

---

## 2. Metadata & SEO (Next.js `layout.tsx` ou `page.tsx`)

Pour que le site soit bien référencé et que l'aperçu soit puissant sur Facebook/Instagram/WhatsApp.

### A. Tags SEO Classiques
* **Title :** Phénomène de Force | Bâtis ton corps en 30 jours (Sans matériel)
* **Description :** Arrête les excuses. Transforme ton physique et ton mental en 30 jours avec une méthode brute, sans équipement. Rejoins la meute de +320 000 guerriers.
* **Keywords :** fitness maison, musculation sans matériel, programme 30 jours, phénomène de force, transformation physique, calisthénie, mindset guerrier.

### B. Open Graph (Partage Social)
C'est ce qui s'affiche quand on envoie le lien.
* **OG:Title :** LE MONDE S'EN FOUT DE TOI. LÈVE-TOI.
* **OG:Description :** Télécharge ton guide de 30 jours pour bâtir un corps d'élite à la maison.
* **OG:Image :** Une image 1200x630px. 
    * *Visuel suggéré :* Le coach en noir et blanc, le titre "30 JOURS SANS MATÉRIEL" en orange massif, et le prix "9,15€" bien visible dans un badge.
* **OG:Type :** website

---

## 3. Favicons & Assets Mobile

Pour que le site ressemble à une application une fois installé sur l'écran d'accueil d'un smartphone.

* **favicon.ico :** L'icône du tigre en orange sur fond noir.
* **apple-touch-icon.png :** Version 180x180px pour les iPhones (très important pour le côté "App").
* **android-chrome-192x192.png :** Pour les appareils Android.

---

## 🛠 Instructions pour le Dév (Next.js App Router)

```typescript
// Exemple de configuration dans layout.tsx
export const metadata = {
  title: 'Phénomène de Force | Bâtis ton corps en 30 jours',
  description: 'Transforme ton physique chez toi sans aucun matériel. Discipline. Force. Résultats.',
  openGraph: {
    title: 'Phénomène de Force',
    description: 'Bâtis ton corps en 30 jours sans matériel.',
    url: 'https://phenomene-de-force.com',
    siteName: 'Phénomène de Force',
    images: [
      {
        url: '/og-image.jpg', // Image de partage optimisée
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

