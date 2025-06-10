
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";

const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <Div1Logo size="xl" className="hover:scale-105 transition-transform duration-300 drop-shadow-2xl" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/engage" className="text-gray-300 hover:text-white transition-colors font-medium">
              Engage
            </Link>
            <Link to="/master1" className="text-gray-300 hover:text-white transition-colors font-medium">
              Master1
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
              About
            </Link>
            <Link to="/signin">
              <Button size="sm" className="rounded-full px-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 border-0 font-semibold">
                <Users className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
