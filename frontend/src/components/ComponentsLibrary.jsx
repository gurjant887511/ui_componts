import React from 'react';

// Button Component
export function Button({ children, variant = 'primary', ...props }) {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Card Component
export function Card({ title, description, image, buttonText, onButtonClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 w-80">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

// Alert Component
export function Alert({ type = 'info', message }) {
  const types = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`${types[type]} border-l-4 p-4 rounded-r`} role="alert">
      <p>{message}</p>
    </div>
  );
}

// Badge Component
export function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`${colors[color]} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
      {children}
    </span>
  );
}

// Input Component
export function Input({ label, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
}