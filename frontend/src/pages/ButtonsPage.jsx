import React, { useState, useMemo } from 'react';
import ComponentView from '../components/ComponentView';
import ImportsComponents from '../components/ImportsComponents';

function ButtonsPage({ components }) {
  const [activeTab, setActiveTab] = useState('custom');

  // Filter button components
  const buttonComponents = components?.filter(comp =>
    comp.name?.toLowerCase().includes('button')
  ) || [];

  // Keep only import-related metadata here and pass to ImportsComponents
  const importedComponents = useMemo(() => {
    return (components || []).filter(c =>
      c.isImported || c.imported || c.packageName || c.source || c.code
    );
  }, [components]);

  return (
    <div className="space-y-8 container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Button Components
      </h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
        <button
          className={`py-2 px-4 ${activeTab === 'custom' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('custom')}
        >
          Custom Components
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'imported' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          onClick={() => setActiveTab('imported')}
        >
          Imported Components
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {activeTab === 'custom' ? (
          <div className="grid gap-8">
            {buttonComponents.map(component => (
              <div key={component._id || component.id || component.name} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {component.name}
                </h2>
                <ComponentView component={component} />
              </div>
            ))}
          </div>
        ) : (
          // All imported-component UI is moved into ImportsComponents
          <ImportsComponents importedComponents={importedComponents} />
        )}
      </div>
    </div>
  );
}

export default ButtonsPage;