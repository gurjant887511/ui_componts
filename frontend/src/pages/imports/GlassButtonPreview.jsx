import React from 'react';
import Button from '../../imports/GlassButton';

const GlassButtonPreview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-white mb-8">Glass Button Preview</h1>
        
        <div className="space-y-6">
          <div className="space-x-4">
            <Button size="small">Small Button</Button>
            <Button>Medium Button</Button>
            <Button size="large">Large Button</Button>
          </div>

          <div className="space-x-4">
            <Button theme="dark">Dark Theme</Button>
            <Button theme="light">Light Theme</Button>
          </div>

          <div className="space-x-4">
            <Button color="255,0,0">Red Tint</Button>
            <Button color="0,255,0">Green Tint</Button>
            <Button color="0,0,255">Blue Tint</Button>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">Usage Example:</h2>
          <pre className="bg-gray-900 p-4 rounded text-gray-300">
{`import Button from '../imports/GlassButton';

<Button size="medium" theme="light">Click Me</Button>
<Button size="large" theme="dark" color="255,0,0">Red Button</Button>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GlassButtonPreview;