import React from 'react';

const CometCard = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-10"></div>
      <h3 className="text-2xl font-bold mb-2 relative z-10">Comet Card</h3>
      <p className="text-sm opacity-90 relative z-10">A dynamic card with animated background effects.</p>
    </div>
  );
};

export default CometCard;
