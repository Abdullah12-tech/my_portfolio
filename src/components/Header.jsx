import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky w-full z-50 backdrop-blur-md dark bg-slate-900/90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <span className="text-teal-400">SHERIFF </span>
          <span className="text-slate-300">ABDULLAHI</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link font-medium text-slate-200">Home</a>
          <a href="/about" className="nav-link font-medium text-slate-200">About</a>
          <a href="/projects" className="nav-link font-medium text-slate-200">Portfolio</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="/" className="nav-link font-medium dark:text-slate-200 text-slate-800">Home</a>
            <a href="/about" className="nav-link font-medium dark:text-slate-200 text-slate-800">About</a>
            <a href="/projects" className="nav-link font-medium dark:text-slate-200 text-slate-800">Portfolio</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
