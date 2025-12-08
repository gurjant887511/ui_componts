import React from 'react';

const HeroSection = () => {
  return (





   


    <section className="min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 overflow-hidden">
      {/* Background elements for style */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/20 to-transparent"></div>
      
      <div className="relative z-10 flex-1 pr-0 md:pr-12 lg:pr-16 max-w-md lg:max-w-lg">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Welcome to Our 
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Amazing</span>
          Website
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Discover the best products and services tailored just for you. Elevate your experience with innovation at every turn.
        </p>
        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -rotate-2 group-hover:rotate-12 transition-transform duration-700"></span>
          <span className="relative z-10 flex items-center space-x-2">
            <span>Get Started</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
      
      <div className="relative z-10 flex-1 hidden md:block">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Hero Image" 
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-500"
          />
          {/* Decorative overlay */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 animate-bounce delay-1000"></div>
        </div>
      </div>
      
      {/* Mobile image fallback */}
      <div className="md:hidden relative z-10 flex-1">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
          alt="Hero Image" 
          className="w-full h-64 object-cover rounded-2xl shadow-xl mx-auto"
        />
      </div>
    </section>

  );
};

export default HeroSection;
