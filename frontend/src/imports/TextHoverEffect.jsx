import React from 'react';

const TextHoverEffect = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-400 transition-all cursor-pointer">
        Hover Over This Text
      </h2>
    </div>
  );
};

export default TextHoverEffect;
