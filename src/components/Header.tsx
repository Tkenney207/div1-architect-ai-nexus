
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import Div1Logo from './Div1Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full border-b border-gray-200 bg-navy">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Div1Logo size="xl" />
          </Link>

          {/* Desktop Navigation - Moved to right side */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link 
                to="/engage" 
                className="text-base font-medium hover:text-orange-500 transition-colors text-white"
                style={{ color: isActive('/engage') ? '#E98B2A' : '#FFFFFF' }}
              >
                Charter
              </Link>
              
              <Link 
                to="/support" 
                className="text-base font-medium hover:text-orange-500 transition-colors text-white"
                style={{ color: isActive('/support') ? '#E98B2A' : '#FFFFFF' }}
              >
                Support
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button 
                  variant="ghost" 
                  className="text-base font-medium hover:text-orange-500 transition-colors text-white hover:bg-white/10"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="text-base font-medium px-6 py-2 rounded-lg transition-all hover:opacity-90 bg-orange text-white"
                  style={{ backgroundColor: '#E98B2A' }}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/engage" 
                className="text-base font-medium hover:text-orange-500 transition-colors px-2 py-1 text-white"
                style={{ color: isActive('/engage') ? '#E98B2A' : '#FFFFFF' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Charter
              </Link>
              <Link 
                to="/support" 
                className="text-base font-medium hover:text-orange-500 transition-colors px-2 py-1 text-white"
                style={{ color: isActive('/support') ? '#E98B2A' : '#FFFFFF' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-base font-medium hover:text-orange-500 transition-colors text-white hover:bg-white/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full text-base font-medium py-2 rounded-lg transition-all hover:opacity-90 bg-orange text-white"
                    style={{ backgroundColor: '#E98B2A' }}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
