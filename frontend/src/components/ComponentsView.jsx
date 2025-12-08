import React from 'react';
import ComponentLivePreview from './LivePreview';

export default function ComponentsView({ components /*, previously local fetch/ state removed */ }) {
  // If you had local loading/fetch logic here, comment it out:
  /*
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Commented out to avoid duplicate fetches (App.jsx already fetches)
    // fetch('http://localhost:5000/api/components')
    //   .then(res => res.json())
    //   .then(data => { setComponents(data); setLoading(false); })
    //   .catch(() => setLoading(false));
  }, []);
  */

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">UI Components</h1>

      <div className="grid gap-8">
        {components && components.length > 0 ? (
          components.map((component) => (
            <div key={component._id || component.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{component.name}</h2>
                <div className="mb-4 prose dark:prose-invert">
                  <p>{component.description}</p>
                </div>
                <ComponentLivePreview code={component.code} />
              </div>
            </div>
          ))
        ) : (
          <div>No components available</div>
        )}
      </div>
    </div>
  );
}