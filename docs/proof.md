

# 📑 SPÉCIFICATIONS : COMPTEURS DE PUISSANCE (SOCIAL PROOF)

## 1. Emplacement et Rôle
Les réseaux sociaux doivent apparaître à deux moments clés pour rassurer l'utilisateur :
1.  **Dans le Hero (Discret) :** Pour établir la crédibilité dès la première seconde.
2.  **Section "La Meute" (Massif) :** Un bloc dédié qui montre l'ampleur de la communauté avant l'acte d'achat.

---

## 2. Bloc A : La Crédibilité Immédiate (Hero)
[cite_start]Placer sous le bouton d'appel à l'action principal[cite: 11, 63].

* **Design :** Icônes minimalistes en blanc (opacité 60%).
* [cite_start]**Copy :** "Rejoint par +320 000 guerriers sur les réseaux"[cite: 72, 76, 85, 86].
* **Action :** Lien direct vers les profils respectifs.

---

## 3. Bloc B : Le "Compteur de Force" (Section Dédiée)
[cite_start]Une section à placer juste avant le message du coach[cite: 78].

### Spec Visuelle :
* **Fond :** Noir `#0A0A0A` avec une bordure supérieure orange `#FF4500`.
* **Animation :** Les chiffres doivent s'incrémenter (compteur qui défile) lorsque la section devient visible à l'écran.
* **Colonnes (3) :**
    1.  [cite_start]**FACEBOOK :** **234K** Followers[cite: 14, 72, 85].
    2.  [cite_start]**INSTAGRAM :** **87.3K** Followers[cite: 14, 76, 86].
    3.  [cite_start]**THREADS :** Icône stylisée[cite: 14, 87].

### Copywriting associé :
* **H2 (Bebas Neue) :** LA PUISSANCE DU NOMBRE.
* **Texte (Roboto) :** "Ce n'est pas juste un programme. C'est un mouvement."

---

## 🛠 Directives pour le Développeur (Tailwind + Framer Motion)

```typescript
// Exemple de configuration des liens sociaux
const socialLinks = [
  { name: 'Facebook', count: '234K', url: 'https://facebook.com/...' },
  { name: 'Instagram', count: '87.3K', url: 'https://instagram.com/...' },
  { name: 'Threads', count: 'Actif', url: 'https://threads.net/...' },
];

// Composant Statistique
const StatCard = ({ name, count }) => (
  <div className="flex flex-col items-center p-8 border-r border-white/10 last:border-0">
    <span className="text-primary font-title text-6xl md:text-8xl tracking-tighter">
      {count}
    </span>
    <span className="font-body text-gray-400 uppercase tracking-widest text-sm">
      {name} Followers
    </span>
  </div>
);
```

