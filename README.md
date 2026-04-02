# My Portfolio

A modern, responsive portfolio website built with React and Vite, featuring 3D animations and a sleek UI.


## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `tailwind-merge` + `clsx`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Routing:** [React Router](https://reactrouter.com/)

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Dark/Light Mode**: Theme syncing with system preference and persistent user selection.
- **Interactive 3D Elements**:
  - Hero and project sections with lazy-loaded Three.js visuals.
  - Interactive 3D skill cloud in the About section (disabled for mobile and reduced-motion mode).
- **Project Showcases**: Distinct sections for Work and Personal projects.
- **Modern UI Components**: Built with reusable, accessible components (based on Radix UI primitives).

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/    # Main sections (Hero, About, Projects, etc.)
│   │   └── 3D/       # Three.js components (FloatingGeometry, etc.)
│   └── ui/           # Reusable UI primitives (Button, Badge, etc.)
├── hooks/            # Shared hooks (ex: use-mobile)
├── pages/            # Page layouts (Home.jsx)
├── lib/              # Utilities (utils.js)
├── App.jsx           # Main application entry and routing
└── main.jsx          # Vite/React entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build the project for production:
```bash
npm run build
```

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

### Type Checking

Run TypeScript checks for project consistency:
```bash
npm run typecheck
```

### Testing

Run the unit test suite:
```bash
npm run test
```

Run tests in watch mode during development:
```bash
npm run test:watch
```
