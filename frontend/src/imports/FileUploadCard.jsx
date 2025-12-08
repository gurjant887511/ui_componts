import React, { useState } from 'react';

export default function FileUploadCard() {
  const [fileName, setFileName] = useState('No file selected');

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-8">Upload File</h1>
          
          <div className="space-y-6">
            {/* Drag and Drop Area */}
            <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-blue-400 transition-all cursor-pointer">
              <div className="text-4xl mb-3">📁</div>
              <p className="text-white/80 font-semibold mb-2">Drop your file here</p>
              <p className="text-white/60 text-sm">or click to browse</p>
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute opacity-0 w-0 h-0"
              />
            </div>

            {/* File Info */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-sm text-white/60 mb-1">Selected File</p>
              <p className="font-semibold text-blue-400 truncate">{fileName}</p>
            </div>

            {/* Upload Progress */}
            <div>
              <p className="text-sm text-white/60 mb-2">Upload Progress</p>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              </div>
              <p className="text-xs text-white/60 mt-2">66% uploaded</p>
            </div>

            {/* Upload Button */}
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all">
              Upload File
            </button>

            {/* Info */}
            <p className="text-xs text-white/50 text-center">
              Maximum file size: 10 MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
