import React from 'react';

const StylishUserCard = () => {
  return (
    <div className="max-w-sm p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-4">👤</div>
      <h4 className="text-xl font-bold mb-1">User Name</h4>
      <p className="text-sm opacity-90 mb-4">user@example.com</p>
      <button className="w-full px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-opacity-90 transition">View Profile</button>
    </div>
  );
};

export default StylishUserCard;
