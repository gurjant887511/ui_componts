import React from 'react';

export default function CardExample() {
  const cards = [
    { title: 'Card One', content: 'This is a beautiful card with shadow effects.' },
    { title: 'Card Two', content: 'Each card has its own unique styling.' },
    { title: 'Card Three', content: 'Cards are highly customizable components.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Card Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all">
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-300">{card.content}</p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
