import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Monitor, Menu, X } from 'lucide-react';
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
  const { theme, setTheme, language, setLanguage } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'km', label: 'ភាសាខ្មែរ', flag: 'https://flagcdn.com/kh.svg' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'zh', label: '中文', flag: 'https://flagcdn.com/cn.svg' },
    { code: 'ko', label: '한국어', flag: 'https://flagcdn.com/kr.svg' },
    { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/jp.svg' },
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
<img src="https://flagcdn.com/kh.svg" alt="KH" className="w-7 h-auto rounded-sm" />
          Heng Kim Hak
          
        </div>

        {/* Desktop Menu - ផ្លូវកាត់ */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setLanguage(lang.code as any)}
                    className={`flex items-center gap-2 ${language === lang.code ? "bg-accent" : ""}`}
                  >
                    <img src={lang.flag} className="w-4 h-auto rounded-sm" />
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Selector (Light, Dark, Auto) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {theme === 'light' && <Sun className="h-5 w-5 text-orange-500" />}
                  {theme === 'dark' && <Moon className="h-5 w-5 text-blue-400" />}
                  {theme === 'auto' && <Monitor className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')} className="gap-2">
                  <Sun className="h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-2">
                  <Moon className="h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('auto')} className="gap-2">
                  <Monitor className="h-4 w-4" /> Auto (Day/Night)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
        <div className="md:hidden glass-effect absolute top-full left-0 w-full border-t border-border p-4 space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-2 text-lg font-medium hover:bg-accent rounded-md"
            >
              {link.label}
            </button>
          ))}
          <div className="flex justify-between items-center px-4 pt-4 border-t">
            <span className="text-sm font-bold uppercase">Language: {language}</span>
            <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
               Switch Mode
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
