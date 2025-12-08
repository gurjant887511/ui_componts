import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";

export default function CyberGlowInfoCardPreview() {
  const sandpackConfig = {
    template: "react",
    theme: "dark",
    files: {
      "/App.js": `import CyberGlowInfoCard from './CyberGlowInfoCard';
import './CyberGlowInfoCard.css';

export default function App() {
  return <CyberGlowInfoCard />;
}`,
      "/CyberGlowInfoCard.jsx": `import React from "react";

export default function CyberGlowInfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-900 to-purple-800 p-6">
      <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_40px_#7e22ce60] hover:shadow-[0_0_70px_#3b82f680] transition-all duration-500 hover:scale-105 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500"></div>
        <div className="relative z-10 flex flex-col items-center p-8 text-white">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_30px_#8b5cf640] group-hover:shadow-[0_0_50px_#06b6d480] transition-all duration-300">
            <i className="fas fa-rocket text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold tracking-wide mb-2">CyberGlow</h2>
          <p className="text-gray-300 text-center text-sm mb-4">
            A futuristic UI component for modern web design — clean, glowing, and interactive.
          </p>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
              Explore
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}`,
      "/CyberGlowInfoCard.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .CyberGlowInfoCard {
    @apply relative w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_40px_#7e22ce60] hover:shadow-[0_0_70px_#3b82f680] transition-all duration-500 hover:scale-105 group;
  }

  .CyberGlowInfoCard .bg-gradient {
    @apply absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500;
  }

  .CyberGlowInfoCard .content {
    @apply relative z-10 flex flex-col items-center p-8 text-white;
  }

  .CyberGlowInfoCard .icon {
    @apply w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_30px_#8b5cf640] group-hover:shadow-[0_0_50px_#06b6d480] transition-all duration-300;
  }

  .CyberGlowInfoCard h2 {
    @apply text-2xl font-bold tracking-wide mb-2;
  }

  .CyberGlowInfoCard p {
    @apply text-gray-300 text-center text-sm mb-4;
  }

  .CyberGlowInfoCard .button {
    @apply px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300;
  }

  .CyberGlowInfoCard .button-secondary {
    @apply px-5 py-2 rounded-full bg-white/10 border border-white/20 font-medium hover:bg-white/20 transition-all duration-300;
  }

  .CyberGlowInfoCard .animate-pulse {
    @apply mt-8 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse;
  }
}`
    },
    dependencies: {
      "tailwindcss": "^3.0.0",
      "@tailwindcss/postcss7-compat": "^2.0.0",
      "postcss": "^8.0.0",
      "autoprefixer": "^10.0.0"
    },
    options: {
      showLineNumbers: true,
      showInlineErrors: true,
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Cyber Glow Info Card
      </h1>
      <div className="rounded-lg overflow-hidden">
        <Sandpack {...sandpackConfig} />
      </div>
    </div>
  );
}