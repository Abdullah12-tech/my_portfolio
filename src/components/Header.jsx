import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    // Navbar entrance animation
    gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Link hover animation
    gsap.utils.toArray(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -2, color: darkMode ? "#10b981" : "#059669", duration: 0.2 });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { y: 0, color: darkMode ? "#e5e7eb" : "#1f2937", duration: 0.2 });
      });
    });
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full z-50 backdrop-blur-md ${darkMode ? "dark bg-slate-900/90" : "bg-white/90"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <span className={`${darkMode ? "text-teal-400" : "text-slate-800"}`}>SHERIFF </span>
          <span className="text-slate-500 dark:text-slate-300">ABDULLAHI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className={`nav-link font-medium ${darkMode ? "dark:text-slate-200" : "text-slate-800"}`}>Home</a>
          <a href="/projects" className={`nav-link font-medium ${darkMode ? "dark:text-slate-200" : "text-slate-800"}`}>Projects</a>
          <a href="/about" className={`nav-link font-medium ${darkMode ? "dark:text-slate-200" : "text-slate-800"}`}>About</a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a href="#contact"><button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all">
            Contact
          </button></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="/" className="nav-link font-medium dark:text-slate-200 text-slate-800">Home</a>
            <a href="/projects" className="nav-link font-medium dark:text-slate-200 text-slate-800">Projects</a>
            <a href="/about" className="nav-link font-medium dark:text-slate-200 text-slate-800">About</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 w-fit"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;