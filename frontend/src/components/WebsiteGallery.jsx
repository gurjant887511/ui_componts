import React, { useState } from 'react';

function WebsiteGallery({ onViewInternal }) {
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  const websites = [
    {
      id: 0,
      name: 'StylishX',
      url: 'stylishx',
      description: 'Super stylish modern website',
      icon: '✨',
      thumbnail: 'https://via.placeholder.com/200x120?text=StylishX',
      isInternal: true
    },
    {
      id: 0.5,
      name: 'NEXUS',
      url: 'nexus',
      description: 'Next-generation digital solutions',
      icon: '🚀',
      thumbnail: 'https://via.placeholder.com/200x120?text=NEXUS',
      isInternal: true
    },
    {
      id: 0.7,
      name: 'LUMINA',
      url: 'lumina',
      description: 'Luxury fashion couture',
      icon: '✨💎',
      thumbnail: 'https://via.placeholder.com/200x120?text=LUMINA',
      isInternal: true
    },
    {
      id: 0.9,
      name: 'RaiboWeb',
      url: 'raiboweb',
      description: 'Professional web development',
      icon: '💻',
      thumbnail: 'https://via.placeholder.com/200x120?text=RaiboWeb',
      isInternal: true
    },
    {
      id: 1.1,
      name: 'ElectroX',
      url: 'electrox',
      description: 'Premium electronics store & reviews',
      icon: '⚡',
      thumbnail: 'https://via.placeholder.com/200x120?text=ElectroX',
      isInternal: true
    },
    {
      id: 1,
      name: 'Google',
      url: 'https://www.google.com',
      description: 'Search engine and more',
      icon: '🔍',
      thumbnail: 'https://via.placeholder.com/200x120?text=Google'
    },
    {
      id: 2,
      name: 'YouTube',
      url: 'https://www.youtube.com',
      description: 'Video sharing platform',
      icon: '▶️',
      thumbnail: 'https://via.placeholder.com/200x120?text=YouTube'
    },
    {
      id: 3,
      name: 'GitHub',
      url: 'https://www.github.com',
      description: 'Code repository platform',
      icon: '💻',
      thumbnail: 'https://via.placeholder.com/200x120?text=GitHub'
    },
    {
      id: 4,
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      description: 'Q&A for programmers',
      icon: '❓',
      thumbnail: 'https://via.placeholder.com/200x120?text=Stack+Overflow'
    },
    {
      id: 5,
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
      description: 'Web development documentation',
      icon: '📚',
      thumbnail: 'https://via.placeholder.com/200x120?text=MDN'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web Gallery
          </h1>
          <p className="text-gray-300 text-lg">
            Explore amazing websites. Click on any website to visit it in a new tab.
          </p>
        </div>

        {/* Website Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {websites.map((website) => (
            <div
              key={website.id}
              className="group cursor-pointer"
              onClick={() => {
                if (website.isInternal) {
                  onViewInternal(website.url);
                } else {
                  window.open(website.url, '_blank');
                }
              }}
            >
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-purple-500/20">
                
                {/* Thumbnail */}
                <div className="relative h-32 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                  <img 
                    src={website.thumbnail}
                    alt={website.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {website.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {website.name}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1 mb-4">
                    {website.description}
                  </p>
                  <button
                    className="w-full py-2 px-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (website.isInternal) {
                        onViewInternal(website.url);
                      } else {
                        window.open(website.url, '_blank');
                      }
                    }}
                  >
                    {website.isInternal ? 'View Website' : 'Visit Website'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-bold text-white mb-2">1. Browse</h3>
              <p className="text-sm">Explore our collection of popular and useful websites.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">2. Click</h3>
              <p className="text-sm">Click on any website card to open it in a new tab.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">3. Explore</h3>
              <p className="text-sm">Visit and explore the full website in your browser.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteGallery;
