
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Globe, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage, isAutoMode, setAutoMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      href: '#home', 
      label: language === 'km' ? 'ទំព័រដើម' : 'Home'
    },
    { 
      href: '#about', 
      label: language === 'km' ? 'អំពីខ្ញុំ' : 'About'
    },
    { 
      href: '#skills', 
      label: language === 'km' ? 'ជំនាញ' : 'Skills'
    },
    { 
      href: '#projects', 
      label: language === 'km' ? 'គម្រោង' : 'Projects'
    },
    { 
      href: '#contact', 
      label: language === 'km' ? 'ទាក់ទង' : 'Contact'
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            {language === 'km' ? 'គីម ហាក់' : 'Kim Hak'}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            
            {/* Auto Mode Indicator */}
            {isAutoMode && (
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{language === 'km' ? 'ស្វ័យប្រវត្តិ' : 'Auto'}</span>
              </div>
            )}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-accent"
              title={language === 'km' ? 'ប្តូរភាសា' : 'Change Language'}
            >
              <Globe className="h-5 w-5" />
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
              title={language === 'km' ? 'ប្តូររូបរាង' : 'Toggle Theme'}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-accent"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-accent"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-effect rounded-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            
            {/* Auto Mode Toggle for Mobile */}
            <div className="px-4 py-2 border-t border-border mt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAutoMode}
                  onChange={(e) => setAutoMode(e.target.checked)}
                  className="form-checkbox text-primary"
                />
                <span className="text-sm text-muted-foreground">
                  {language === 'km' ? 'ប្តូររូបរាងស្វ័យប្រវត្តិ' : 'Auto Theme'}
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
