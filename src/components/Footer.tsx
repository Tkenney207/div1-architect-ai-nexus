
import { Link } from "react-router-dom";
import { MessageCircle, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-xl mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Div1. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/support" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Support</span>
            </Link>
            <Link 
              to="/security" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors font-medium"
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
