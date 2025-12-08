import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ImportsComponents from './components/ImportsComponents';
import './styles/globals.css';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import ComponentLivePreview from './components/LivePreview';
import ComponentShowcase, { GlassCard, NeonButton, MorphIcon, FloatingTag, TimelineStepper } from './imports/StylishComponents';

// Import all card and button components
import AllInOneShowcase from './imports/AllInOneShowcase';
import CyberGlowInfoCard from './imports/CyberGlowInfoCard';
import GlassButtonComp from './imports/GlassButton';
import ButtonExamples from './imports/ButtonExamples';
import CardExample from './imports/CardExample';
import InteractiveCard from './imports/InteractiveCard';
import StylishCard from './imports/StylishCard';
import BigStylishCard from './imports/BigStylishCard';
import StylishLoginCard from './imports/StylishLoginCard';
import UsersCardList from './imports/UsersCardList';
import TextHoverEffect from './imports/TextHoverEffect';
import NeonGlowText from './imports/NeonGlowText';
import ShimmerText from './imports/ShimmerText';
import AuroraGlass from './imports/AuroraGlass';
import StylishUserCard from './imports/StylishUserCard';
import SignupCard from './imports/SignupCard';
import ContactCard from './imports/ContactCard';
import FileUploadCard from './imports/FileUploadCard';
import ForgotPasswordCard from './imports/ForgotPasswordCard';
import CometCard from './imports/CometCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const COMPONENTS_LIST = [
  { 
    id: 'button-example', 
    name: 'Button Examples', 
    component: ButtonExamples,
    code: `import React from 'react';

export default function ButtonExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Basic Buttons */}
      <div>
        <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
          Primary Button
        </button>
        <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all">
          Success Button
        </button>
      </div>
      
      {/* Button Sizes */}
      <div>
        <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg text-sm">
          Small
        </button>
        <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg">
          Medium
        </button>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'card-example', 
    name: 'Card Example', 
    component: CardExample,
    code: `const cards = [
  { title: 'Card One', content: 'Beautiful card with shadow effects.' },
  { title: 'Card Two', content: 'Each card has its own unique styling.' },
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {cards.map((card, idx) => (
    <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all">
      <h3 className="text-xl font-bold mb-3">{card.title}</h3>
      <p className="text-gray-300">{card.content}</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
        Learn More
      </button>
    </div>
  ))}
</div>`
  },
  { 
    id: 'cybrglow', 
    name: 'CyberGlow Card', 
    component: CyberGlowInfoCard,
    code: `// Cyber Glow Card with neon effects
<div className="bg-black/50 border-2 border-cyan-500/50 rounded-lg p-6">
  <h3 className="text-2xl font-bold text-cyan-400" style={{
    textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff'
  }}>
    Cyber Glow
  </h3>
  <p className="text-white/80 mt-3">Neon-inspired design</p>
</div>`
  },
  { 
    id: 'all-components', 
    name: 'All Components', 
    component: AllInOneShowcase,
    code: `// Showcase all component types
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Cards */}
  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6">
    Card Component
  </div>
  
  {/* Tabs */}
  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6">
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 rounded-lg">Tab 1</button>
      <button className="px-4 py-2 bg-white/10 rounded-lg">Tab 2</button>
    </div>
  </div>
  
  {/* Accordion */}
  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6">
    Accordion Component
  </div>
  
  {/* Avatars & Badges */}
  <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6">
    Avatars & Badges
  </div>
</div>`
  },
  { 
    id: 'interactive-card', 
    name: 'Interactive Card', 
    component: InteractiveCard,
    code: `import React, { useState } from 'react';

export default function InteractiveCard() {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    { title: 'Interactive', content: 'Click to see interaction' },
    { title: 'Dynamic', content: 'Cards respond to your clicks' },
  ];

  return (
    <div>
      <div className="flex gap-4 mb-8">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCard(idx)}
            className={activeCard === idx ? 'bg-white text-slate-900' : 'bg-white/10'}
          >
            {card.title}
          </button>
        ))}
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-12">
        <h2 className="text-3xl font-bold">{cards[activeCard].title}</h2>
      </div>
    </div>
  );
}`
  },
  { 
    id: 'stylish-card', 
    name: 'Stylish Card', 
    component: StylishCard,
    code: `// Gradient Card
<div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 shadow-2xl hover:scale-105 transition-all">
  <h3 className="text-2xl font-bold mb-3">Gradient Card</h3>
  <p className="text-white/90 mb-4">Beautiful gradient background</p>
  <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg">
    Explore
  </button>
</div>

// Glass Effect Card
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8">
  <h3 className="text-2xl font-bold mb-3">Glass Effect</h3>
  <p className="text-white/90 mb-4">Modern glassmorphism design</p>
</div>`
  },
  { 
    id: 'big-stylish', 
    name: 'BigStylish Card', 
    component: BigStylishCard,
    code: `// Large Hero Card
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-16 shadow-2xl">
  <h2 className="text-5xl font-bold mb-4">Premium Features</h2>
  <p className="text-xl text-white/90 mb-8">Experience advanced UI components</p>
  <div className="flex gap-4">
    <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg">
      Get Started
    </button>
    <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg">
      Learn More
    </button>
  </div>
</div>`
  },
  { 
    id: 'login-card', 
    name: 'StylishLogin Card', 
    component: StylishLoginCard,
    code: `import React, { useState } from 'react';

export default function StylishLoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        
        <input type="email" placeholder="Email" 
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-4" />
        
        <input type="password" placeholder="Password" 
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-6" />
        
        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
          Sign In
        </button>
      </div>
    </div>
  );
}`
  },
  { 
    id: 'users-list', 
    name: 'UsersCard List', 
    component: UsersCardList,
    code: `const users = [
  { name: 'Sarah Johnson', role: 'Designer', avatar: '👩‍💼' },
  { name: 'Mike Chen', role: 'Developer', avatar: '👨‍💻' },
  { name: 'Emma Davis', role: 'Product Manager', avatar: '👩‍💼' },
];

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {users.map((user, idx) => (
    <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{user.avatar}</div>
        <div>
          <h3 className="text-lg font-bold">{user.name}</h3>
          <p className="text-gray-400 text-sm">{user.role}</p>
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        View Profile
      </button>
    </div>
  ))}
</div>`
  },
  { 
    id: 'text-hover', 
    name: 'TextHover Effect', 
    component: TextHoverEffect,
    code: `// Glow on Hover
<p className="text-4xl font-bold hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer">
  Hover over me
</p>

// Color Transition
<p className="text-4xl font-bold text-white hover:text-purple-400 transition-all duration-300 cursor-pointer">
  Smooth Color Change
</p>

// Underline Animation
<p className="text-lg font-semibold relative inline-block group cursor-pointer">
  Hover Text Effect
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
</p>`
  },
  { 
    id: 'neon-text', 
    name: 'NeonGlow Text', 
    component: NeonGlowText,
    code: `// Neon Text with Glow Effect
<h2 className="text-5xl font-black text-cyan-400" style={{
  textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #0099cc'
}}>
  NEON GLOW
</h2>

// Pink Neon
<h2 className="text-5xl font-black text-pink-400" style={{
  textShadow: '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #d600a6'
}}>
  ELECTRIC
</h2>`
  },
  { 
    id: 'shimmer-text', 
    name: 'Shimmer Text', 
    component: ShimmerText,
    code: `// Shimmer Text Animation
<style>{
  \`@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  .shimmer-text {
    background: linear-gradient(90deg, #fff 0%, #60a5fa 50%, #fff 100%);
    background-size: 1000px 100%;
    animation: shimmer 3s infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }\`
}</style>

<div className="shimmer-text text-3xl font-bold">Shimmer Effect</div>`
  },
  { 
    id: 'aurora-glass', 
    name: 'Aurora Glass', 
    component: AuroraGlass,
    code: `// Aurora Glass Effect
<div className="relative overflow-hidden rounded-2xl p-12">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-xl p-8">
    <h2 className="text-3xl font-bold mb-4">Aurora Glass</h2>
    <p className="text-white/80">Beautiful glass effect with aurora background</p>
  </div>
</div>`
  },
  { 
    id: 'user-card', 
    name: 'Stylish User Card', 
    component: StylishUserCard,
    code: `// User Profile Card
<div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
  <div className="text-center mb-6">
    <div className="text-7xl mb-4">👨‍💼</div>
    <h2 className="text-2xl font-bold">Alex Johnson</h2>
    <p className="text-blue-400 font-semibold">UI/UX Designer</p>
  </div>
  
  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-400">24</div>
      <div className="text-xs text-white/60">Projects</div>
    </div>
  </div>
  
  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
    Follow
  </button>
</div>`
  },
  { 
    id: 'signup-card', 
    name: 'Signup Card', 
    component: SignupCard,
    code: `// Signup Form Card
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
  <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
  
  <input type="text" placeholder="Full Name" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-4" />
  
  <input type="email" placeholder="Email" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-4" />
  
  <input type="password" placeholder="Password" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-6" />
  
  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
    Sign Up
  </button>
</div>`
  },
  { 
    id: 'contact-card', 
    name: 'Contact Card', 
    component: ContactCard,
    code: `// Contact Form Card
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
  <h1 className="text-3xl font-bold text-center mb-8">Get In Touch</h1>
  
  <input type="text" placeholder="Your Name" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg mb-4" />
  
  <input type="email" placeholder="Email" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg mb-4" />
  
  <textarea placeholder="Message" rows="5"
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg mb-6"></textarea>
  
  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
    Send Message
  </button>
</div>`
  },
  { 
    id: 'file-upload', 
    name: 'FileUpload Card', 
    component: FileUploadCard,
    code: `// File Upload Card
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
  <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center cursor-pointer">
    <div className="text-4xl mb-3">📁</div>
    <p className="text-white/80 font-semibold mb-2">Drop your file here</p>
    <p className="text-white/60 text-sm">or click to browse</p>
  </div>
  
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
    <p className="text-sm text-white/60">Selected File</p>
    <p className="font-semibold text-blue-400">document.pdf</p>
  </div>
</div>`
  },
  { 
    id: 'forgot-pass', 
    name: 'ForgotPassword Card', 
    component: ForgotPasswordCard,
    code: `// Forgot Password Form
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
  <h1 className="text-3xl font-bold text-center mb-8">Forgot Password</h1>
  
  <input type="email" placeholder="Enter your email" 
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white mb-4" />
  
  <p className="text-sm text-white/60 mb-6">
    We'll send you an email with instructions to reset your password.
  </p>
  
  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg">
    Send Reset Link
  </button>
</div>`
  },
  { 
    id: 'comet-card', 
    name: 'Comet Card', 
    component: CometCard,
    code: `// Comet Animation Card
<style>{
  \`@keyframes comet {
    0% { left: -100%; opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
  .comet-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: comet 2s infinite;
  }\`
}</style>

<div className="comet-card bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
  <h3 className="text-2xl font-bold">Comet Effect</h3>
  <p className="text-white/90">Beautiful animation across the card</p>
</div>`
  },
];

// Components from seed.js (Backend)
const SEED_COMPONENTS = [
  { 
    id: 'btn-examples', 
    name: 'Button Examples', 
    code: `function ButtonExample() {
  return (
    <div className="space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Primary Button
      </button>
      <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
        Ghost Button
      </button>
    </div>
  );
}` 
  },
  { 
    id: 'card-ex', 
    name: 'Card Example', 
    code: `function CardExample() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold">Sample Card</h3>
      <p className="text-sm text-gray-500">This is a sample card component</p>
      <div className="mt-4">
        <p>This is the card content</p>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'inter-card', 
    name: 'Interactive Card', 
    code: `function InteractiveCardExample() {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card component built using Tailwind CSS.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
}` 
  },
  { 
    id: 'sty-card', 
    name: 'Stylish Card', 
    code: `function StylishCard() {
  return (
    <div className="relative w-80 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:scale-[1.02] transition-all overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Stylish Card</h3>
        <p className="text-gray-200 text-sm mb-4">Premium card design with glass effect</p>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
          Explore
        </button>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'big-card', 
    name: 'BigStylishCard Card', 
    code: `function BigStylishCard() {
  return (
    <div className="relative w-[420px] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all group">
      <div className="h-56 w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=900" alt="Banner" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="relative p-6">
        <h2 className="text-3xl font-bold mb-2">Modern Card</h2>
        <p className="text-gray-200 text-sm mb-5">Beautiful large card with gradient</p>
        <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'login-card-seed', 
    name: 'StylishLoginCard Card', 
    code: `function StylishLoginCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Welcome Back 👋</h2>
        </div>
        <form className="relative z-10 space-y-5">
          <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'users-seed', 
    name: 'UsersCardList Card', 
    code: `function UsersCardList() {
  const users = [
    { name: "Aarav Sharma", role: "Frontend Developer" },
    { name: "Riya Patel", role: "UI/UX Designer" },
    { name: "Karan Mehta", role: "Backend Engineer" },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Team Members</h2>
        <div className="space-y-4">
          {users.map((user, i) => (
            <div key={i} className="flex items-center space-x-4 bg-white/10 border border-white/20 rounded-xl p-4">
              <div className="text-3xl">👤</div>
              <div><h3 className="font-semibold">{user.name}</h3><p className="text-gray-300 text-sm">{user.role}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'text-hover-seed', 
    name: 'TextHoverEffect Card', 
    code: `function TextHoverEffect() {
  return (
    <div className="min-h-40 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 ease-in-out hover:tracking-widest hover:scale-105 cursor-pointer">
        Hover Me ✨
      </h1>
    </div>
  );
}` 
  },
  { 
    id: 'neon-seed', 
    name: 'NeonGlowText Card', 
    code: `function NeonGlowText() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-900">
      <h1 className="relative text-7xl font-extrabold text-white transition-all duration-500 ease-in-out cursor-pointer hover:scale-110">
        <span className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse"></span>
        <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          Neon Magic ⚡
        </span>
      </h1>
    </div>
  );
}` 
  },
  { 
    id: 'shimmer-seed', 
    name: 'ShimmerTextEffect Card', 
    code: `function ShimmerTextEffect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <h1 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-shimmer bg-[length:200%_auto] transition-transform duration-500 hover:scale-110 cursor-pointer">
        Shimmer Glow ✨
      </h1>
    </div>
  );
}` 
  },
  { 
    id: 'user-prof', 
    name: 'Stylish User Card', 
    code: `function StylishUserCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 p-6">
      <div className="relative w-80 rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden group">
        <div className="flex justify-center">
          <div className="text-6xl">👨‍💼</div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-white">Aarav Sharma</h2>
          <p className="text-gray-300 text-sm">Frontend Developer</p>
        </div>
        <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <p className="mt-3 text-sm text-gray-400 text-center">Designing pixels with passion ✨</p>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'aurora', 
    name: 'Aurora Glass Card', 
    code: `function AuroraGlassCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#8b5cf6,_#ec4899,_#06b6d4)] opacity-20 blur-[120px]"></div>
      <div className="relative z-10 w-[350px] h-[420px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden group p-8 text-white text-center">
        <div className="text-6xl mb-4">👩‍💼</div>
        <h2 className="text-2xl font-bold">Sanya Kapoor</h2>
        <p className="text-gray-300 text-sm">Creative UI Designer</p>
        <p className="text-center text-gray-400 text-sm mt-5">Design isn't just what it looks like</p>
        <button className="mt-8 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">Explore ✨</button>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'signup-seed', 
    name: 'StylishSignupCard', 
    code: `function StylishSignupCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Create Account ✨</h2>
          <p className="text-gray-300 mt-1">Join us and start building today</p>
        </div>
        <form className="relative z-10 space-y-5">
          <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
          <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-lg font-semibold">Sign Up</button>
        </form>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'contact-seed', 
    name: 'FuturisticContactCard', 
    code: `function FuturisticContactCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-purple-950 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Connect With Us ⚡</h2>
          <p className="text-gray-300 mt-2">Drop your message and we'll reach you soon</p>
        </div>
        <form className="relative z-10 space-y-5">
          <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition" />
          <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition" />
          <textarea rows="4" placeholder="Your message..." className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition resize-none"></textarea>
          <button className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg font-semibold">Send Message</button>
        </form>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'file-up', 
    name: 'FileUploadCard', 
    code: `function FileUploadCard() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Upload File 📁</h2>
          <p className="text-gray-300 mt-1">Drag & drop or select a file to upload</p>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="w-full px-4 py-10 border-2 border-dashed border-white/30 rounded-lg text-center">
            <p className="text-gray-300">Drop your file here, or click to browse</p>
            <input type="file" className="hidden" />
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold">Upload File</button>
        </div>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'forgot', 
    name: 'ForgotPasswordCard', 
    code: `function ForgotPasswordCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Forgot Password? 🔑</h2>
          <p className="text-gray-300 mt-1">Enter your email to reset your password</p>
        </div>
        <form className="relative z-10 space-y-5">
          <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition" />
          <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}` 
  },
  { 
    id: 'comet-seed', 
    name: 'CometCard', 
    code: `function CometCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold">Comet Card 🚀</h2>
          <p className="text-gray-300 mt-1">Discover the wonders of the cosmos</p>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Halley's Comet</h3>
            <p className="text-sm text-gray-400">Visible every 76 years, next in 2061</p>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold">Explore More</button>
        </div>
      </div>
    </div>
  );
}` 
  },
];

// HTML Generator for iframe preview
const generateHTML = (code) => {
  // Escape code for safe template insertion
  const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    html, body, #root { height: 100%; width: 100%; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
    const { useState, useEffect } = React;
    const userCode = \`${escapedCode}\`;
    
    try {
      // Use Babel to transpile JSX to JavaScript
      const transpiledCode = Babel.transform(userCode, {
        presets: ['react']
      }).code;
      
      // Execute transpiled code - this will expose functions to window scope
      eval(transpiledCode);
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      
      // Extract function names more carefully
      const functionNameRegex = /function\\s+(\\w+)/g;
      const componentNames = [];
      let match;
      while ((match = functionNameRegex.exec(userCode)) !== null) {
        if (match[1]) {
          componentNames.push(match[1]);
        }
      }
      
      // Remove duplicates
      const uniqueNames = [...new Set(componentNames)];
      
      // Try to find and render a component
      let rendered = false;
      
      for (const name of uniqueNames) {
        try {
          if (typeof window[name] === 'function') {
            root.render(React.createElement(window[name]));
            rendered = true;
            break;
          }
        } catch (e) {
          // Continue to next component
        }
      }
      
      if (!rendered) {
        document.getElementById('root').innerHTML = '<div style="padding: 20px; background: #f5f5f5; color: #333; border-radius: 8px; text-align: center;"><h3>⚠️ No component found</h3><p>Found functions: ' + uniqueNames.join(', ') + '</p><p>Transpiled code length: ' + transpiledCode.length + '</p></div>';
      }
    } catch(err) {
      document.getElementById('root').innerHTML = '<div style="padding: 20px; background: #fee; color: #c33; border: 1px solid #c33; border-radius: 8px;"><h3>❌ Error:</h3><pre style="text-align: left; font-size: 12px; overflow: auto; max-height: 300px;">' + (err.stack || err.message) + '</pre></div>';
    }
  <\/script>
</body>
</html>`;
};

function ComponentsPreviewPage() {
  const [selectedComponent, setSelectedComponent] = React.useState('btn-examples');
  const [iframeKey, setIframeKey] = React.useState(0);
  
  const current = SEED_COMPONENTS.find(c => c.id === selectedComponent);
  const code = current?.code || '';

  return (
    <div className="flex h-screen w-screen gap-0 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto border-r border-white/10">
        <div className="p-4 sticky top-0 bg-slate-900/95 backdrop-blur">
          <h2 className="text-lg font-bold">Components</h2>
          <p className="text-xs text-gray-400 mt-1">From Backend (seed.js)</p>
        </div>
        
        <div className="p-3 space-y-2">
          {SEED_COMPONENTS.map((comp) => (
            <button
              key={comp.id}
              onClick={() => {
                setSelectedComponent(comp.id);
                setIframeKey(prev => prev + 1);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                selectedComponent === comp.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-gray-200'
              }`}
            >
              {comp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Code Area */}
      <div className="w-1/3 bg-gradient-to-b from-slate-950 to-slate-900 text-white border-r border-white/10 overflow-y-auto">
        <div className="p-4 sticky top-0 bg-slate-950/95 backdrop-blur border-b border-white/10">
          <h3 className="text-sm font-bold text-gray-300">Component Code</h3>
        </div>
        <div className="p-4">
          <pre className="bg-black/50 border border-white/10 rounded-lg p-4 text-xs overflow-x-auto font-mono text-gray-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* Right Preview Area */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex flex-col">
        <div className="p-4 bg-white/95 backdrop-blur border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-700">Live Preview</h3>
        </div>
        <div className="flex-1 p-4 overflow-hidden">
          <div className="bg-white rounded-lg shadow-lg w-full h-full border border-gray-200 overflow-hidden">
            <iframe
              key={iframeKey}
              srcDoc={generateHTML(code)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#f9fafb'
              }}
              sandbox="allow-scripts allow-same-origin allow-modals"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportComponentsPreviewPage() {
  const [selectedComponent, setSelectedComponent] = React.useState('button-example');
  
  const current = COMPONENTS_LIST.find(c => c.id === selectedComponent);
  const ComponentToShow = current?.component || AllInOneShowcase;
  const code = current?.code || '';

  return (
    <div className="flex h-screen w-screen gap-0 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto border-r border-white/10">
        <div className="p-4 sticky top-0 bg-slate-900/95 backdrop-blur">
          <h2 className="text-lg font-bold">Components</h2>
          <p className="text-xs text-gray-400 mt-1">From Imports Folder</p>
        </div>
        
        <div className="p-3 space-y-2">
          {COMPONENTS_LIST.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setSelectedComponent(comp.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                selectedComponent === comp.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-gray-200'
              }`}
            >
              {comp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Code Area */}
      <div className="w-1/3 bg-gradient-to-b from-slate-950 to-slate-900 text-white border-r border-white/10 overflow-y-auto">
        <div className="p-4 sticky top-0 bg-slate-950/95 backdrop-blur border-b border-white/10">
          <h3 className="text-sm font-bold text-gray-300">Component Code</h3>
        </div>
        <div className="p-4">
          <pre className="bg-black/50 border border-white/10 rounded-lg p-4 text-xs overflow-x-auto font-mono text-gray-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* Right Preview Area */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex flex-col">
        <div className="p-4 bg-white/95 backdrop-blur border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-700">Preview</h3>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <ComponentToShow />
          </div>
        </div>
      </div>
    </div>
  );
}

// Website Code Examples
const WEB_EXAMPLES = [
  {
    id: 'portfolio',
    name: '🎨 Portfolio',
    description: 'Beautiful portfolio website',
    code: `function App() {
  const projects = [
    { title: 'AI Chat App', desc: 'Smart conversational AI' },
    { title: 'E-Commerce Platform', desc: 'Full-featured store' },
    { title: 'Analytics Dashboard', desc: 'Real-time data visualization' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">Hi, I'm a Developer</h1>
        <p className="text-xl text-gray-400">Crafting beautiful digital experiences</p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-700 mt-20 py-8 text-center text-gray-400">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}`
  },
  {
    id: 'ecommerce',
    name: '🛒 E-Commerce',
    description: 'Product store with cart',
    code: `function App() {
  const [cart, setCart] = React.useState([]);
  
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 199 },
    { id: 2, name: 'Smart Watch', price: 299 },
    { id: 3, name: 'USB-C Cable', price: 29 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow sticky top-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechStore</h1>
          <div className="flex items-center gap-2">
            <span>🛒 Cart:</span>
            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">{cart.length}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{p.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">\${p.price}</p>
              <button 
                onClick={() => addToCart(p)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}`
  },
  {
    id: 'blog',
    name: '📝 Blog Platform',
    description: 'Blog with search & filtering',
    code: `function App() {
  const [search, setSearch] = React.useState('');
  
  const posts = [
    { id: 1, title: 'Getting Started with React', category: 'React', excerpt: 'Learn the basics of React and hooks' },
    { id: 2, title: 'CSS Grid Mastery', category: 'CSS', excerpt: 'Master modern CSS Grid layouts' },
    { id: 3, title: 'JavaScript ES6 Features', category: 'JavaScript', excerpt: 'Explore ES6 and modern JavaScript' },
    { id: 4, title: 'Web Performance Tips', category: 'Performance', excerpt: 'Optimize your website speed' },
  ];

  const filtered = posts.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">My Tech Blog</h1>
          <p className="mt-4 text-lg">Thoughts on web development</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>

        <div className="grid gap-6">
          {filtered.length > 0 ? (
            filtered.map(post => (
              <article key={post.id} className="border-l-4 border-indigo-600 pl-6 py-4">
                <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded">{post.category}</span>
                <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
                <p className="text-gray-600 mt-3">{post.excerpt}</p>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500">No posts found</p>
          )}
        </div>
      </main>
    </div>
  );
}`
  },
  {
    id: 'saas',
    name: '🚀 SaaS Landing',
    description: 'Modern SaaS pricing page',
    code: `function App() {
  const plans = [
    { name: 'Starter', price: 29, features: ['10 projects', '5GB storage', 'Basic support'] },
    { name: 'Pro', price: 79, features: ['100 projects', '100GB storage', 'Priority support'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Unlimited storage', '24/7 support'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <header className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">PowerTools</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">The all-in-one solution for your team to collaborate and build amazing things</p>
      </header>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={"p-8 rounded-lg border transition " + (plan.popular ? 'border-blue-500 bg-blue-900 bg-opacity-20 scale-105' : 'border-gray-700 hover:border-gray-500')}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {typeof plan.price === 'number' ? '$' + plan.price : plan.price}
                {typeof plan.price === 'number' && <span className="text-lg text-gray-400">/month</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={"w-full py-3 rounded-lg font-bold transition " + (plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border border-gray-500 hover:border-white')}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`
  },
  {
    id: 'dashboard',
    name: '📊 Dashboard',
    description: 'Analytics dashboard UI',
    code: `function App() {
  const [data] = React.useState([
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 78 },
    { label: 'Mar', value: 90 },
    { label: 'Apr', value: 81 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Export</button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: '12,543', change: '+12%' },
            { label: 'Revenue', value: '$54,231', change: '+8%' },
            { label: 'Orders', value: '1,324', change: '+25%' },
            { label: 'Conversion', value: '3.2%', change: '+0.5%' },
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">{card.label}</p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
              <p className="text-green-600 text-sm mt-2">{card.change} vs last month</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-6">Monthly Sales</h2>
          <div className="flex items-end justify-around h-48">
            {data.map((d, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-500 rounded-t w-12" style={{height: d.value + 'px'}}></div>
                <p className="mt-2 text-sm">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}`
  },
  {
    id: 'portfolio-pro',
    name: '👨‍💻 Portfolio Pro',
    description: 'Professional developer portfolio',
    code: `function App() {
  const [theme, setTheme] = React.useState('dark');
  
  const projects = [
    { title: 'AI Chat App', desc: 'Smart conversational UI with context awareness.', tags: ['React', 'AI', 'Socket'] },
    { title: 'E-Commerce Platform', desc: 'Checkout, inventory, and analytics — production ready.', tags: ['Node', 'Stripe', 'MongoDB'] },
    { title: 'Analytics Dashboard', desc: 'Real-time charts and KPIs for business teams.', tags: ['Charts', 'Realtime', 'Websockets'] },
  ];

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white' : 'min-h-screen bg-gradient-to-b from-rose-50 via-white to-cyan-50 text-slate-900'}>
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold shadow-lg">JS</div>
          <div>
            <h1 className="text-lg font-semibold">Gurjant — Dev</h1>
            <p className="text-xs text-gray-400">Design · Frontend · Product</p>
          </div>
        </div>
        <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-slate-700/40 transition">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

      <header className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">Crafting beautiful, fast & delightful interfaces</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">I build production-ready web apps with a focus on UX, performance, and developer experience.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition">See my work</button>
          <button className="px-6 py-3 rounded-full border border-white/10">About me</button>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Work</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="bg-slate-700 p-6 rounded-xl shadow-lg border border-white/5 hover:border-indigo-500/50 transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-slate-800/40 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-slate-700/40 border border-white/5">
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="mt-4 text-gray-300">I'm a frontend developer who loves clean code, delightful UI, and fast apps. I focus on shipping features users love.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• 3+ years building web apps</li>
              <li>• Performance & accessibility focused</li>
              <li>• Enjoy mentoring and code reviews</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/40 border border-white/5">
            <h4 className="font-medium">Tech & tools</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-200">
              <span>React</span>
              <span>Tailwind</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-slate-800/40 p-8 rounded-2xl border border-white/6">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="text-gray-300 mt-2">I'm available for freelance work and new opportunities.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you.'); }}>
            <input required placeholder="Your name" className="p-3 rounded-md bg-transparent border border-white/6 text-white" />
            <input required type="email" placeholder="you@example.com" className="p-3 rounded-md bg-transparent border border-white/6 text-white" />
            <textarea required placeholder="Message" className="p-3 rounded-md bg-transparent border border-white/6 md:col-span-2 h-32 text-white" />
            <button type="submit" className="md:col-span-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500">Send message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/6 py-8 mt-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">© 2024 Gurjant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}`
  },
  {
    id: 'all-components',
    name: '🎨 All Components',
    description: 'All-in-One Component Showcase',
    code: `function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">All-in-One React Component Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Card + Button + Alert</h2>
            <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4 mb-4">
              <h3 className="font-bold">Heads up!</h3>
              <p className="text-sm">This is an alert inside the card.</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Click Me</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tabs + Input</h2>
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <button className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">Account</button>
                <button className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition">Settings</button>
              </div>
              <input placeholder="Enter your name" className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400" />
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Accordion</h2>
            <div className="space-y-2">
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 text-left font-medium transition flex justify-between items-center">
                  What is this?
                  <span>+</span>
                </button>
                <div className="px-4 py-3 bg-white/5 text-sm">
                  This is a fully imported component demo.
                </div>
              </div>
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 text-left font-medium transition flex justify-between items-center">
                  How to use?
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars, Badges, Progress */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Avatars + Badges + Progress</h2>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">SH</div>
              <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Pro User</span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                       </div>
            <p className="mt-2 text-sm opacity-80">Profile Completion: 70%</p>
          </div>
        </div>

        {/* Switch + Loading Icon */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg md:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Switch + Loader</h2>

            <div className="flex items-center gap-4">
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 border border-white/20">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
              </button>
              <span className="text-2xl">⏳</span>
            </div>

            <div className="my-4 border-t border-white/20"></div>
            <p className="text-sm opacity-80">All UI components working together!</p>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
];

function FullWebPreview() {
  const [selectedExample, setSelectedExample] = useState('dynamic-react');
  const [iframeKey, setIframeKey] = useState(0);

  const example = WEB_EXAMPLES.find(e => e.id === selectedExample);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">Full Web Preview System</h1>
        <p className="text-gray-600 mb-6">Select a website to preview its code and see how it renders</p>

        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {WEB_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => {
                setSelectedExample(ex.id);
                setIframeKey(prev => prev + 1);
              }}
              className={`p-4 rounded-lg border-2 transition-all text-sm font-medium ${
                selectedExample === ex.id
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              {ex.name}
            </button>
          ))}
        </div>
      </div>

      {example && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Display */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-800 text-white px-4 py-3 font-mono text-sm flex justify-between items-center">
              <span>{example.name}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(example.code);
                  alert('Code copied to clipboard!');
                }}
                className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                Copy Code
              </button>
            </div>
            <pre className="p-4 overflow-auto max-h-96 bg-gray-900 text-gray-100 text-xs leading-relaxed">
              <code>{example.code}</code>
            </pre>
          </div>

          {/* Live Preview with Iframe */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-800 text-white px-4 py-3 font-mono text-sm">
              Live Preview
            </div>
            <div className="h-96 bg-gray-50 overflow-auto border-t">
              <iframe
                key={iframeKey}
                srcDoc={generateHTML(example.code)}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: '#f9fafb'
                }}
                sandbox="allow-scripts allow-same-origin allow-modals"
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900">💡 How it works:</h3>
        <ul className="text-sm text-blue-800 mt-2 space-y-1 list-disc list-inside">
          <li>Each button shows a different website example</li>
          <li>Left side displays the React component code</li>
          <li>Right side shows the live preview using iframe + Babel transpiling</li>
          <li>Click "Copy Code" to get the complete code</li>
          <li>All examples use React, Tailwind CSS & standard web APIs</li>
        </ul>
      </div>
    </div>
  );
}


const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#1a202c' : '#f7fafc')};
`;

const Header = styled.header`
  background-color: #1a202c;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    background: white;
    color: #1a202c;
  }
`;

const Main = styled.main`
  ${(props) => {
    // For preview pages, use full width
    if (props.isPreview) {
      return `
        margin: 0;
        padding: 0;
        width: 100%;
        height: calc(100vh - 80px);
      `;
    }
    // For other pages, use max-width container
    return `
      margin: 0 auto;
      padding: 2rem 1rem;
      max-width: 1200px;
    `;
  }}
`;

const ComponentPreview = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CodeBlock = styled.pre`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  span {
    background: linear-gradient(90deg, #4299E1, #9F7AEA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #CBD5E0;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const HeroButton = styled.button`
  background: linear-gradient(90deg, #4299E1, #9F7AEA);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  }
`;

const Footer = styled.footer`
  background: #1a202c;
  padding: 4rem 2rem;
  margin-top: 6rem;
  color: #CBD5E0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #CBD5E0;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #4299E1;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #2D3748;
  text-align: center;
  color: #718096;
`;

const PreviewContainer = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
`;

function App() {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // sample imported components to preview in "imports" tab
  const importedComponentsSample = [
    {
      name: "Glass Button",
      code: `import React from 'react';
import styled from 'styled-components';

const GlassButton = styled.button\`
  background: rgba(255,255,255,0.2);
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  font-size: 16px;
  backdrop-filter: blur(5px);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }
\`;

export default function Button({children, onClick}) {
  return <GlassButton onClick={onClick}>{children}</GlassButton>;
}`
    }
  ];

  useEffect(() => {
    fetchComponents();
  }, []);

  const fetchComponents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/components');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setComponents(data);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const theme = {
    mode: isDarkMode ? 'dark' : 'light',
    colors: {
      background: isDarkMode ? '#1a202c' : '#f7fafc',
      text: isDarkMode ? '#ffffff' : '#1a202c',
    }
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} onRetry={fetchComponents} />;
  // don't block entire app when components list is empty;
  // show empty state only inside the "components" tab below
  // if (!components.length) return <EmptyState />;
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <HeaderContent>
            <NavButton 
              onClick={() => setActiveTab('home')}
              style={{ background: activeTab === 'home' ? 'white' : 'transparent',
                      color: activeTab === 'home' ? '#1a202c' : 'white' }}
            >
              Home
            </NavButton>
            <NavButton 
              onClick={() => setActiveTab('components')}
              style={{ background: activeTab === 'components' ? 'white' : 'transparent',
                      color: activeTab === 'components' ? '#1a202c' : 'white' }}
            >
              Components
            </NavButton>
            <NavButton 
              onClick={() => setActiveTab('imports')}
              style={{ background: activeTab === 'imports' ? 'white' : 'transparent',
                      color: activeTab === 'imports' ? '#1a202c' : 'white' }}
            >
              ImportComponents
            </NavButton>
            <NavButton 
              onClick={() => setActiveTab('web')}
              style={{ background: activeTab === 'web' ? 'white' : 'transparent',
                      color: activeTab === 'web' ? '#1a202c' : 'white' }}
            >
              WEB
            </NavButton>
            <NavButton 
              onClick={() => setActiveTab('fullweb')}
              style={{ background: activeTab === 'fullweb' ? 'white' : 'transparent',
                      color: activeTab === 'fullweb' ? '#1a202c' : 'white' }}
            >
              Full Web
            </NavButton>
          </HeaderContent>
        </Header>
        <Main isPreview={activeTab === 'components' || activeTab === 'imports'}>
          {activeTab === 'home' ? (
            <>
              <HeroSection>
                <HeroContent>
                  <HeroTitle>
                    Welcome to <span>UI Components</span>
                  </HeroTitle>
                  <HeroDescription>
                    Discover our collection of beautiful, responsive, and reusable UI components.
                    Build modern web applications with ease using our pre-designed components.
                  </HeroDescription>
                  <HeroButton onClick={() => setActiveTab('components')}>
                    Explore Components
                  </HeroButton>
                </HeroContent>
              </HeroSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <FeatureCard
                  icon="🎨"
                  title="Modern Design"
                  description="Beautifully crafted components with modern design principles"
                />
                <FeatureCard
                  icon="📱"
                  title="Responsive"
                  description="Fully responsive components that work on all devices"
                />
                <FeatureCard
                  icon="🚀"
                  title="Easy to Use"
                  description="Simple integration with copy-paste functionality"
                />
              </div>
            </>
          ) : activeTab === 'components' ? (
            <ComponentsPreviewPage />
          ) : activeTab === 'imports' ? (
            <ImportComponentsPreviewPage />
          ) : activeTab === 'web' ? (
            <>
              <ComponentShowcase />
            </>
          ) : activeTab === 'fullweb' ? (
            <>
              <FullWebPreview />
            </>
          ) : null}
        </Main>
        <Footer>
          <FooterContent>
            <FooterColumn>
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Mission &amp; Vision</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h3>Components</h3>
              <ul>
                <li><a href="#">UI Kit</a></li>
                <li><a href="#">Icons</a></li>
                <li><a href="#">Illustrations</a></li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h3>Contact</h3>
              <ul>
                <li><a href="#">Email Us</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Live Chat</a></li>
              </ul>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            &copy; 2023 UI Components. All rights reserved.
          </FooterBottom>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

const LoadingState = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading components...</p>
    </div>
  </div>
);

const ErrorState = ({ error, onRetry }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="bg-red-50 p-6 rounded-lg border border-red-100 max-w-md">
      <h2 className="text-red-800 font-semibold mb-2">Error</h2>
      <p className="text-red-600">{error}</p>
      <button 
        onClick={onRetry}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-2">No components found</h2>
      <p className="text-gray-600">It seems like we couldn't find any components to display.</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
