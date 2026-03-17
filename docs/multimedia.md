

# 📑 SPÉCIFICATIONS : SYSTÈME MULTIMÉDIA

## 1. Emplacement Stratégique

* **Bloc A (La Grille Vidéo) :** À placer immédiatement **après la liste des bénéfices** du programme (Section 3). 
    * *Objectif :* Lever le doute technique ("À quoi ça ressemble ?").
* **Bloc B (Le Marquee Communautaire) :** À placer juste **avant le footer ou la FAQ**.
    * *Objectif :* Créer l'effet "foule" et appartenance juste avant le paiement.

---

## 2. Bloc A : La Grille d'Exécution ("Power Grid")

Ce bloc doit montrer la qualité du coaching vidéo.

### Spec Technique (Next.js / Tailwind) :
* **Layout :** `grid-cols-2` sur mobile, `grid-cols-3` ou `grid-cols-4` sur desktop.
* **Composant Vidéo :** Miniatures avec un filtre noir et blanc à 50%. Au `hover`, la vidéo passe en couleur et lance un "preview" muet.
* **Interaction :** Au clic, ouverture d'une **Modale (Lightbox)** avec la vidéo en haute définition et le son.

### Copywriting :
* **H2 (Bebas Neue) :** LA MÉTHODE EN MOUVEMENT
* **Sous-titre (Roboto) :** "Ne devine plus jamais si ton mouvement est correct. Chaque exercice est filmé, détaillé et expliqué."
* **CTA discret sous la grille :** "Inclus dans ton accès immédiat."

---

## 3. Bloc B : Le Marquee "La Meute" (Flux Infini)

C'est un bandeau qui défile tout seul, créant une impression d'activité intense sur le site.

### Spec Technique (CSS Animation) :
* **Vitesse :** Défilement lent (`animation: marquee 30s linear infinite`).
* **Contenu :** Mélange de 10-15 images : photos de training, screenshots de commentaires positifs, tête de tigre stylisée.
* **Effet visuel :** `grayscale hover:grayscale-0` pour inciter à l'interaction.

### Copywriting :
* **H2 (Bebas Neue) :** REJOINS LES 320 000 GUERRIERS
* **Texte (Roboto Italique) :** "Ils ont arrêté les excuses. Ils ont choisi la force."

---

## 🛠 CODE INDICATIF POUR LE DÉV (Tailwind)

Voici comment structurer la grille pour qu'elle soit "brute" et impactante :

```html
<section class="bg-background py-20 border-y border-white/5">
    <div class="container mx-auto px-6 text-center mb-12">
        <h2 class="font-title text-5xl md:text-7xl mb-4 italic">LA MÉTHODE EN <span class="text-primary">MOUVEMENT</span></h2>
        <p class="font-body text-gray-400 max-w-xl mx-auto italic">Chaque répétition compte. Chaque angle est couvert.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white/5 p-1">
        <div class="relative aspect-[9/16] bg-surface overflow-hidden group">
            <img src="/thumb-1.jpg" class="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center text-primary">▶</div>
            </div>
        </div>
        </div>
</section>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: 200%;
  animation: marquee 40s linear infinite;
}
</style>
```
