import Link from "next/link";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Hamburger Menu - Mobile Only */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Logo placeholder */}
        <div className="h-10">
          <img src="/CDS.svg" className="w-full h-full object-contain invert" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Drawer */}
        <MobileDrawer isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
