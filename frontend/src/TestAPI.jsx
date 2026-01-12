import { useEffect, useState } from 'react';

export default function TestAPI() {
  const [status, setStatus] = useState('Loading...');
  const [data, setData] = useState(null);

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('Testing API...');
        const res = await fetch('http://localhost:5000/api/components');
        console.log('Response status:', res.status);
        console.log('Response ok:', res.ok);
        
        if (!res.ok) {
          setStatus(`Error: ${res.status} ${res.statusText}`);
          return;
        }
        
        const json = await res.json();
        console.log('Data received:', json);
        setData(json);
        setStatus(`Success! Got ${json.length} components`);
      } catch (err) {
        console.error('Fetch error:', err);
        setStatus(`Error: ${err.message}`);
      }
    };
    
    testAPI();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>API Test</h1>
      <p>Status: <strong>{status}</strong></p>
      {data && (
        <div>
          <h2>Components received:</h2>
          <pre>{JSON.stringify(data.slice(0, 2), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
