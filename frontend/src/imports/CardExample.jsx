import React from 'react';

const CardExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all">
          <h4 className="text-lg font-bold mb-2">Card {i}</h4>
          <p className="text-sm text-gray-300">Beautiful card with shadow effects and smooth transitions.</p>
        </div>
      ))}
    </div>
  );
};

export default CardExample;
