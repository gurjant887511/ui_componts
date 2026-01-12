import React from 'react';

const FileUploadCard = () => {
  return (
    <div className="max-w-md p-8 border-2 border-dashed border-white/30 rounded-lg text-center">
      <div className="text-5xl mb-4">📁</div>
      <h3 className="text-xl font-bold text-white mb-2">Upload Files</h3>
      <p className="text-gray-300 text-sm mb-4">Drag and drop your files here or click to browse</p>
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">Browse Files</button>
    </div>
  );
};

export default FileUploadCard;
