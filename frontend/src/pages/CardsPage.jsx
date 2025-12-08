import React from 'react';
import ComponentView from '../components/ComponentView';

function CardsPage({ components }) {
  // Filter card components
  const cardComponents = components.filter(comp => 
    comp.name.toLowerCase().includes('card')
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Card Components
      </h1>
      
      <div className="grid gap-8">
        {cardComponents.map(component => (
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

export default CardsPage;