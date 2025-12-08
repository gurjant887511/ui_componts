import React from 'react';

export default function CometCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Comet Animation Cards</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        <style>{`
          @keyframes comet {
            0% {
              left: -100%;
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }
          
          .comet-card {
            position: relative;
            overflow: hidden;
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
          }
        `}</style>

        {/* Comet Card 1 */}
        <div className="comet-card bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Comet Effect 1</h3>
          <p className="text-white/90">Beautiful animation that moves across the card like a comet</p>
        </div>

        {/* Comet Card 2 */}
        <div className="comet-card bg-gradient-to-br from-pink-600 to-red-600 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Comet Effect 2</h3>
          <p className="text-white/90">Smooth light sweep animation creates dynamic effect</p>
        </div>

        {/* Comet Card 3 */}
        <div className="comet-card bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Comet Effect 3</h3>
          <p className="text-white/90">Repeating comet animation for continuous visual interest</p>
        </div>

        {/* Comet Card 4 */}
        <div className="comet-card bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Comet Effect 4</h3>
          <p className="text-white/90">Perfect for interactive and engaging UI design</p>
        </div>
      </div>
    </div>
  );
}
