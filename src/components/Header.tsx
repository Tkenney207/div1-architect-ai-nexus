
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
    <header className="w-full border-b border-gray-200" style={{ backgroundColor: '#F7F3ED' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Div1Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/engage" 
              className="text-base font-medium hover:text-orange-600 transition-colors"
              style={{ color: isActive('/engage') ? '#E98B2A' : '#1A2B49' }}
            >
              Engage
            </Link>
            
            <Link 
              to="/projects" 
              className="text-base font-medium hover:text-orange-600 transition-colors"
              style={{ color: isActive('/projects') ? '#E98B2A' : '#1A2B49' }}
            >
              Projects
            </Link>
            
            <Link 
              to="/support" 
              className="text-base font-medium hover:text-orange-600 transition-colors"
              style={{ color: isActive('/support') ? '#E98B2A' : '#1A2B49' }}
            >
              Support
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button 
                variant="ghost" 
                className="text-base font-medium hover:text-orange-600 transition-colors"
                style={{ color: '#1A2B49' }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className="text-base font-medium px-6 py-2 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }}
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" style={{ color: '#1A2B49' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: '#1A2B49' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/engage" 
                className="text-base font-medium hover:text-orange-600 transition-colors px-2 py-1"
                style={{ color: isActive('/engage') ? '#E98B2A' : '#1A2B49' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Engage
              </Link>
              <Link 
                to="/projects" 
                className="text-base font-medium hover:text-orange-600 transition-colors px-2 py-1"
                style={{ color: isActive('/projects') ? '#E98B2A' : '#1A2B49' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/support" 
                className="text-base font-medium hover:text-orange-600 transition-colors px-2 py-1"
                style={{ color: isActive('/support') ? '#E98B2A' : '#1A2B49' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-base font-medium hover:text-orange-600 transition-colors"
                    style={{ color: '#1A2B49' }}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full text-base font-medium py-2 rounded-lg transition-all hover:opacity-90"
                    style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }}
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
