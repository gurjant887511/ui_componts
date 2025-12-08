import React, { useState } from 'react';

export default function InteractiveCard() {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    { title: 'Interactive', content: 'Click to see interaction', color: 'from-blue-600 to-blue-800' },
    { title: 'Dynamic', content: 'Cards respond to your clicks', color: 'from-purple-600 to-purple-800' },
    { title: 'Engaging', content: 'Create amazing user experiences', color: 'from-pink-600 to-pink-800' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Interactive Cards</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {cards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCard(idx)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeCard === idx
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        <div className={`bg-gradient-to-br ${cards[activeCard].color} rounded-lg p-12 text-center transform transition-all`}>
          <h2 className="text-3xl font-bold mb-4">{cards[activeCard].title}</h2>
          <p className="text-xl text-white/90">{cards[activeCard].content}</p>
        </div>
      </div>
    </div>
  );
}
