import React, { useState } from 'react';
import { generateHTML, WEB_EXAMPLES } from '../utils/previewHelpers';

export default function FullWebPreview() {
  const [selectedExample, setSelectedExample] = useState('dynamic-react');
  const [iframeKey, setIframeKey] = useState(0);
  const [activeTab, setActiveTab] = useState('preview');

  const example = WEB_EXAMPLES.find(e => e.id === selectedExample);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">Full Web Preview System</h1>
        <p className="text-gray-600 mb-6">Select a website to preview its code and see how it renders</p>

        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {WEB_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => {
                setSelectedExample(ex.id);
                setIframeKey(prev => prev + 1);
              }}
              className={`p-4 rounded-lg border-2 transition-all text-sm font-medium ${
                selectedExample === ex.id
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-blue-300'
              }`}
            >
              {ex.name}
            </button>
          ))}
        </div>
      </div>

      {example && (
        <div>
          {/* Toggle Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setActiveTab('code')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Preview
            </button>
          </div>

          {/* Code Display */}
          {activeTab === 'code' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-800 text-white px-4 py-3 font-mono text-sm flex justify-between items-center">
                <span>{example.name}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(example.code);
                    alert('Code copied to clipboard!');
                  }}
                  className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                >
                  Copy Code
                </button>
              </div>
              <pre className="p-4 overflow-auto max-h-96 bg-gray-900 text-gray-100 text-xs leading-relaxed">
                <code>{example.code}</code>
              </pre>
            </div>
          )}

          {/* Live Preview with Iframe */}
          {activeTab === 'preview' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-800 text-white px-4 py-3 font-mono text-sm">
                Live Preview
              </div>
              <div className="h-96 bg-gray-50 overflow-auto border-t">
                <iframe
                  key={iframeKey}
                  srcDoc={generateHTML(example.code)}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#000000ff'
                  }}
                  sandbox="allow-scripts allow-same-origin allow-modals"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
