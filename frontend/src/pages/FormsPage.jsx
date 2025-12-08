import React from 'react';
import ComponentView from '../components/ComponentView';

function FormsPage({ components }) {
  // Filter form components
  const formComponents = components.filter(comp => 
    comp.name.toLowerCase().includes('form') ||
    comp.name.toLowerCase().includes('login') ||
    comp.name.toLowerCase().includes('signup')
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Form Components
      </h1>
      
      <div className="grid gap-8">
        {formComponents.map(component => (
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

export default FormsPage;