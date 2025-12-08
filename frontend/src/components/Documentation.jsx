import React from 'react';
import { Card } from './UILibrary.jsx';

const Documentation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card title="Required Dependencies" className="prose dark:prose-invert">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Core Dependencies</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              {`npm install react react-dom tailwindcss`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Development Dependencies</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              {`npm install -D postcss autoprefixer`}
            </pre>
          </div>
        </div>
      </Card>

      <Card title="Manual Installation Guide">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Install TailwindCSS</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`npx tailwindcss init -p

// This will create tailwind.config.js and postcss.config.js`}
            </pre>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">2. Configure Tailwind</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            </pre>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">3. Add Tailwind to your CSS</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </pre>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">4. Import Components</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`import { 
  Button, 
  Card, 
  Input, 
  Modal, 
  Badge, 
  Navbar, 
  Toggle, 
  Avatar 
} from './components/UILibrary';`}
            </pre>
          </section>
        </div>
      </Card>

      <Card title="Component Usage Examples">
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">Button Component</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`<Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
  Click Me
</Button>

// Variants: primary, ghost, danger
// Sizes: sm, md, lg`}
            </pre>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Card Component</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
{`<Card 
  title="Card Title" 
  subtitle="Optional subtitle"
>
  Card content goes here
</Card>`}
            </pre>
          </section>

          {/* Add more component examples as needed */}
        </div>
      </Card>

      <Card title="InfoCard Component Documentation">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Installation Requirements</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`npm install @heroicons/react`}
          </pre>

          <h3 className="text-lg font-semibold">Usage Example</h3>
          <pre className="bg-gray-100 p-4 rounded-lg">
{`import { InfoCard } from './components/UILibrary';
import { UserIcon } from '@heroicons/react/24/outline';

<InfoCard
  title="Total Users"
  description="1,234 active users this week"
  icon={<UserIcon className="w-6 h-6" />}
  footer="Updated just now"
/>`}
          </pre>

          <h3 className="text-lg font-semibold">Props</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><code>title</code> (string) - The card's header text</li>
            <li><code>description</code> (string) - Descriptive text below the title</li>
            <li><code>icon</code> (ReactNode) - Optional icon component</li>
            <li><code>footer</code> (ReactNode) - Optional footer content</li>
            <li><code>className</code> (string) - Additional CSS classes</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Documentation;