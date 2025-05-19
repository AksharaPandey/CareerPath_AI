
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Home, BookOpen, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NavigationBar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-career-blue" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-career-gradient">
              CareerPath AI
            </span>
          </Link>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Home size={18} />
                  Home
                </Button>
              </Link>
              <Link to="/assessment">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} />
                  Assessment
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="ghost" className="flex items-center gap-2">
                  <BookOpen size={18} />
                  Explore Careers
                </Button>
              </Link>
              <Link to="/assessment">
                <Button className="bg-career-gradient hover:opacity-90 transition-opacity">
                  Start Assessment
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link to="/" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start text-lg py-3">
                <Home className="mr-3" size={20} /> Home
              </Button>
            </Link>
            <Link to="/assessment" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start text-lg py-3">
                <User className="mr-3" size={20} /> Assessment
              </Button>
            </Link>
            <Link to="/explore" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start text-lg py-3">
                <BookOpen className="mr-3" size={20} /> Explore Careers
              </Button>
            </Link>
            <div className="pt-4">
              <Link to="/assessment" onClick={toggleMenu}>
                <Button className="w-full bg-career-gradient hover:opacity-90">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
