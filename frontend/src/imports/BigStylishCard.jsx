import React from 'react';

const BigStylishCard = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl text-white shadow-2xl">
      <h2 className="text-3xl font-bold mb-4">Big Stylish Card</h2>
      <p className="text-base opacity-90 mb-4">
        This is a large, impressive card component with more space and impact.
      </p>
      <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-opacity-90 transition">
        Learn More
      </button>
    </div>
  );
};

export default BigStylishCard;
