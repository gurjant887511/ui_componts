import React, { useState, useEffect } from 'react';

// HTML Generator for iframe preview
const generateHTML = (code) => {
  if (!code) return '<html><body><div style="padding: 20px; text-align: center; color: #999;">No code</div></body></html>';
  
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
    body { font-family: system-ui, -apple-system, sans-serif; background: white; }
    html, body, #root { height: 100%; width: 100%; }
  </style>
</head>
<body>
  <div id="root" style="width: 100%; height: 100%;"></div>
  <script>
    window.onerror = function(msg, url, lineNo, columnNo, error) {
      console.error('Iframe Error:', msg);
      document.getElementById('root').innerHTML = '<div style="padding: 20px; color: red;"><h3>Error:</h3><p>' + msg + '</p></div>';
    };
    
    const { useState, useEffect, useRef, useCallback } = React;
    const userCode = \`${escapedCode}\`;
    
    try {
      const transpiledCode = Babel.transform(userCode, {
        presets: ['react']
      }).code;
      
      eval(transpiledCode);
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      
      const functionNameRegex = /function\\s+(\\w+)/g;
      const componentNames = [];
      let match;
      while ((match = functionNameRegex.exec(userCode)) !== null) {
        if (match[1]) {
          componentNames.push(match[1]);
        }
      }
      
      const uniqueNames = [...new Set(componentNames)];
      let rendered = false;
      
      for (const name of uniqueNames) {
        try {
          if (typeof window[name] === 'function') {
            root.render(React.createElement(window[name]));
            rendered = true;
            break;
          }
        } catch (e) {
          console.error('Error rendering', name, e);
        }
      }
      
      if (!rendered) {
        document.getElementById('root').innerHTML = '<div style="padding: 20px; background: #f5f5f5; color: #333; text-align: center;"><h3>No component found</h3><p>Functions found: ' + uniqueNames.join(', ') + '</p></div>';
      }
    } catch(err) {
      console.error('Error:', err);
      document.getElementById('root').innerHTML = '<div style="padding: 20px; background: #fee; color: #c33; border: 1px solid #c33;"><h3>Error:</h3><pre style="font-size: 11px; overflow: auto;">' + (err.stack || err.message) + '</pre></div>';
    }
  <\/script>
</body>
</html>`;
};

function ComponentsPage() {
//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  const API_URL = 'http://localhost:5000/api';
  
  const [components, setComponents] = useState([]);
  const [groupedComponents, setGroupedComponents] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'cards', 'headers', 'footers', 'stylish', 'components'
  const [copyMessage, setCopyMessage] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({}); // Track expanded/collapsed categories

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
        // Use http://localhost:5000/api for development
        const API_URL = 'http://localhost:5000/api';
        console.log('Fetching from:', `${API_URL}/components`);
        const res = await fetch(`${API_URL}/components`);
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
        
        // Initialize expandedCategories with all categories collapsed (false)
        const initialExpandedState = {};
        Object.keys(grouped).forEach(category => {
          initialExpandedState[category] = false;
        });
        setExpandedCategories(initialExpandedState);
        
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

  // Reset expanded categories when filter changes
  useEffect(() => {
    const initialExpandedState = {};
    Object.keys(groupedComponents).forEach(category => {
      initialExpandedState[category] = false;
    });
    setExpandedCategories(initialExpandedState);
  }, [activeFilter]);

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
  } else if (activeFilter === 'stylish') {
    // Show only Stylish Variants category
    displayedCategories = displayedCategories.filter(cat => cat === 'Stylish Variants');
    filteredGrouped = {};
    if (groupedComponents['Stylish Variants']) {
      filteredGrouped['Stylish Variants'] = groupedComponents['Stylish Variants'];
    }
  } else if (activeFilter === 'components') {
    // Show all card-type components (all categories except Headers and Footers)
    displayedCategories = displayedCategories.filter(cat => cat !== 'Headers' && cat !== 'Footers');
    filteredGrouped = {};
    displayedCategories.forEach(cat => {
      filteredGrouped[cat] = groupedComponents[cat];
    });
  }

  if (loading) return <div className="w-full h-screen flex items-center justify-center text-white bg-slate-900">Loading components from MongoDB...</div>;
  if (error) return <div className="w-full h-screen flex items-center justify-center text-red-400 bg-slate-900">Error: {error}</div>;
  if (components.length === 0) return <div className="w-full h-screen flex items-center justify-center text-gray-400 bg-slate-900">No components found. Run: npm run seed</div>;

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="flex h-screen w-screen gap-0 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-80 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto border-r border-white/10">
        <div className="p-4 sticky top-0 bg-slate-900/95 backdrop-blur z-10 border-b border-white/10">
          <h2 className="text-lg font-bold mb-4">Components</h2>
          
          {/* Filter Buttons - 3x2 Grid */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('components')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'components'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveFilter('cards')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'cards'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveFilter('headers')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'headers'
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => setActiveFilter('footers')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'footers'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Footers
            </button>
            <button
              onClick={() => setActiveFilter('stylish')}
              className={`px-3 py-2 rounded-lg transition-all text-xs font-bold whitespace-nowrap ${
                activeFilter === 'stylish'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Stylish
            </button>
          </div>
        </div>
        
        <div className="p-3 space-y-2">
          {displayedCategories.map((category) => (
            <div key={category}>
              {/* Category Header - Clickable to expand/collapse */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full text-left px-3 py-3 mb-2 bg-gradient-to-r from-red-600/90 to-red-700/70 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-between border border-red-500/50 hover:border-red-400 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                <span>{category}</span>
                <span className={`transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Category Items - Show/Hide based on expanded state */}
              {expandedCategories[category] && (
                <div className="space-y-1 pl-2 mb-4">
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
              )}
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
                  navigator.clipboard.writeText(code).then(() => {
                    setCopyMessage('Code Copied! ✓');
                    setTimeout(() => setCopyMessage(''), 1600);
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
            {copyMessage && copyMessage.includes('Code Copied') && <div className="text-green-400 text-xs mt-2 font-semibold">{copyMessage}</div>}
          </div>

          {/* Minimal Imports Section with Copy Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs font-semibold">Minimal imports</span>
              <button
                onClick={() => {
                  const importText = 'import { useState } from "react";';
                  navigator.clipboard.writeText(importText).then(() => {
                    setCopyMessage('Import Copied! ✓');
                    setTimeout(() => setCopyMessage(''), 1600);
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
              <code>import {'{ useState }'} from "react";</code>
            </pre>
            {copyMessage && copyMessage.includes('Import Copied') && <div className="text-green-400 text-xs mt-2 font-semibold">{copyMessage}</div>}
          </div>

          {/* Requirements Section with Copy Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs font-semibold">Requirements note</span>
              <button
                onClick={() => {
                  const requirementsText = 'Requires:\n- React\n- Tailwind CSS';
                  navigator.clipboard.writeText(requirementsText).then(() => {
                    setCopyMessage('Requirements Copied! ✓');
                    setTimeout(() => setCopyMessage(''), 1600);
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
            {copyMessage && copyMessage.includes('Requirements Copied') && <div className="text-green-400 text-xs mt-2 font-semibold">{copyMessage}</div>}
          </div>
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

export default ComponentsPage;
