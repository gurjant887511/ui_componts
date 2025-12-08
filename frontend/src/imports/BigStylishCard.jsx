import React from 'react';

export default function BigStylishCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Big Stylish Cards</h1>
      
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Large Hero Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 md:p-16 shadow-2xl">
          <h2 className="text-5xl font-bold mb-4">Premium Features</h2>
          <p className="text-xl text-white/90 mb-8">Experience the power of advanced UI components with stunning animations and smooth interactions.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Two Column Big Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-4">Design System</h3>
            <p className="text-white/80 mb-6">Comprehensive collection of reusable components built with React and Tailwind CSS.</p>
            <ul className="space-y-2">
              <li>✓ 50+ Components</li>
              <li>✓ Fully Customizable</li>
              <li>✓ Production Ready</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-4">Performance</h3>
            <p className="text-white/80 mb-6">Lightning-fast performance with optimized rendering and smooth animations.</p>
            <ul className="space-y-2">
              <li>✓ Fast Load Times</li>
              <li>✓ Smooth Animations</li>
              <li>✓ Mobile Optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
