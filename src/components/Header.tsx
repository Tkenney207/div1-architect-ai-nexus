
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Users, ChevronDown, Home, UserPlus, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-gray-300 hover:text-white transition-colors font-medium flex items-center space-x-1">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/projects" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                        Projects
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : null}
            <Link to="/engage" className="text-gray-300 hover:text-white transition-colors font-medium">
              Engage
            </Link>
            <Link to="/division1" className="text-gray-300 hover:text-white transition-colors font-medium">
              Division 1
            </Link>
            <Link to="/master1" className="text-gray-300 hover:text-white transition-colors font-medium">
              Master1
            </Link>
            <div className="flex items-center space-x-3">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 border-0 font-semibold">
                      <User className="h-4 w-4 mr-2" />
                      {user.email}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem onClick={handleSignOut} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to="/signup">
                    <Button size="sm" className="rounded-full px-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 border-0 font-semibold">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button size="sm" className="rounded-full px-6 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 border-0 font-semibold">
                      <Users className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
