import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(0, 0, 0, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center h-16 space-x-4">
          <img
            src="/logo.png" // logo image path
            alt="Logo"
            className="h-20 sm:h-20 md:h-20 w-auto"
          />

          <a href="#home" className="font-mono text-xl font-bold text-white">
            marica<span className="text-purple-500">.tech</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="w-7 h-7 relative cursor-pointer z-50 md:hidden text-white ml-auto"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a
              href="#home"
              className="text-black hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(249, 190, 221, 0.9)] backdrop-blur-lg absolute top-16 left-0 w-full px-4 py-6 space-y-4 z-30">
          <a
            href="#home"
            className="block text-black text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-black text-lg"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block text-black text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-black text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
