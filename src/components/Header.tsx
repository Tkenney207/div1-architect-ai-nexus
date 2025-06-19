
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

  // Extract user's name from metadata or use email as fallback
  const getUserDisplayName = () => {
    if (!user) return '';
    
    const firstName = user.user_metadata?.first_name || '';
    const lastName = user.user_metadata?.last_name || '';
    
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else if (firstName) {
      return firstName;
    } else if (lastName) {
      return lastName;
    }
    
    // Fallback to email if no name is available
    return user.email;
  };

  return (
    <header style={{ backgroundColor: '#0F1B2E' }} className="border-b-2" style={{ backgroundColor: '#0F1B2E', borderBottomColor: '#162239' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <Div1Logo size="xl" className="drop-shadow-lg" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/engage" style={{ color: '#F7F3ED' }} className="hover:text-white transition-colors font-medium">
              Engage
            </Link>
            <Link to="/division1" style={{ color: '#F7F3ED' }} className="hover:text-white transition-colors font-medium">
              Division 1
            </Link>
            <Link to="/master1" style={{ color: '#F7F3ED' }} className="hover:text-white transition-colors font-medium">
              Master1
            </Link>
            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" style={{ backgroundColor: '#F7F3ED', color: '#1A2B49' }} className="rounded-lg px-4 hover:opacity-90 border-0 font-medium">
                        <User className="h-4 w-4 mr-2" />
                        {getUserDisplayName()}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent style={{ backgroundColor: '#1A2B49' }} className="border-white border-opacity-20">
                      <DropdownMenuItem onClick={handleSignOut} style={{ color: '#F7F3ED' }} className="hover:text-white hover:bg-white hover:bg-opacity-10 transition-colors cursor-pointer">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link to="/dashboard">
                    <Button size="sm" style={{ backgroundColor: '#E98B2A', color: '#1A2B49' }} className="rounded-lg px-4 hover:opacity-90 border-0 font-medium">
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <Button size="sm" style={{ backgroundColor: '#E98B2A', color: '#1A2B49' }} className="rounded-lg px-4 hover:opacity-90 border-0 font-medium">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button size="sm" style={{ backgroundColor: '#F7F3ED', color: '#1A2B49' }} className="rounded-lg px-4 hover:opacity-90 border-0 font-medium">
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
