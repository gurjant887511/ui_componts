import React from 'react';

// Local Button used by Card (keeps Card self-contained)
export const Button = ({ text = 'Click Me', color = 'blue', size = 'medium', onClick }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';
  const sizeClasses = size === 'large' ? 'px-6 py-3 text-lg' : size === 'small' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-base';
  const colorClasses = color === 'red' ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white' : color === 'green' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500 text-white' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white';

  const handleClick = () => {
    if (onClick) onClick();
    alert(`${text} clicked!`);
  };

  return (
    <button className={`${baseClasses} ${sizeClasses} ${colorClasses}`} onClick={handleClick}>
      {text}
    </button>
  );
};

// Card component (uses Tailwind classes — will render even without Tailwind, but styles may vary)
const Card = ({ 
  title = 'Default Title', 
  content = 'This is a sample card content. You can customize it with props!', 
  imageUrl = '', 
  footer = null,
  variant = 'default' // 'default' or 'elevated' for more shadow
}) => {
  const baseClasses = 'bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1';
  const variantClasses = variant === 'elevated' ? 'shadow-2xl border border-gray-200' : '';
  
  const imageStyle = imageUrl ? (
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-48 object-cover" 
    />
  ) : null;

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {imageStyle}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{content}</p>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;