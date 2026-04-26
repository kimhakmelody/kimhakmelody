
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SunCalc from 'suncalc';

type Theme = 'light' | 'dark';
type Language = 'km' | 'en';

type ThemeContextType = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  isAutoMode: boolean;
  setAutoMode: (auto: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('km');
  const [isAutoMode, setIsAutoMode] = useState<boolean>(true);

  // Phnom Penh coordinates (default location)
  const DEFAULT_LAT = 11.5564;
  const DEFAULT_LNG = 104.9282;

  const getLocationBasedTheme = async () => {
    try {
      let lat = DEFAULT_LAT;
      let lng = DEFAULT_LNG;

      // Try to get user's location
      if (navigator.geolocation) {
        await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              lat = position.coords.latitude;
              lng = position.coords.longitude;
              resolve(position);
            },
            () => {
              console.log('Using default location: Phnom Penh');
              resolve(null);
            },
            { timeout: 5000 }
          );
        });
      }

      const now = new Date();
      const times = SunCalc.getTimes(now, lat, lng);
      
      // Check if current time is between sunset and sunrise (dark mode)
      const isNightTime = now < times.sunrise || now > times.sunset;
      
      return isNightTime ? 'dark' : 'light';
    } catch (error) {
      console.error('Error getting location-based theme:', error);
      // Fallback to time-based theme (6 PM to 6 AM = dark)
      const hour = new Date().getHours();
      return (hour >= 18 || hour < 6) ? 'dark' : 'light';
    }
  };

  useEffect(() => {
    const initializeTheme = async () => {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedAutoMode = localStorage.getItem('autoMode') === 'true';
      const savedLanguage = localStorage.getItem('language') as Language;

      if (savedLanguage) {
        setLanguage(savedLanguage);
      }

      setIsAutoMode(savedAutoMode);

      if (savedAutoMode) {
        const locationTheme = await getLocationBasedTheme();
        setTheme(locationTheme);
      } else if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const locationTheme = await getLocationBasedTheme();
        setTheme(locationTheme);
      }
    };

    initializeTheme();
  }, []);

  useEffect(() => {
    // Update theme every minute if in auto mode
    const interval = setInterval(async () => {
      if (isAutoMode) {
        const locationTheme = await getLocationBasedTheme();
        setTheme(locationTheme);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [isAutoMode]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', language);
    localStorage.setItem('autoMode', isAutoMode.toString());
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, language, isAutoMode]);

  const toggleTheme = () => {
    setIsAutoMode(false);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'km' ? 'en' : 'km');
  };

  const setAutoMode = (auto: boolean) => {
    setIsAutoMode(auto);
    if (auto) {
      getLocationBasedTheme().then(setTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      language, 
      toggleTheme, 
      toggleLanguage, 
      isAutoMode, 
      setAutoMode 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
