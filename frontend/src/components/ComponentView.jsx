import React, { useState } from 'react';
import ComponentLivePreview from './LivePreview';

function ComponentView({ component }) {
  const [view, setView] = useState('preview'); // 'preview' or 'code'

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {/* Toggle Buttons */}
      <div className="flex border-b border-gray-700">
        <button
          className={`px-4 py-2 ${
            view === 'preview'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setView('preview')}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 ${
            view === 'code'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setView('code')}
        >
          Code
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {view === 'preview' ? (
          <ComponentLivePreview code={component.code} />
        ) : (
          <pre className="p-4 bg-gray-800 rounded text-gray-300 overflow-x-auto">
            <code>{component.code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

export default ComponentView;