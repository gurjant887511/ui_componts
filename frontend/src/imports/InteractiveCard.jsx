import React from 'react';

const InteractiveCard = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
      <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
      <p className="text-sm opacity-90">Hover over this card to see the interactive effects.</p>
    </div>
  );
};

export default InteractiveCard;
