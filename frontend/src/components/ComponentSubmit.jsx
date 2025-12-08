import React, { useState } from 'react';

const ComponentSubmit = () => {
  const [componentData, setComponentData] = useState({
    name: '',
    description: '',
    code: '',
    category: 'UI', // default category
    author: '',
    tags: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(componentData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Component saved successfully!');
        setComponentData({
          name: '',
          description: '',
          code: '',
          category: 'UI',
          author: '',
          tags: ''
        });
      }
    } catch (error) {
      console.error('Error saving component:', error);
      alert('Error saving component');
    }
  };

  const handleChange = (e) => {
    setComponentData({
      ...componentData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit New Component</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Component Name</label>
          <input
            type="text"
            name="name"
            value={componentData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={componentData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Component Code</label>
          <textarea
            name="code"
            value={componentData.code}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg font-mono bg-gray-50 focus:ring-2 focus:ring-blue-500"
            rows="10"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            name="category"
            value={componentData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="UI">UI Component</option>
            <option value="Layout">Layout</option>
            <option value="Form">Form</option>
            <option value="Navigation">Navigation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Author Name</label>
          <input
            type="text"
            name="author"
            value={componentData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={componentData.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. button, form, input"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Submit Component
        </button>
      </form>
    </div>
  );
};

export default ComponentSubmit;