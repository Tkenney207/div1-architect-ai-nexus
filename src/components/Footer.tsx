
import { Link } from "react-router-dom";
import { MessageCircle, Shield } from "lucide-react";
import Div1Logo from "./Div1Logo";

const Footer = () => {
  return (
    <footer className="border-t mt-auto" style={{ borderColor: '#F7F3ED', backgroundColor: '#1A2B49' }}>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Platform Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Div1Logo />
              <h3 className="text-lg font-semibold" style={{ color: '#F7F3ED' }}>Platform</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#F7F3ED' }}>
              AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F7F3ED' }}>Solutions</h3>
            <div className="space-y-3">
              <Link 
                to="/engage" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Engage
              </Link>
              <Link 
                to="/division1" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Division1
              </Link>
              <Link 
                to="/master1" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Master1
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F7F3ED' }}>Resources</h3>
            <div className="space-y-3">
              <Link 
                to="/security" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Security
              </Link>
              <Link 
                to="/support" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Support
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#F7F3ED' }}>Company</h3>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Contact
              </Link>
              <Link 
                to="/privacy" 
                className="block text-sm transition-colors hover:opacity-80"
                style={{ color: '#F7F3ED' }}
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: '#F7F3ED' }}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm" style={{ color: '#F7F3ED' }}>
            © 2024 Div1. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/support" 
              className="flex items-center space-x-2 transition-colors font-medium hover:opacity-80"
              style={{ color: '#F7F3ED' }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Support</span>
            </Link>
            <Link 
              to="/security" 
              className="flex items-center space-x-2 transition-colors font-medium hover:opacity-80"
              style={{ color: '#F7F3ED' }}
            >
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
