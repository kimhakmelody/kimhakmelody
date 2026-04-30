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
  const { theme, setTheme, language, setLanguage } = useTheme();

  const languages = [
    { code: 'km', label: 'ភាសាខ្មែរ', flag: 'https://flagcdn.com/kh.svg' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'zh', label: '中文', flag: 'https://flagcdn.com/cn.svg' },
    { code: 'ko', label: '한국어', flag: 'https://flagcdn.com/kr.svg' },
    { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/jp.svg' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'glass-effect shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gradient flex items-center gap-2">
          Kim Hak <img src="https://flagcdn.com/kh.svg" className="w-6 h-auto" alt="KH" />
        </div>

        <div className="flex items-center gap-2">
          {/* ប្តូរភាសាជាមួយរូបទង់ជាតិច្បាស់ៗ */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3">
                  <img src={lang.flag} className="w-5 h-auto rounded-sm" alt={lang.code} />
                  <span>{lang.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ប៊ូតុងរើស Mode: Light, Dark, Auto */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'light' && <Sun className="h-5 w-5 text-orange-500" />}
                {theme === 'dark' && <Moon className="h-5 w-5 text-blue-400" />}
                {theme === 'auto' && <Monitor className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center gap-2">
                <Sun className="h-4 w-4" /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center gap-2">
                <Moon className="h-4 w-4" /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('auto')} className="flex items-center gap-2">
                <Monitor className="h-4 w-4" /> Auto (Day/Night)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
