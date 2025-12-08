import React from 'react';

export default function TextHoverEffect() {
  const effects = [
    { text: 'Hover Effect 1', color: 'text-blue-400' },
    { text: 'Hover Effect 2', color: 'text-purple-400' },
    { text: 'Hover Effect 3', color: 'text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Text Hover Effects</h1>
      
      <div className="space-y-12 max-w-2xl mx-auto">
        {/* Effect 1: Glow on Hover */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Glow Effect</h2>
          <p className="text-4xl font-bold hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer">
            Hover over me
          </p>
        </div>

        {/* Effect 2: Color Change */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Color Transition</h2>
          <p className="text-4xl font-bold text-white hover:text-purple-400 transition-all duration-300 cursor-pointer">
            Smooth Color Change
          </p>
        </div>

        {/* Effect 3: Scale and Glow */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Scale & Glow</h2>
          <p className="text-4xl font-bold hover:scale-110 hover:text-pink-400 hover:drop-shadow-lg transform transition-all duration-300 cursor-pointer inline-block">
            Interactive Text
          </p>
        </div>

        {/* Effect 4: Underline Animation */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Underline Animation</h2>
          <p className="text-lg font-semibold relative inline-block group cursor-pointer">
            Hover Text Effect
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
