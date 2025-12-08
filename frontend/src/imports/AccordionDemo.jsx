import React, { useState } from 'react';

// Button Component
const Button = ({ text = 'Click Me', color = 'blue', size = 'medium', onClick }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';
  const sizeClasses = size === 'large' ? 'px-6 py-3 text-lg' : size === 'small' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-base';
  const colorClasses = color === 'red' ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white' : color === 'green' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500 text-white' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white';

  const handleClick = () => {
    if (onClick) onClick();
    // keep side-effect minimal for previews
    // alert(`${text} clicked!`);
    // console log is safer in preview
    // eslint-disable-next-line no-console
    console.log(`${text} clicked!`);
  };

  return (
    <button className={`${baseClasses} ${sizeClasses} ${colorClasses}`} onClick={handleClick}>
      {text}
    </button>
  );
};

// Card Component
const Card = ({ title = 'Default Title', content = 'Sample content.', imageUrl = '' }) => {
  const imageStyle = imageUrl ? <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-xl" /> : null;
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {imageStyle}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

// Accordion Component
const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-4 pt-0 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Demo App wrapper (exported as default so ImportsComponents can lazy-load & render it)
export default function AccordionDemo() {
  const accordionItems = [
    { title: 'What is React?', content: 'React ek JavaScript library hai jo user interfaces banane ke liye use hoti hai. Yeh component-based architecture par based hai.' },
    { title: 'Tailwind CSS kya hai?', content: 'Tailwind ek utility-first CSS framework hai jo classes se styling allow karta hai, without writing custom CSS.' },
    { title: 'Kaise shuru karo?', content: 'Npm install karo, config setup karo, aur classes use karo! Yeh fast aur customizable hai.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">React Components Library Demo</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Naya Accordion component add kiya! Click kar ke expand karo – smooth animation aur gradient accents ke saath.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Interactive Accordion</h2>
          <Accordion items={accordionItems} />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card title="Quick Card" content="Previous card example." imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
          <div className="space-y-4">
            <Button text="Quick Button" color="green" size="small" />
            <Button text="Another Button" color="red" size="large" />
          </div>
        </div>

        <hr className="my-12 border-gray-300" />
        <div className="text-center text-gray-600">
          <p className="text-lg mb-2"><strong>Library Usage Tip:</strong></p>
          <p>Accordion ko alag file mein export: <code className="bg-gray-200 px-2 py-1 rounded text-sm">export default Accordion;</code></p>
        </div>
      </div>
    </div>
  );
}