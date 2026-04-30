import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';
type Language = 'km' | 'en' | 'zh' | 'ko' | 'ja';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('auto');
  const [language, setLanguage] = useState<Language>('km');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLang = localStorage.getItem('language') as Language;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const root = window.document.documentElement;
      let targetTheme = theme;

      if (theme === 'auto') {
        const hour = new Date().getHours();
        // បើម៉ោងចន្លោះពី 6 ព្រឹក ដល់ 6 ល្ងាច ឱ្យចេញ Light Mode
        targetTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
      }

      root.classList.remove('light', 'dark');
      root.classList.add(targetTheme);
      // បន្ថែមពណ៌ Background ឱ្យត្រូវតាម Mode ការពារវាសស្លែត
      root.style.colorScheme = targetTheme;
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // ប្រសិនបើជ្រើសរើស Auto ឱ្យវាឆែកម៉ោងរៀងរាល់ ១ នាទីម្តង
    const interval = setInterval(() => {
      if (theme === 'auto') applyTheme();
    }, 60000);

    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
