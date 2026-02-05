# My Portfolio

A modern, responsive portfolio website built with React and Vite, featuring 3D animations and a sleek UI.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `tailind-merge` + `clsx`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Routing:** [React Router](https://reactrouter.com/)

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Dark/Light Mode**: Dynamic theme switching with system preference detection.
- **Interactive 3D Elements**:
  - Immersive Hero section with floating 3D geometry.
  - Custom 3D butterfly animations using Three.js.
- **Project Showcases**: Distinct sections for Work and Personal projects.
- **Modern UI Components**: Built with reusable, accessible components (based on Radix UI primitives).

## 📂 Project Structure

```
src/
├── components/
│   ├── portfolio/    # Main sections (Hero, About, Projects, etc.)
│   │   └── 3D/       # Three.js components (FloatingGeometry, etc.)
│   └── ui/           # Reusable UI primitives (Button, Badge, etc.)
├── pages/            # Page layouts (Home.jsx)
├── lib/              # Utilities (utils.js)
└── App.jsx           # Main application entry and routing
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