import React from 'react';

export default function ComponentsList({ components, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <div 
          key={component.id}
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800"
          onClick={() => onSelect(component)}
        >
          <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{component.description}</p>
        </div>
      ))}
    </div>
  );
}