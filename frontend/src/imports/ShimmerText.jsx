import React from 'react';

export default function ShimmerText() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Shimmer Text Effects</h1>
      
      <div className="space-y-12 max-w-3xl mx-auto">
        {/* Shimmer 1 */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8 text-center">
          <style>{`
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
            .shimmer-text-1 {
              font-size: 3rem;
              font-weight: bold;
              background: linear-gradient(90deg, #ffffff 0%, #60a5fa 50%, #ffffff 100%);
              background-size: 1000px 100%;
              animation: shimmer 3s infinite;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
          <div className="shimmer-text-1">Shimmer Effect</div>
        </div>

        {/* Shimmer 2 - Gold */}
        <div className="bg-black/50 border-2 border-yellow-600/50 rounded-lg p-8 text-center">
          <style>{`
            .shimmer-text-2 {
              font-size: 3rem;
              font-weight: bold;
              background: linear-gradient(90deg, #fbbf24 0%, #fef3c7 50%, #fbbf24 100%);
              background-size: 1000px 100%;
              animation: shimmer 3s infinite;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
          <div className="shimmer-text-2">Golden Shimmer</div>
        </div>

        {/* Shimmer 3 - Rainbow */}
        <div className="bg-black/50 border-2 border-purple-600/50 rounded-lg p-8 text-center">
          <style>{`
            .shimmer-text-3 {
              font-size: 3rem;
              font-weight: bold;
              background: linear-gradient(90deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #10b981 75%, #ec4899 100%);
              background-size: 1000px 100%;
              animation: shimmer 4s infinite;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
          <div className="shimmer-text-3">Rainbow Shimmer</div>
        </div>

        {/* Shimmer 4 - Cyan */}
        <div className="bg-black/50 border-2 border-cyan-500/50 rounded-lg p-8 text-center">
          <style>{`
            .shimmer-text-4 {
              font-size: 3rem;
              font-weight: bold;
              background: linear-gradient(90deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%);
              background-size: 1000px 100%;
              animation: shimmer 2s infinite;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
          <div className="shimmer-text-4">Cyan Shimmer</div>
        </div>
      </div>
    </div>
  );
}
