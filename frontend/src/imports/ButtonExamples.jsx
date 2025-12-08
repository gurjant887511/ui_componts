import React from 'react';

export default function ButtonExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Button Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Basic Buttons */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Basic Buttons</h2>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
              Primary Button
            </button>
            <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all">
              Success Button
            </button>
            <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all">
              Danger Button
            </button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Button Sizes</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all text-sm">
              Small Button
            </button>
            <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all">
              Medium Button
            </button>
            <button className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all text-lg">
              Large Button
            </button>
          </div>
        </div>

        {/* Outlined Buttons */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Outlined Buttons</h2>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all">
              Outlined Primary
            </button>
            <button className="w-full px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-all">
              Outlined Success
            </button>
          </div>
        </div>

        {/* Gradient Buttons */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Gradient Buttons</h2>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
              Gradient 1
            </button>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all">
              Gradient 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
