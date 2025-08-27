import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img src="assets/logo.png" alt="Level Up Logo" className="h-10" />
            <h1 className="text-xl font-bold">Level Up</h1>
          </a>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}>
            <a href="index.html" className="block py-2 md:py-0 hover:text-blue-400">Home</a>
            <a href="store.html" className="block py-2 md:py-0 hover:text-blue-400">Store</a>
            <a href="community.html" className="block py-2 md:py-0 hover:text-blue-400">Community</a>
            <a href="#" className="block py-2 md:py-0 bg-blue-600 hover:bg-blue-700 px-4 rounded-md transition-colors">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;