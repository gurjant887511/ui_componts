import React from 'react';
import ComponentView from '../components/ComponentView';

function TextEffectsPage({ components }) {
  // Filter text effect components
  const textEffectComponents = components.filter(comp => 
    comp.name.toLowerCase().includes('text') ||
    comp.name.toLowerCase().includes('typography') ||
    comp.name.toLowerCase().includes('heading')
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Text Effect Components
      </h1>
      
      <div className="grid gap-8">
        {textEffectComponents.map(component => (
          <div key={component._id} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {component.name}
            </h2>
            <ComponentView component={component} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextEffectsPage;