
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";
import Div1Logo from './Div1Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
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
                to="/project-charter" 
                className="text-base font-medium hover:text-orange-500 transition-colors text-white"
                style={{ color: isActive('/project-charter') ? '#E98B2A' : '#FFFFFF' }}
              >
                What is a Project Charter?
              </Link>
              
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-base font-medium hover:text-orange-500 transition-colors text-white"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  onBlur={() => setTimeout(() => setIsSolutionsOpen(false), 150)}
                >
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/engage"
                      className="block px-4 py-2 text-base font-medium hover:bg-gray-50 transition-colors"
                      style={{ color: '#1A2B49' }}
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      Engage
                    </Link>
                  </div>
                )}
              </div>
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
                to="/project-charter" 
                className="text-base font-medium hover:text-orange-500 transition-colors px-2 py-1 text-white"
                style={{ color: isActive('/project-charter') ? '#E98B2A' : '#FFFFFF' }}
                onClick={() => setIsMenuOpen(false)}
              >
                What is a Project Charter?
              </Link>
              <div className="px-2 py-1">
                <div className="text-base font-medium text-white mb-2">Solutions</div>
                <Link
                  to="/engage"
                  className="block pl-4 py-1 text-base font-medium hover:text-orange-500 transition-colors text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Engage
                </Link>
              </div>
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
