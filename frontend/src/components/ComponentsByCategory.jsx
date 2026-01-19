import React, { useState, useEffect } from 'react';
import CodeDisplay from './CodeDisplay';
import ComponentLivePreview from './LivePreview';

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

export default function ComponentsByCategory() {
  const [components, setComponents] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'cards', 'headers', 'footers'
  const [fullScreenPreview, setFullScreenPreview] = useState(false);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/components');
        const data = await response.json();

        // Group components by category - keep original categories from DB
        const grouped = data.reduce((acc, component) => {
          let category = component.category || 'Other';
          
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(component);
          return acc;
        }, {});

        setComponents(grouped);
        setLoading(false);

        // Set first category as selected
        const firstCategory = Object.keys(grouped)[0];
        if (firstCategory) {
          setSelectedCategory(firstCategory);
          if (grouped[firstCategory] && grouped[firstCategory].length > 0) {
            setSelectedComponent(grouped[firstCategory][0]);
          }
        }
      } catch (error) {
        console.error('Error fetching components:', error);
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  // Get filtered categories based on filterMode
  let displayedCategories = Object.keys(components).sort();
  
  if (filterMode === 'cards') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Cards');
  } else if (filterMode === 'headers') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Header');
  } else if (filterMode === 'footers') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Footer');
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        <p className="text-gray-400 mt-4">Loading components from MongoDB...</p>
      </div>
    );
  }

  if (Object.keys(components).length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400">No components found. Please seed the database.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Component Library</h1>
          <p className="text-gray-400 text-lg mb-6">Browse and preview all MongoDB components by category</p>
          
          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('cards')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'cards'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setFilterMode('headers')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'headers'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => setFilterMode('footers')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'footers'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Footers
            </button>
          </div>
        </div>

        {/* Categories Grid View */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-4 pb-4 border-b-2 border-gradient-to-r from-purple-500 via-pink-500 to-transparent">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                    <span className="text-white font-bold text-lg">{category.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-white">{category}</h2>
                  <p className="text-gray-400 text-sm">
                    {components[category].length} component{components[category].length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 text-purple-300 font-semibold text-lg">
                    {components[category].length}
                  </span>
                </div>
              </div>

              {/* Components Grid for This Category - With Inline Previews */}
              <div className="space-y-6">
                {components[category].map((comp) => (
                  <div
                    key={comp._id}
                    className={`group rounded-lg transition-all duration-300 overflow-hidden ${
                      selectedComponent?._id === comp._id
                        ? 'bg-purple-600/30 border-purple-500 shadow-lg shadow-purple-500/20'
                        : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20'
                    } border`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                      {/* Component Button - Left Side */}
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          setSelectedComponent(comp);
                        }}
                        className="text-left p-5 rounded-lg transition-all duration-300 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-grow">
                            <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {comp.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">Component</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="pt-3 border-t border-gray-700/30">
                          <span className="inline-block px-2 py-1 bg-purple-500/20 border border-purple-500/50 rounded text-xs text-purple-300 font-semibold">
                            {category}
                          </span>
                        </div>
                      </button>

                      {/* Live Preview - Right Side */}
                      <div className="rounded-lg overflow-hidden border border-gray-700 bg-slate-950 min-h-[200px]">
                        <ComponentLivePreview code={comp.code} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Component Details */}
        {selectedComponent && (
          <div className="mt-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              
              {/* Component Header */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-gray-700/50 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{selectedComponent.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg text-sm text-purple-300 font-semibold">
                        {selectedComponent.category}
                      </span>
                      <span className="text-gray-400 text-sm">Component Code & Preview</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code + Live Preview Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Code Display */}
                  <div>
                    <div className="text-sm text-gray-400 font-semibold mb-4">Component Code</div>
                    <CodeDisplay code={selectedComponent.code} />
                  </div>
                  
                  {/* Live Preview */}
                  <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                      <div style={{fontSize: '0.875rem', color: '#9ca3af', fontWeight: '600'}}>Live Preview</div>
                      <button
                        onClick={() => setFullScreenPreview(true)}
                        style={{
                          padding: '0.75rem 1rem',
                          backgroundColor: '#9333ea',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#7e22ce'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#9333ea'}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                        Full Preview
                      </button>
                    </div>
                    <div className="bg-slate-950 rounded-lg overflow-hidden border border-gray-700 min-h-[400px]">
                      <ComponentLivePreview code={selectedComponent.code} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Preview Modal */}
        {fullScreenPreview && selectedComponent && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="w-full h-full flex flex-col">
              {/* Header with close button */}
              <div className="bg-gray-900/95 border-b border-gray-700 p-6 flex items-center justify-between">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-white">{selectedComponent.name}</h2>
                  <p className="text-gray-400 text-sm mt-1">{selectedComponent.category} - Full Preview</p>
                </div>
                <button
                  onClick={() => setFullScreenPreview(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title="Close full preview"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Full Screen Preview Area */}
              <div className="flex-grow overflow-auto bg-slate-950">
                <div className="w-full h-full p-8">
                  <div className="bg-slate-950 rounded-lg overflow-hidden border border-gray-700 h-full min-h-screen">
                    <ComponentLivePreview code={selectedComponent.code} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}