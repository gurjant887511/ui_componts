import React from 'react';

export default function AuroraGlass() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Aurora Glass Effects</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Aurora Glass 1 */}
        <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-blue-600/30 to-purple-600/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Aurora Glass</h2>
            <p className="text-white/80">Beautiful glass effect with aurora gradient background</p>
          </div>
        </div>

        {/* Aurora Glass 2 */}
        <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-cyan-600/30 to-blue-600/30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Cyan Aurora</h2>
            <p className="text-white/80">Modern glass design with cyan and blue aura</p>
          </div>
        </div>

        {/* Aurora Glass 3 */}
        <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-pink-600/30 to-red-600/30">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 opacity-20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Sunset Aurora</h2>
            <p className="text-white/80">Warm glass effect with sunset colors</p>
          </div>
        </div>

        {/* Aurora Glass 4 */}
        <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-green-600/30 to-emerald-600/30">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 opacity-20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Nature Aurora</h2>
            <p className="text-white/80">Fresh glass effect with nature-inspired colors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
