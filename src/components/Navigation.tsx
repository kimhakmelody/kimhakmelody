import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'km', label: 'ភាសាខ្មែរ', flag: '🇰🇭' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  const navLinks = [
    { href: '#home', label: language === 'km' ? 'ទំព័រដើម' : 'Home' },
    { href: '#about', label: language === 'km' ? 'អំពីខ្ញុំ' : 'About' },
    { href: '#skills', label: language === 'km' ? 'ជំនាញ' : 'Skills' },
    { href: '#projects', label: language === 'km' ? 'គម្រោង' : 'Projects' },
    { href: '#contact', label: language === 'km' ? 'ទាក់ទង' : 'Contact' },
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
      isScrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          Kim Hak
          <img src="https://flagcdn.com/kh.svg" alt="KH" className="w-7 h-auto rounded-sm" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center gap-2 border-l pl-6 ml-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setLanguage(lang.code as any)}
                    className={`flex items-center justify-between ${language === lang.code ? "bg-accent font-bold" : ""}`}
                  >
                    <span>{lang.flag} {lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-accent rounded-full">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 w-full border-t border-border animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-2 text-lg font-medium hover:text-primary transition-colors border-b border-border/50"
              >
                {link.label}
              </button>
            ))}
            <div className="flex justify-between items-center px-4 pt-2">
              <div className="flex gap-4">
                 {/* Mobile Language - ប្រើ Icon ឬ List សាមញ្ញ */}
                 <span className="text-sm font-bold text-muted-foreground uppercase">{language}</span>
              </div>
              <Button variant="outline" size="sm" onClick={toggleTheme} className="flex items-center gap-2">
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === 'light' ? 'Dark' : 'Light'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
