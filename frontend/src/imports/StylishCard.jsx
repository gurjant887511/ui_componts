import React from 'react';

export default function StylishCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Stylish Card Designs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card 1 - Gradient with Shadow */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-bold mb-3">Gradient Card</h3>
          <p className="text-white/90 mb-4">Beautiful gradient background with hover effect</p>
          <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Explore
          </button>
        </div>

        {/* Card 2 - Glass Effect */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all">
          <h3 className="text-2xl font-bold mb-3">Glass Effect</h3>
          <p className="text-white/90 mb-4">Modern glassmorphism design with transparency</p>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Card 3 - Minimal with Border */}
        <div className="border-2 border-white/30 rounded-xl p-8 hover:border-white/60 transition-all">
          <h3 className="text-2xl font-bold mb-3">Minimal Card</h3>
          <p className="text-white/90 mb-4">Clean design with subtle border styling</p>
          <button className="px-4 py-2 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
            Details
          </button>
        </div>

        {/* Card 4 - Dark Neon */}
        <div className="bg-black/50 border-2 border-cyan-500/50 rounded-xl p-8 hover:border-cyan-400 transition-all">
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">Neon Card</h3>
          <p className="text-white/90 mb-4">Cyberpunk-inspired neon styling</p>
          <button className="px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-all">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
}
