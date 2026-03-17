

# 📑 SPÉCIFICATIONS : SECTION FAQ (OBJECTIONS & RÉASSURANCE)

## 1. Design UI
* **Style :** Accordéons (ouvrants/fermants) minimalistes.
* **Couleurs :** Fond `#161616` (Gris surface), bordures fines Orange `#FF4500` uniquement sur l'élément actif.
* **Typographie :** Question en **Bebas Neue** (taille moyenne), Réponse en **Roboto**.

---

## 2. Le Copywriting (Questions / Réponses)

### Q1 : "Est-ce que j'ai vraiment besoin de matériel ?"
* **Réponse :** Absolument aucun. Pas de barres, pas d'haltères, pas de banc. On utilise uniquement le poids de ton corps et des objets du quotidien (chaise, mur). Ta détermination est ton seul équipement.

### Q2 : "Je suis débutant, est-ce que c'est trop dur pour moi ?"
* **Réponse :** Le programme est conçu pour être progressif. Chaque exercice possède des variantes. Si tu ne peux pas faire une pompe classique, je te montre comment commencer. L'important n'est pas d'où tu pars, mais que tu ne t'arrêtes pas.

### Q3 : "Comment je reçois le programme après l'achat ?"
* **Réponse :** Immédiatement. Dès que le paiement est validé, tu reçois un lien par email pour télécharger ton guide PDF et accéder aux vidéos d'exécution. Pas d'attente, pas de livraison, tu peux commencer dans 5 minutes.

### Q4 : "Qu'est-ce qui différencie ce programme des vidéos gratuites ?"
* **Réponse :** La structure. Sur YouTube, tu papillonnes. Ici, tu as un plan de guerre sur 30 jours. Chaque séance est calculée pour optimiser la tension musculaire et la perte de gras. Tu n'as plus à réfléchir, juste à exécuter.

### Q5 : "Est-ce que je peux le suivre si je voyage souvent ?"
* **Réponse :** C'est l'outil parfait pour les nomades. Que tu sois dans une chambre d'hôtel, un parc ou ton salon, ton programme est sur ton téléphone. Aucune excuse n'est acceptée.

---

## 3. Le "Final Close" (Juste sous la FAQ)
Juste après la dernière question, on place un dernier bloc de conversion pour ne pas laisser l'utilisateur repartir en haut de page.

* **Texte (Bebas) :** "PLUS DE QUESTIONS ? PASSE À L'ACTION."
* **Bouton :** **OBTENIR MON ACCÈS INSTANTANÉ (9,15€)**

---

## 🛠 Instructions pour le Dév (Composant FAQ)

```jsx
// Logique suggérée pour l'accordéon
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b border-white/10 py-4 cursor-pointer ${isOpen ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
      <h3 className="font-title text-2xl flex justify-between items-center">
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && <p className="font-body text-gray-400 mt-2 transition-all">{answer}</p>}
    </div>
  );
};
```

