import React from 'react';

export default function NeonGlowText() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Neon Glow Text</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Neon Glow 1 */}
        <div className="bg-black/50 border-2 border-cyan-500/50 rounded-lg p-8 text-center">
          <h2 className="text-5xl font-black text-cyan-400 drop-shadow-lg" style={{
            textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #0099cc'
          }}>
            NEON GLOW
          </h2>
        </div>

        {/* Neon Glow 2 */}
        <div className="bg-black/50 border-2 border-pink-500/50 rounded-lg p-8 text-center">
          <h2 className="text-5xl font-black text-pink-400" style={{
            textShadow: '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #d600a6'
          }}>
            ELECTRIC
          </h2>
        </div>

        {/* Neon Glow 3 */}
        <div className="bg-black/50 border-2 border-purple-500/50 rounded-lg p-8 text-center">
          <h2 className="text-5xl font-black text-purple-400" style={{
            textShadow: '0 0 10px #a000ff, 0 0 20px #a000ff, 0 0 30px #6b00d4'
          }}>
            CYBER PUNK
          </h2>
        </div>

        {/* Neon Glow 4 - Rainbow */}
        <div className="bg-black/50 border-2 border-yellow-500/50 rounded-lg p-8 text-center">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent" style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
          }}>
            RAINBOW NEON
          </h2>
        </div>
      </div>
    </div>
  );
}
