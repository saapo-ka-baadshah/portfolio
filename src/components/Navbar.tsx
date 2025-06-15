import React, {useState} from 'react';
import STATIC_STRINGS from '../statics/strings.statics';
import { Menu, X } from 'lucide-react';
import COLOR_PALETTE from '../statics/color.palette';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: string[] = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold" style={{ color: COLOR_PALETTE.Primary }}>
              {STATIC_STRINGS.Title}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item: string) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              {navItems.map((item: string) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
  )
}
