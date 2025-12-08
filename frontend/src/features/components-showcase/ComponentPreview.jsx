import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";

export default function ComponentPreview({ component }) {
  if (!component) {
    return (
      <div className="p-8 text-center text-gray-500">
        Select a component to preview
      </div>
    );
  }

  const files = {
    "/App.js": `import React from 'react';
import Component from './Component';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Component />
    </div>
  );
}`,
    "/Component.js": component.code
  };

  return (
    <div className="rounded-lg overflow-hidden border">
      <Sandpack
        template="react"
        files={files}
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
        }}
      />
    </div>
  );
}