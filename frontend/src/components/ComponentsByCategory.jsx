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
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'cards', 'headers', 'footers', 'hero', 'logocloud', 'feature', 'pricing', 'faq', 'testimonial', 'cta'
  const [selectedHeaderType, setSelectedHeaderType] = useState('all'); // For header filtering
  const [fullScreenPreview, setFullScreenPreview] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300); // Sidebar width in pixels
  const [sidebarHeight, setSidebarHeight] = useState(600); // Sidebar height in pixels
  const [showResizePanel, setShowResizePanel] = useState(true); // Show/hide resize controls
  const [isDraggingWidth, setIsDraggingWidth] = useState(false);
  const [isDraggingHeight, setIsDraggingHeight] = useState(false);
  const [codeDisplayWidth, setCodeDisplayWidth] = useState(50); // Code section width as percentage (0-100)
  const [isDraggingDivider, setIsDraggingDivider] = useState(false);

  // Handle width dragging
  const handleWidthMouseDown = () => setIsDraggingWidth(true);
  const handleHeightMouseDown = () => setIsDraggingHeight(true);
  const handleDividerMouseDown = () => setIsDraggingDivider(true);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggingWidth) {
        const newWidth = Math.max(200, Math.min(600, e.clientX - 10));
        setSidebarWidth(newWidth);
      }
      if (isDraggingHeight) {
        const newHeight = Math.max(300, Math.min(1000, e.clientY - 50));
        setSidebarHeight(newHeight);
      }
      if (isDraggingDivider) {
        // Get the code-preview container's position
        const container = document.getElementById('code-preview-container');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const relativeX = e.clientX - containerRect.left;
          const percentage = Math.max(20, Math.min(80, (relativeX / containerRect.width) * 100));
          setCodeDisplayWidth(percentage);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDraggingWidth(false);
      setIsDraggingHeight(false);
      setIsDraggingDivider(false);
    };

    if (isDraggingWidth || isDraggingHeight || isDraggingDivider) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingWidth, isDraggingHeight, isDraggingDivider]);

  // All available header types
  const HEADER_TYPES = [
    'Simple Header',
    'Stylish Header',
    'Dynamic Header',
    'Animated Header',
    'Sticky Header',
    'Transparent Header',
    'Fixed Header',
    'Glassmorphism Header',
    'Neumorphism Header',
    'Gradient Header'
  ];

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || '/api';
        const response = await fetch(`${apiUrl}/components`);
        const data = await response.json();

        // Group components by category and subcategory
        const grouped = data.reduce((acc, component) => {
          let category = component.category || 'Other';
          let subcategory = component.subcategory || 'General';
          
          if (!acc[category]) {
            acc[category] = {};
          }
          
          if (!acc[category][subcategory]) {
            acc[category][subcategory] = [];
          }
          
          acc[category][subcategory].push(component);
          return acc;
        }, {});

        setComponents(grouped);
        setLoading(false);

        // Set first category as selected
        const firstCategory = Object.keys(grouped)[0];
        if (firstCategory) {
          setSelectedCategory(firstCategory);
          const firstSubcategory = Object.keys(grouped[firstCategory])[0];
          if (firstSubcategory && grouped[firstCategory][firstSubcategory].length > 0) {
            setSelectedComponent(grouped[firstCategory][firstSubcategory][0]);
          }
        }
      } catch (error) {
        console.error('Error fetching components:', error);
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  // Reset selected component when filter mode changes
  useEffect(() => {
    setSelectedComponent(null);
    setSelectedHeaderType('all');
  }, [filterMode]);

  // Get filtered categories based on filterMode
  let displayedCategories = Object.keys(components).sort();
  let filteredComponents = components;
  
  if (filterMode === 'cards') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Cards');
    // Also filter components to only show Cards category
    filteredComponents = {};
    if (components['Cards']) {
      filteredComponents['Cards'] = components['Cards'];
    }
  } else if (filterMode === 'headers') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Header');
    filteredComponents = {};
    if (components['Header']) {
      filteredComponents['Header'] = components['Header'];
    }
  } else if (filterMode === 'footers') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Footer');
    filteredComponents = {};
    if (components['Footer']) {
      filteredComponents['Footer'] = components['Footer'];
    }
  } else if (filterMode === 'hero') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Hero Section');
    filteredComponents = {};
    if (components['Hero Section']) {
      filteredComponents['Hero Section'] = components['Hero Section'];
    }
  } else if (filterMode === 'logocloud') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Logo Cloud');
    filteredComponents = {};
    if (components['Logo Cloud']) {
      filteredComponents['Logo Cloud'] = components['Logo Cloud'];
    }
  } else if (filterMode === 'feature') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Feature');
    filteredComponents = {};
    if (components['Feature']) {
      filteredComponents['Feature'] = components['Feature'];
    }
  } else if (filterMode === 'pricing') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Pricing');
    filteredComponents = {};
    if (components['Pricing']) {
      filteredComponents['Pricing'] = components['Pricing'];
    }
  } else if (filterMode === 'faq') {
    displayedCategories = displayedCategories.filter(cat => cat === 'FAQ');
    filteredComponents = {};
    if (components['FAQ']) {
      filteredComponents['FAQ'] = components['FAQ'];
    }
  } else if (filterMode === 'testimonial') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Testimonial');
    filteredComponents = {};
    if (components['Testimonial']) {
      filteredComponents['Testimonial'] = components['Testimonial'];
    }
  } else if (filterMode === 'cta') {
    displayedCategories = displayedCategories.filter(cat => cat === 'Call to Action');
    filteredComponents = {};
    if (components['Call to Action']) {
      filteredComponents['Call to Action'] = components['Call to Action'];
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Fixed Floating Resize Panel - Top Right Corner / Bottom on Mobile */}
        <div className="fixed bottom-4 right-4 md:top-4 md:bottom-auto z-50 bg-gray-900/95 backdrop-blur border border-purple-500/50 rounded-xl p-3 sm:p-5 shadow-2xl w-full sm:max-w-sm md:max-w-sm mx-2 sm:mx-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-sm sm:text-lg flex items-center gap-2">
              <span>🎚️</span> <span className="hidden sm:inline">Resize Panel</span>
            </h3>
            <button
              onClick={() => setShowResizePanel(!showResizePanel)}
              className="text-gray-400 hover:text-white text-xl"
            >
              {showResizePanel ? '−' : '+'}
            </button>
          </div>

          {showResizePanel && (
            <div className="space-y-4">
              {/* Width Control */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-white font-semibold text-sm">📏 Width</label>
                  <span className="text-purple-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">{sidebarWidth}px</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="600"
                  value={sidebarWidth}
                  onChange={(e) => setSidebarWidth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={() => setSidebarWidth(Math.max(200, sidebarWidth - 50))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-purple-600 text-white rounded transition-colors"
                  >
                    −
                  </button>
                  <button
                    onClick={() => setSidebarWidth(300)}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setSidebarWidth(Math.min(600, sidebarWidth + 50))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-purple-600 text-white rounded transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Height Control */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-white font-semibold text-sm">📏 Height</label>
                  <span className="text-purple-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">{sidebarHeight}px</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1000"
                  value={sidebarHeight}
                  onChange={(e) => setSidebarHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={() => setSidebarHeight(Math.max(300, sidebarHeight - 100))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-purple-600 text-white rounded transition-colors"
                  >
                    −
                  </button>
                  <button
                    onClick={() => setSidebarHeight(600)}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setSidebarHeight(Math.min(1000, sidebarHeight + 100))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-purple-600 text-white rounded transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Code Display Width Control */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-white font-semibold text-sm">💻 Code Width</label>
                  <span className="text-cyan-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">{codeDisplayWidth.toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={codeDisplayWidth}
                  onChange={(e) => setCodeDisplayWidth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={() => setCodeDisplayWidth(Math.max(20, codeDisplayWidth - 5))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-cyan-600 text-white rounded transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCodeDisplayWidth(50)}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    50/50
                  </button>
                  <button
                    onClick={() => setCodeDisplayWidth(Math.min(80, codeDisplayWidth + 5))}
                    className="flex-1 px-2 py-1 text-xs bg-gray-700 hover:bg-cyan-600 text-white rounded transition-colors"
                  >
                    →
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Code: {codeDisplayWidth.toFixed(0)}% | Preview: {(100 - codeDisplayWidth).toFixed(0)}%</p>
              </div>

              {/* Current Size Display */}
              <div className="bg-gray-800/50 border border-purple-500/30 rounded p-3 text-xs text-purple-200">
                <p>📐 {sidebarWidth}px × {sidebarHeight}px</p>
              </div>

              {/* Drag Tip */}
              <div className="bg-blue-900/30 border border-blue-500/30 rounded p-3 text-xs text-blue-200">
                💡 <strong>Tip:</strong> Drag the divider between Code & Preview to resize!
              </div>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8 pt-16 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">Component Library</h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Browse and preview all MongoDB components by category</p>
          
          {/* Filter Buttons */}
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-2 sm:gap-3 flex-nowrap min-w-min">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                filterMode === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode('cards')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                filterMode === 'cards'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setFilterMode('headers')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                filterMode === 'headers'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => setFilterMode('footers')}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                filterMode === 'footers'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Footers
            </button>
            <button
              onClick={() => setFilterMode('hero')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'hero'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Hero Section
            </button>
            <button
              onClick={() => setFilterMode('logocloud')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'logocloud'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Logo Cloud
            </button>
            <button
              onClick={() => setFilterMode('feature')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'feature'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Feature
            </button>
            <button
              onClick={() => setFilterMode('pricing')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'pricing'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setFilterMode('faq')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'faq'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setFilterMode('testimonial')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'testimonial'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Testimonial
            </button>
            <button
              onClick={() => setFilterMode('cta')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filterMode === 'cta'
                  ? 'bg-fuchsia-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Call to Action
            </button>
          </div>
            </div>
          </div>

        {/* Special View for Headers with Type Filtering */}
        {filterMode === 'headers' && displayedCategories.includes('Header') && (
          <div className="mb-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Filter Headers by Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedHeaderType('all')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedHeaderType === 'all'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  All Headers
                </button>
                {HEADER_TYPES.map((headerType) => (
                  <button
                    key={headerType}
                    onClick={() => setSelectedHeaderType(headerType)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      selectedHeaderType === headerType
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {headerType}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Categories Grid View */}
        <div className="space-y-8 sm:space-y-12">
          {displayedCategories.map((category) => {
            // Get components for this category
            let categoryComps = filteredComponents[category];
            
            // Special filtering for headers by headerType
            if (category === 'Header' && selectedHeaderType !== 'all') {
              const filteredSubcats = {};
              Object.entries(categoryComps).forEach(([subcat, items]) => {
                const filtered = items.filter(comp => comp.headerType === selectedHeaderType);
                if (filtered.length > 0) {
                  filteredSubcats[subcat] = filtered;
                }
              });
              if (Object.keys(filteredSubcats).length === 0) {
                return null;
              }
              categoryComps = filteredSubcats;
            }

            return (
            <div key={category} className="space-y-4">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b-2 border-gradient-to-r from-purple-500 via-pink-500 to-transparent">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                    <span className="text-white font-bold text-lg">{category.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{category}</h2>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {Object.values(categoryComps).reduce((sum, arr) => sum + arr.length, 0)} component{Object.values(categoryComps).reduce((sum, arr) => sum + arr.length, 0) !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 text-purple-300 font-semibold text-sm sm:text-lg">
                    {Object.values(categoryComps).reduce((sum, arr) => sum + arr.length, 0)}
                  </span>
                </div>
              </div>

              {/* Subcategories */}
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(categoryComps).map(([subcategory, comps]) => (
                  <div key={subcategory} className="pl-0 sm:pl-4">
                    {/* Subcategory Header */}
                    <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-3 sm:mb-4 flex items-center gap-2">
                      <div className="hidden sm:block h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      {subcategory}
                      <span className="text-xs sm:text-sm bg-purple-600/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ml-1 sm:ml-2">{comps.length}</span>
                    </h3>

                    {/* Components Grid for This Subcategory */}
                    <div className="space-y-3 sm:space-y-4">
                      {comps.map((comp) => (
                        <div
                          key={comp._id}
                          className={`group rounded-lg transition-all duration-300 overflow-hidden ${
                            selectedComponent?._id === comp._id
                              ? 'bg-purple-600/30 border-purple-500 shadow-lg shadow-purple-500/20'
                              : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20'
                          } border`}
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4">
                            {/* Component Button - Left Side */}
                            <button
                              onClick={() => {
                                setSelectedCategory(category);
                                setSelectedComponent(comp);
                              }}
                              className="text-left p-3 sm:p-5 rounded-lg transition-all duration-300 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-grow">
                                  <h3 className="font-semibold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors">
                                    {comp.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 mt-1">Component</p>
                                </div>
                                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div className="pt-2 sm:pt-3 border-t border-gray-700/30 space-y-1 sm:space-y-2">
                                <span className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/50 rounded text-xs text-purple-300 font-semibold">
                                  {category}
                                </span>
                                <span className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 bg-pink-500/20 border border-pink-500/50 rounded text-xs text-pink-300 font-semibold ml-1 sm:ml-2">
                                  {subcategory}
                                </span>
                              </div>
                            </button>

                            {/* Live Preview - Right Side */}
                            <div className="rounded-lg overflow-hidden border border-gray-700 bg-slate-950 min-h-[150px] sm:min-h-[200px]">
                              <ComponentLivePreview code={comp.code} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Components Sidebar with Resizable Dimensions and Drag Handles */}
        <div 
          className="relative mb-8 p-6 bg-black/40 backdrop-blur border-2 rounded-xl overflow-auto shadow-xl"
          style={{
            width: `${sidebarWidth}px`,
            height: `${sidebarHeight}px`,
            transition: isDraggingWidth || isDraggingHeight ? 'none' : 'all 0.3s ease',
            borderColor: isDraggingWidth || isDraggingHeight ? '#ec4899' : '#a855f7'
          }}
        >
          {/* Right Edge Resize Handle (Width) */}
          <div
            onMouseDown={handleWidthMouseDown}
            className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-red-500 transition-colors group"
            style={{
              backgroundColor: isDraggingWidth ? '#ef4444' : 'rgba(239, 68, 68, 0.3)',
              cursor: 'col-resize'
            }}
            title="Drag to resize width"
          >
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold whitespace-nowrap pointer-events-none">
              ↔️ WIDTH
            </div>
          </div>

          {/* Bottom Edge Resize Handle (Height) */}
          <div
            onMouseDown={handleHeightMouseDown}
            className="absolute bottom-0 left-0 h-1 w-full cursor-row-resize hover:bg-blue-500 transition-colors group"
            style={{
              backgroundColor: isDraggingHeight ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)',
              cursor: 'row-resize'
            }}
            title="Drag to resize height"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold whitespace-nowrap pointer-events-none">
              ↕️ HEIGHT
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">📦</span> Components
          </h2>

          {/* Sidebar Height/Width Info */}
          <div className="mb-4 p-3 bg-purple-600/20 border border-purple-500/30 rounded text-xs text-purple-200">
            <p>📐 Size: {sidebarWidth}px × {sidebarHeight}px</p>
            <p className="text-purple-300 text-xs mt-1">💡 Drag red/blue edges to resize</p>
          </div>

          {/* Category Filters in Sidebar */}
          <div className="space-y-2 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2 py-1 text-xs rounded font-semibold transition-all ${
                  filterMode === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterMode('cards')}
                className={`px-2 py-1 text-xs rounded font-semibold transition-all ${
                  filterMode === 'cards'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setFilterMode('headers')}
                className={`px-2 py-1 text-xs rounded font-semibold transition-all ${
                  filterMode === 'headers'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Headers
              </button>
            </div>
          </div>

          {/* Component List */}
          <div className="space-y-2 text-xs overflow-y-auto">
            <p className="text-gray-400 font-semibold mb-3 sticky top-0 bg-black/40">📋 COMPONENTS</p>
            {selectedComponent && (
              <div className="p-2 bg-purple-600/20 border border-purple-500 rounded text-purple-200 font-semibold">
                ✅ {selectedComponent.name}
              </div>
            )}
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Card Components
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Header Templates
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Footer Section
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Call To Action
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Hero Sections
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Feature Blocks
            </div>
            <div className="p-2 bg-gray-700/40 hover:bg-gray-700 rounded text-gray-300 cursor-pointer transition-colors">
              Pricing Tables
            </div>
          </div>
        </div>

        {/* Selected Component Details */}
        {selectedComponent && (
          <div className="mt-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              
              {/* Component Header */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-gray-700/50 p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{selectedComponent.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg text-xs sm:text-sm text-purple-300 font-semibold">
                        {selectedComponent.category}
                      </span>
                      {selectedComponent.subcategory && (
                        <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/50 rounded-lg text-xs sm:text-sm text-pink-300 font-semibold">
                          {selectedComponent.subcategory}
                        </span>
                      )}
                      {selectedComponent.headerType && (
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-xs sm:text-sm text-cyan-300 font-semibold">
                          {selectedComponent.headerType}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-gray-400">Component Code & Preview</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code + Live Preview Section - Mobile Stack */}
              <div className="p-2 sm:p-4 md:p-8">
                <div 
                  id="code-preview-container"
                  className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch"
                  style={{
                    display: 'flex',
                    gap: 'var(--gap)',
                    flexDirection: window.innerWidth < 1024 ? 'column' : 'row'
                  }}
                >
                  {/* Code Display - Full Width Mobile, Dynamic Width Desktop */}
                  <div style={{
                    flex: `0 0 ${codeDisplayWidth}%`,
                    minWidth: 0,
                    position: 'relative',
                    width: window.innerWidth < 1024 ? '100%' : 'auto'
                  }}>
                    <div className="text-xs sm:text-sm text-gray-400 font-semibold mb-2 sm:mb-4">Component Code</div>
                    <div className="overflow-auto max-h-96 lg:max-h-screen">
                      <CodeDisplay code={selectedComponent.code} />
                    </div>
                  </div>
                  
                  {/* Draggable Divider - Hidden on Mobile */}
                  <div
                    onMouseDown={handleDividerMouseDown}
                    className="hidden lg:block relative group"
                    style={{
                      flex: '0 0 2px',
                      cursor: isDraggingDivider ? 'col-resize' : 'col-resize',
                      backgroundColor: isDraggingDivider ? '#06b6d4' : '#4b5563',
                      transition: isDraggingDivider ? 'none' : 'background-color 0.2s ease'
                    }}
                    title="Drag to resize Code and Preview"
                  >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 rounded text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      ↔️ Drag
                    </div>
                  </div>
                  
                  {/* Live Preview - Full Width Mobile, Dynamic Width Desktop */}
                  <div style={{
                    flex: `0 0 ${100 - codeDisplayWidth}%`,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    width: window.innerWidth < 1024 ? '100%' : 'auto'
                  }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem'}}>
                      <div style={{fontSize: '0.875rem', color: '#9ca3af', fontWeight: '600'}}>Live Preview</div>
                      <button
                        onClick={() => setFullScreenPreview(true)}
                        style={{
                          padding: '0.5rem 0.75rem',
                          backgroundColor: '#9333ea',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#7e22ce'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#9333ea'}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                        Preview
                      </button>
                    </div>
                    <div className="bg-slate-950 rounded-lg overflow-hidden border border-gray-700 min-h-[250px] sm:min-h-[400px] flex-1">
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
                  <p className="text-gray-400 text-sm mt-1">{selectedComponent.category}{selectedComponent.subcategory && ` - ${selectedComponent.subcategory}`}{selectedComponent.headerType && ` - ${selectedComponent.headerType}`} - Full Preview</p>
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