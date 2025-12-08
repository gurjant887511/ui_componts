import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ComponentsList from '../features/components-showcase/ComponentsList';
import ComponentPreview from '../features/components-showcase/ComponentPreview';

export default function ComponentsPage({ components }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <MainLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">Components Library</h1>
          <ComponentsList 
            components={components} 
            onSelect={setSelectedComponent} 
          />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <ComponentPreview component={selectedComponent} />
        </section>
      </div>
    </MainLayout>
  );
}