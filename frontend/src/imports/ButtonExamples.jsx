import React from 'react';

const ButtonExamples = () => {
  return (
    <div className="space-y-4 p-6">
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
  );
};

export default ButtonExamples;
