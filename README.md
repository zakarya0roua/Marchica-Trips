# 🌊 Marchica Trips

### Découvrez la lagune de Marchica autrement

**Marchica Trips** est une plateforme web responsive dédiée à la découverte des activités touristiques autour de la lagune de Marchica, à Nador, au Maroc. Elle permet aux visiteurs de découvrir des expériences uniques, de consulter les informations pratiques et de préparer leurs réservations facilement.

---

## 📌 Présentation du projet

Ce projet consiste à concevoir et développer une interface web moderne, intuitive et accessible, adaptée aux besoins des voyageurs locaux et internationaux.

L'objectif est d'offrir une expérience utilisateur fluide sur mobile, tablette et ordinateur, tout en valorisant le patrimoine naturel et culturel de la région de Nador.

## ✨ Fonctionnalités

- 🏠 **Accueil** — présentation de l'agence et mise en avant des activités phares.
- 🛶 **Catalogue des activités** — découverte des excursions et expériences proposées.
- 🏞️ **Détail des activités** — galerie photos, programme, tarifs et informations pratiques.
- 📅 **Réservation** — formulaire avec champs accessibles et validation native.
- ❓ **FAQ** — réponses aux questions fréquentes des visiteurs.
- 📱 **Menu responsive** — navigation adaptée aux appareils mobiles.
- ♿ **Accessibilité** — navigation au clavier, focus visible et contrastes conformes aux bonnes pratiques WCAG.
- 🎨 **Design System** — composants et styles visuels cohérents et réutilisables.

## 🛶 Activités proposées

- Kayak sur la lagune de Marchica
- Balades en bateau
- Randonnées au mont Gourougou
- Découverte de la gastronomie locale
- Observation des oiseaux et découverte de la nature

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure sémantique des pages |
| CSS3 | Mise en page et styles complémentaires |
| Tailwind CSS v4 | Styles utilitaires et Design System |
| Vite | Environnement de développement et build |
| Git & GitHub | Gestion du code et collaboration |
| Figma | Maquettes haute fidélité et Design System |

> La stack exacte doit correspondre aux technologies réellement utilisées dans le dépôt.

## 📂 Structure du projet

```text
Marchica-Trips/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Cette arborescence est indicative : adapte-la à la structure réelle du projet.*

## 🚀 Installation et lancement

### Prérequis

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Cloner le dépôt

```bash
git clone https://github.com/zakarya0roua/Marchica-Trips.git
```

### 2. Accéder au projet

```bash
cd Marchica-Trips
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvre ensuite l'adresse locale indiquée dans le terminal par Vite.

### 5. Générer la version de production

```bash
npm run build
```

Pour vérifier le résultat de production :

```bash
npm run preview
```

## 🎨 Design System

Le Design System vise à garantir une identité visuelle cohérente sur toutes les pages.

- **Couleurs :** bleu profond, turquoise et tons neutres inspirés de la lagune.
- **Typographie :** hiérarchie claire et lisible.
- **Espacements :** échelle cohérente et réutilisable.
- **Composants :** boutons, cartes d'activités, champs de formulaire et éléments de navigation.
- **Responsive design :** approche mobile-first avec les points de rupture Tailwind CSS.
- **Accessibilité :** contrastes vérifiés, focus visible et interactions utilisables au clavier.

Les couleurs, espacements et tailles doivent être centralisés dans le thème Tailwind CSS v4 via `@theme`.

## ♿ Accessibilité et qualité

Le projet accorde une attention particulière à :

- La navigation complète au clavier.
- Un lien d'évitement vers le contenu principal.
- Des labels associés aux champs de formulaire.
- Des textes alternatifs pertinents pour les images.
- Des indicateurs de focus toujours visibles.
- Un contraste de texte conforme au niveau WCAG AA, soit généralement **4,5:1 pour le texte courant**.
- Des tests avec axe DevTools et Lighthouse.

## 🌿 Workflow Git

Le développement collaboratif suit un workflow inspiré de Git Flow.

- `main` : version stable du projet.
- `develop` : branche d'intégration.
- `feature/<clé-jira>-<description>` : développement d'une fonctionnalité.

Chaque fonctionnalité doit être intégrée via une **Pull Request**, relue par un autre membre de l'équipe et associée à une user story. Aucun push direct n'est autorisé sur `main` ou `develop`.

## 👥 Équipe du projet

Projet réalisé en trinôme dans le cadre d'un travail collaboratif de conception et de développement web.

- **Membre 1 :** [ BEN ABOU ANASS ]
- **Membre 2 :** [ ELHOUSSINE ASSOUMA ]
- **Membre 3 :** [ Aouaj Yassine ]
- **Membre 3 :** [ LAMSSIAH MOHAMED ]
- **Membre 3 :** [ Zakarya Roua ]



Les rôles Scrum Master, Gardien du Design System et Gardien de l'accessibilité sont répartis au sein de l'équipe.

## 🔗 Liens du projet

- **Dépôt GitHub :** https://github.com/zakarya0roua/Marchica-Trips
- **Maquette Figma :** [Ajouter le lien Figma]
- **Site déployé :** [Ajouter le lien Netlify, Vercel ou GitHub Pages]
- **Board de suivi :** [Ajouter le lien Jira ou GitHub Projects]

## 🎯 Objectifs pédagogiques

- Concevoir une interface responsive selon une approche mobile-first.
- Appliquer les principes fondamentaux de l'accessibilité web.
- Construire un Design System réutilisable.
- Collaborer efficacement avec Git, GitHub et les Pull Requests.
- Organiser le travail à l'aide d'un board et d'un sprint.
- Tester et déployer une application web.

## 📄 Licence

Projet réalisé dans un cadre pédagogique. Les conditions de réutilisation du code et des ressources graphiques restent à préciser par l'équipe.

---

*Marchica Trips — Explorez, découvrez et vivez la lagune de Marchica.* 🌊
