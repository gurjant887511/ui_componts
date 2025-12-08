import React from 'react';

const CodeDisplay = ({ code }) => {
  return (
    <div className="mt-4 bg-gray-800 rounded-lg p-4 overflow-x-auto">
      <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
};

export default CodeDisplay;