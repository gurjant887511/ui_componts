import React, { useState } from 'react';

const ComponentDemo = ({ name, description, component, code }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          {component}
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        {showCode && (
          <div className="mt-4">
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentDemo;