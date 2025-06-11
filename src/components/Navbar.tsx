import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bus, Menu, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // TODO: Replace with actual auth state
  const isLoggedIn = false;
  const userType = 'user'; // or 'merchant'

  const handleLogout = () => {
    // TODO: Implement logout
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 88; // Height of navbar + padding (64px + 24px)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'features', 'testimonials', 'contact'];
      const navbarHeight = 88;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight + 50) { // 50px offset for better UX
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to get button classes
  const getNavButtonClasses = (sectionId: string, isMobile: boolean = false) => {
    const baseClasses = isMobile 
      ? "block w-full text-left px-3 py-2 transition-all duration-200 relative"
      : "px-3 py-2 transition-all duration-200 relative";
    
    const isActive = activeSection === sectionId;
    
    if (isActive) {
      return isMobile
        ? `${baseClasses} text-blue-600 font-semibold border-l-4 border-blue-600`
        : `${baseClasses} text-blue-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600`;
    }
    
    return isMobile
      ? `${baseClasses} text-gray-700 hover:text-blue-600 hover:bg-gray-50`
      : `${baseClasses} text-gray-700 hover:text-blue-600`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Bus className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TourWheels
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className={getNavButtonClasses('home')}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className={getNavButtonClasses('services')}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className={getNavButtonClasses('features')}
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className={getNavButtonClasses('testimonials')}
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className={getNavButtonClasses('contact')}
                >
                  Contact
                </button>
                
                {/* Separator line for auth buttons */}
                <div className="h-6 w-px bg-gray-300 mx-2"></div>
                
                {isLoggedIn ? (
                  <>
                    <Link to={`/${userType}/dashboard`} className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-all duration-200">
                      Dashboard
                    </Link>
                    <Link to={`/${userType}/bookings`} className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-all duration-200">
                      Bookings
                    </Link>
                    <div className="flex items-center space-x-2">
                      <Link to="/profile" className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-200">
                        <User className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-200"
                      >
                        <LogOut className="h-5 w-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/register" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-all duration-200">
                      Register
                    </Link>
                    <Link to="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Login
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-200"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button
                    onClick={() => scrollToSection('home')}
                    className={getNavButtonClasses('home', true)}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={getNavButtonClasses('services', true)}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className={getNavButtonClasses('features', true)}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className={getNavButtonClasses('testimonials', true)}
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={getNavButtonClasses('contact', true)}
                  >
                    Contact
                  </button>
                  
                  {/* Separator line */}
                  <div className="h-px bg-gray-200 my-2"></div>
                  
                  {isLoggedIn ? (
                    <>
                      <Link
                        to={`/${userType}/dashboard`}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to={`/${userType}/bookings`}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        Bookings
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg rounded-md"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;