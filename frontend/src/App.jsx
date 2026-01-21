import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import CustomizeWeb from './components/CustomizeWeb';
import WebsiteGallery from './components/WebsiteGallery';
import ComponentsByCategory from './components/ComponentsByCategory';
import StylishX from './components/StylishX';
import Nexus from './components/Nexus';
import Lumina from './components/Lumina';
import RaiboWeb from './components/RaiboWeb';
import MyWebsite from './components/MyWebsite';
import DynamicWeb from './components/DynamicWeb';
import ElectroTech from './components/ElectroTech';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
// import ElectroX from './components/ElectroX';
import './styles/globals.css';
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackPreview,
//   SandpackCodeEditor,
// } from "@codesandbox/sandpack-react";
// import { atomDark } from "@codesandbox/sandpack-themes";
// import ComponentLivePreview from './components/LivePreview';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:7000/api';

const COMPONENTS_LIST = [

];

// Components from seed.js (Backend)


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
    body { font-family: system-ui, -apple-system, sans-serif; overflow-x: hidden; }
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

function ComponentsPreviewPage({ isLoggedIn }) {
  const [components, setComponents] = useState([]);
  const [groupedComponents, setGroupedComponents] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'cards', 'headers', 'footers'
  const [codeMessage, setCodeMessage] = useState('');
  const [importsMessage, setImportsMessage] = useState('');
  const [requirementsMessage, setRequirementsMessage] = useState('');

  // Card subcategories mapping
  const CARD_SUBCATEGORIES = {
    'Card Example': 'Basic Cards',
    'Feature Card': 'Feature Cards',
    'Info Card': 'Info Cards',
    'Single Card': 'Single Cards',
    'Product Card': 'Product Cards',
    'Course Card': 'Course Cards',
    'Recipe Card': 'Recipe Cards',
    'Travel Card': 'Travel Cards',
    'Game Card': 'Game Cards',
    'Compact Stylish Card': 'Stylish Variants',
    'Compact stylish Card': 'Stylish Variants',
    'compactstylish Card': 'Stylish Variants',
    'Stylish Card': 'Stylish Variants',
    'stylish Card': 'Stylish Variants',
    'StylishComponents': 'Stylish Variants',
    'Premium Card': 'Premium Cards',
    'Premium card': 'Premium Cards',
    'Subscription Card': 'Subscription Cards',
    'subscriptian Card': 'Subscription Cards',
    'subscriptian card': 'Subscription Cards',
    'Action Card': 'Action Cards',
    'actioncard': 'Action Cards',
    'action card': 'Action Cards',
    'Ultimate Card': 'Ultimate Cards',
    'ultimatecard': 'Ultimate Cards',
    'ultimate card': 'Ultimate Cards',
    'Pro Card': 'Pro Cards',
    'procard': 'Pro Cards',
    'pro card': 'Pro Cards',
    'ProDeveloperCard': 'Pro Cards',
    'prodevelopercard': 'Pro Cards',
    'pro developer card': 'Pro Cards',
    'Elite Card': 'Elite Cards',
    'elitecard': 'Elite Cards',
    'elite card': 'Elite Cards',
    'Luxe Card': 'Luxury Cards',
    'luxecard': 'Luxury Cards',
    'luxe card': 'Luxury Cards',
    'Cosmic Card': 'Cosmic Cards',
    'cosmiccard': 'Cosmic Cards',
    'cosmic card': 'Cosmic Cards',
  };

  useEffect(() => {
    async function fetchComponents() {
      try {
        // Direct hardcoded API URL for development
        const apiUrl = 'http://localhost:7000/api';
        console.log('Fetching from:', `${apiUrl}/components`);
        const res = await fetch(`${apiUrl}/components`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log('Response:', res.status, res.statusText);
        if (!res.ok) throw new Error(`Failed to fetch components: ${res.status} ${res.statusText}`);
        const data = await res.json();
        console.log('Fetched components:', data);
        setComponents(data);
        
        // Group components by category and subcategory for cards
        const grouped = data.reduce((acc, component) => {
          let category = component.category || 'Headers';
          
          // If it's a card, use subcategory from mapping
          if (category === 'Cards') {
            // Normalize name variants (lowercase, remove spaces) so 'UltimateCard', 'ultimatecard', and 'Ultimate Card' all match
            const rawName = component.name || '';
            const normalized = rawName.toLowerCase().replace(/\s+/g, '');
            const mapped = CARD_SUBCATEGORIES[rawName] || CARD_SUBCATEGORIES[rawName.toLowerCase()] || CARD_SUBCATEGORIES[rawName.replace(/\s+/g, '')] || CARD_SUBCATEGORIES[normalized];

            if (mapped) {
              category = mapped;
            } else {
              // Card without mapping stays in Cards (don't move to Headers)
              category = 'Cards';
            }
          } else if (category === 'Footer') {
            // Keep Footer as is
            category = 'Footers';
          } else if (category !== 'Cards' && category !== 'Footer') {
            // All other non-card, non-footer categories go to Headers
            category = 'Headers';
          }
          
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(component);
          return acc;
        }, {});
        
        setGroupedComponents(grouped);
        if (data.length > 0) {
          setSelectedId(data[0]._id);
        }
      } catch (err) {
        console.error('Error fetching components:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchComponents();
  }, []);

  const current = components.find(c => c._id === selectedId);
  const code = current?.code || '';

  // Filter categories based on activeFilter
  let displayedCategories = Object.keys(groupedComponents).sort();
  let filteredGrouped = groupedComponents;

  if (activeFilter === 'cards') {
    // Show only card categories (exclude Headers and Footers)
    displayedCategories = displayedCategories.filter(cat => cat !== 'Headers' && cat !== 'Footers');
    filteredGrouped = {};
    displayedCategories.forEach(cat => {
      filteredGrouped[cat] = groupedComponents[cat];
    });
  } else if (activeFilter === 'headers') {
    // Show only Headers category
    displayedCategories = displayedCategories.filter(cat => cat === 'Headers');
    filteredGrouped = {};
    if (groupedComponents['Headers']) {
      filteredGrouped['Headers'] = groupedComponents['Headers'];
    }
  } else if (activeFilter === 'footers') {
    // Show only Footers category
    displayedCategories = displayedCategories.filter(cat => cat === 'Footers');
    filteredGrouped = {};
    if (groupedComponents['Footers']) {
      filteredGrouped['Footers'] = groupedComponents['Footers'];
    }
  }

  if (loading) return <div className="w-full h-screen flex items-center justify-center text-white bg-slate-900">Loading components from seed.js (MongoDB)...</div>;
  if (error) return <div className="w-full h-screen flex items-center justify-center text-red-400 bg-slate-900">Error: {error}</div>;
  if (components.length === 0) return <div className="w-full h-screen flex items-center justify-center text-gray-400 bg-slate-900">No components found. Run: npm run seed</div>;

  return (
    <div className="flex h-screen w-full gap-0 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-80 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto border-r border-white/10">
        <div className="p-4 sticky top-0 bg-slate-900/95 backdrop-blur z-10 border-b border-white/10">
          <h2 className="text-lg font-bold mb-4">Components</h2>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setActiveFilter('all');
                // Select first component
                if (groupedComponents && Object.keys(groupedComponents).length > 0) {
                  const firstCategory = Object.keys(groupedComponents).sort()[0];
                  if (groupedComponents[firstCategory].length > 0) {
                    setSelectedId(groupedComponents[firstCategory][0]._id);
                    setIframeKey(prev => prev + 1);
                  }
                }
              }}
              className={`flex-1 px-3 py-2 rounded-lg transition-all text-xs font-bold ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setActiveFilter('cards');
                // Select first card component
                if (groupedComponents) {
                  const cardCategories = Object.keys(groupedComponents).filter(cat => cat !== 'Headers' && cat !== 'Footers').sort();
                  if (cardCategories.length > 0 && groupedComponents[cardCategories[0]].length > 0) {
                    setSelectedId(groupedComponents[cardCategories[0]][0]._id);
                    setIframeKey(prev => prev + 1);
                  }
                }
              }}
              className={`flex-1 px-3 py-2 rounded-lg transition-all text-xs font-bold ${
                activeFilter === 'cards'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => {
                setActiveFilter('headers');
                // Select first header component
                if (groupedComponents && groupedComponents['Headers'] && groupedComponents['Headers'].length > 0) {
                  setSelectedId(groupedComponents['Headers'][0]._id);
                  setIframeKey(prev => prev + 1);
                }
              }}
              className={`flex-1 px-3 py-2 rounded-lg transition-all text-xs font-bold ${
                activeFilter === 'headers'
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => {
                setActiveFilter('footers');
                // Select first footer component
                if (groupedComponents && groupedComponents['Footers'] && groupedComponents['Footers'].length > 0) {
                  setSelectedId(groupedComponents['Footers'][0]._id);
                  setIframeKey(prev => prev + 1);
                }
              }}
              className={`flex-1 px-3 py-2 rounded-lg transition-all text-xs font-bold ${
                activeFilter === 'footers'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Footers
            </button>
          </div>
        </div>
        
        <div className="p-3 space-y-6">
          {displayedCategories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest px-2 py-2 mb-2">
                {category}
              </h3>
              <div className="space-y-1">
                {filteredGrouped[category].map((comp) => (
                  <button
                    key={comp._id}
                    onClick={() => {
                      setSelectedId(comp._id);
                      setIframeKey(prev => prev + 1);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                      selectedId === comp._id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/5 hover:bg-white/10 text-gray-200'
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Code Area */}
      <div className="w-1/3 bg-gradient-to-b from-slate-950 to-slate-900 text-white border-r border-white/10 overflow-y-auto">
        <div className="p-4 bg-slate-950/95 backdrop-blur border-b border-white/10">
          <h3 className="text-sm font-bold text-gray-300">Component Code</h3>
        </div>
        <div className="p-4">
          {/* Code Section with Copy Button */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-semibold">Full Code</span>
              <button
                onClick={() => {
                  if (!isLoggedIn) {
                    setCodeMessage('❌ Please login first!');
                    setTimeout(() => setCodeMessage(''), 2000);
                    return;
                  }
                  navigator.clipboard.writeText(code).then(() => {
                    setCodeMessage('Code Copied! ✓');
                    setTimeout(() => setCodeMessage(''), 1600);
                  });
                }}
                className="px-3 py-1 text-xs font-bold bg-green-600 text-white rounded-md hover:bg-green-700 transition-all flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
            <pre className="bg-black/50 border border-white/10 rounded-lg p-3 text-xs overflow-x-auto overflow-y-auto font-mono text-gray-300 max-h-96">
              <code>{code}</code>
            </pre>
            {codeMessage && <div className={`text-xs mt-2 font-semibold ${codeMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>{codeMessage}</div>}
          </div>

          {/* Minimal Imports Section with Copy Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs font-semibold">Minimal imports</span>
              <button
                onClick={() => {
                  if (!isLoggedIn) {
                    setImportsMessage('❌ Please login first!');
                    setTimeout(() => setImportsMessage(''), 2000);
                    return;
                  }
                  const importText = 'import { useState } from "react";';
                  navigator.clipboard.writeText(importText).then(() => {
                    setImportsMessage('Import Copied! ✓');
                    setTimeout(() => setImportsMessage(''), 1600);
                  });
                }}
                className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
            <pre className="bg-[#0b1220] text-[13px] text-[#e6eef8] p-2 rounded overflow-x-auto m-0">
              <code>import {'{ useState, useEffect  }'} from "react";</code>
            </pre>
            {importsMessage && <div className={`text-xs mt-2 font-semibold ${importsMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>{importsMessage}</div>}
          </div>

          {/* Requirements Section with Copy Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs font-semibold">Requirements note</span>
              <button
                onClick={() => {
                  if (!isLoggedIn) {
                    setRequirementsMessage('❌ Please login first!');
                    setTimeout(() => setRequirementsMessage(''), 2000);
                    return;
                  }
                  const requirementsText = 'Requires:\n- React\n- Tailwind CSS';
                  navigator.clipboard.writeText(requirementsText).then(() => {
                    setRequirementsMessage('Requirements Copied! ✓');
                    setTimeout(() => setRequirementsMessage(''), 1600);
                  });
                }}
                className="px-3 py-1 text-xs font-bold bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
            <pre className="bg-[#0b1220] text-[13px] text-[#e6eef8] p-2 rounded overflow-x-auto m-0">
              <code>Requires:
  - React
  - Tailwind CSS</code>
            </pre>
            {requirementsMessage && <div className={`text-xs mt-2 font-semibold ${requirementsMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>{requirementsMessage}</div>}
          </div>
        </div>
      </div>

      {/* Right Preview Area */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex flex-col">
        <div className="p-4 bg-white/95 backdrop-blur border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-700">Live Preview</h3>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="bg-white rounded-lg shadow-lg w-full h-[850px] border border-gray-200 overflow-hidden">
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
                  backgroundColor: '#000000ff'
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
        margin-top: 80px;
        width: 100%;
        height: calc(100vh - 80px);
      `;
    }
    // For home page, use full width
    if (props.isHome) {
      return `
        margin: 0;
        padding: 0;
        margin-top: 80px;
        width: 100%;
      `;
    }
    // For about page, use full width
    if (props.isAbout) {
      return `
        margin: 0;
        padding: 0;
        margin-top: 80px;
        width: 100%;
      `;
    }
    // For other pages, use max-width container
    return `
      margin: 0 auto;
      margin-top: 80px;
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [viewingInternal, setViewingInternal] = useState(null);

  // sample imported components to preview in "imports" tab
  

  // Initialize login state from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (storedIsLoggedIn === 'true' && storedUser) {
      try {
        setIsLoggedIn(true);
        setUserInfo(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error restoring user from localStorage:', err);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('isLoggedIn');
      }
    }
    
    fetchComponents();
  }, []);

  const fetchComponents = async () => {
    try {
      const response = await fetch('http://localhost:7000/api/components');
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

  // کیا components load ہوئے?
console.log('Has components:', document.querySelectorAll('[class*="component"]').length > 0)

// کیا activeTab ہے?
window.location.href
  if (error) return <ErrorState error={error} onRetry={fetchComponents} />;
  // Show loading only on initial load if we don't have components
  if (loading && components.length === 0) return <LoadingState />;
  // don't block entire app when components list is empty;
  // show empty state only inside the "components" tab below
  // if (!components.length) return <EmptyState />;
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onLoginClick={() => setIsLoginOpen(true)}
          onSignupClick={() => setIsSignupOpen(true)}
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            console.log('[LOGOUT] Starting logout process...');
            setIsLoggedIn(false);
            setUserInfo(null);
            setActiveTab('home');
            setLoading(false);
            setError(null);
            localStorage.removeItem('userInfo');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('token');
            console.log('[LOGOUT] Logout complete - redirected to home');
          }}
          userInfo={userInfo}
          onUpdateProfile={(updatedUser) => {
            setUserInfo(updatedUser);
            localStorage.setItem('userInfo', JSON.stringify(updatedUser));
          }}
        />
        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(email) => {  // email parameter کو پورا user object مل رہا تھا
            setIsLoggedIn(true);
            const userDetails = { email };
            setUserInfo(userDetails);
            localStorage.setItem('userInfo', JSON.stringify(userDetails));
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoginOpen(false);
          }}
        />
        <SignupModal 
          isOpen={isSignupOpen} 
          onClose={() => setIsSignupOpen(false)}
          onSignupSuccess={(name, email) => {
            setIsLoggedIn(true);
            const userDetails = { name, email };
            setUserInfo(userDetails);
            localStorage.setItem('userInfo', JSON.stringify(userDetails));
            localStorage.setItem('isLoggedIn', 'true');
            setIsSignupOpen(false);
          }}
        />
        <Main isPreview={activeTab === 'components' || activeTab === 'library' || activeTab === 'fullweb'} isHome={activeTab === 'home'} isAbout={activeTab === 'about'}>
          {activeTab === 'home' ? (
            <>

<Home />

              {/* {HeroSection && <HeroSection onExploreClick={() => setActiveTab('components')} onLearnMoreClick={() => setActiveTab('about')} />} */}
              <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </div>
            </>
          ) : activeTab === 'components' ? (
            <ComponentsPreviewPage isLoggedIn={isLoggedIn} />
          ) : activeTab === 'library' ? (
            <ComponentsByCategory />
          ) : activeTab === 'web' ? (
            viewingInternal === 'stylishx' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  ← Back to Gallery
                </button>
                <StylishX />
              </div>
            ) : viewingInternal === 'nexus' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  ← Back to Gallery
                </button>
                <Nexus />
              </div>
            ) : viewingInternal === 'lumina' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#d4af37', color: '#000' }}
                >
                  ← Back to Gallery
                </button>
                <Lumina />
              </div>
            ) : viewingInternal === 'raiboweb' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
                >
                  ← Back to Gallery
                </button>
                <RaiboWeb />
              </div>
            ) : viewingInternal === 'electrox' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  ← Back to Gallery
                </button>
                <ElectroX />
              </div>
            ) : viewingInternal === 'mywebsite' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  ← Back to Gallery
                </button>
                <MyWebsite />
              </div>
            ) : viewingInternal === 'dynamicweb' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  ← Back to Gallery
                </button>
                <DynamicWeb />
              </div>
            ) : viewingInternal === 'electrotech' ? (
              <div className="relative">
                <button
                  onClick={() => setViewingInternal(null)}
                  className="fixed top-20 left-4 z-40 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  ← Back to Gallery
                </button>
                <ElectroTech />
              </div>
            ) : (
              <WebsiteGallery onViewInternal={setViewingInternal} />
            )
          ) : activeTab === 'fullweb' ? (
            <>
              <FullWebPreview />
            </>
          ) : activeTab === 'customizeweb' ? (
            <CustomizeWeb />
          ) : activeTab === 'about' ? (
            <About />
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
              <h3>Component</h3>
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


