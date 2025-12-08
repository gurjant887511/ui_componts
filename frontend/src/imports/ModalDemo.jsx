import React, { useState } from 'react';

// Button Component
const Button = ({ text = 'Click Me', color = 'blue', size = 'medium', onClick }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';
  const sizeClasses = size === 'large' ? 'px-6 py-3 text-lg' : size === 'small' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-base';
  const colorClasses = color === 'red' ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white' : color === 'green' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500 text-white' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white';

  const handleClick = () => {
    if (onClick) onClick();
    // avoid alert in previews; log instead
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
const Card = ({ title = 'Default Title', content = 'Sample content.' }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

// Accordion (small demo)
const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="space-y-2">
      {items.slice(0, 1).map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between p-4 cursor-pointer bg-gray-50" onClick={() => toggleItem(index)}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className={`transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
          </div>
          <div className={`${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
            <div className="p-4 border-t bg-blue-50"><p className="text-gray-700">{item.content}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Modal Demo (export default so ImportsComponents can lazy-load it)
export default function ModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const accordionItems = [{ title: 'Quick Tip', content: 'Modal open karne ke liye button click karo!' }];

  const modalContent = (
    <div>
      <p className="text-gray-700 mb-4">Yeh ek stylish modal hai! Fade-in animation aur backdrop blur ke saath.</p>
      <Card title="Nested Card" content="Modal ke andar Card use kiya – library power!" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">React Components Library Demo</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Modal component demo — Button se open karo.</p>

        <div className="text-center mb-8">
          <Button text="Open Modal" color="teal" size="large" onClick={openModal} />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-900">Welcome to Modal!</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 p-1 rounded-full">
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">{modalContent}</div>
              <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <Button text="Close" color="gray" size="small" onClick={closeModal} />
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card title="Quick Card" content="Previous card here." />
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}