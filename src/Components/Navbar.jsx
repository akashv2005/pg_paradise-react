import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-400">
            PG Paradise
          </div>
          {/* Links */}
          <a href="/" className="text-green-300 hover:text-green-500 transition duration-200">
            Home
          </a>
          <a href="/products" className="text-green-300 hover:text-green-500 transition duration-200">
           Explore Properties
          </a>
        </div>

        {/* Right Side: Login Button */}
        <div>
        <a href="/login">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200">
            Login
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
