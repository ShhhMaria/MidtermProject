import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg transition-colors duration-300 ${
        menuOpen ? "bg-[#ffd6e0]" : "bg-[#ffc0cb]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center h-16 space-x-4">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />

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
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-pink-900 hover:text-white transition-colors font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#ffd6e0] backdrop-blur-lg absolute top-16 left-0 w-full px-4 py-6 space-y-4 z-30">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-pink-900 text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
