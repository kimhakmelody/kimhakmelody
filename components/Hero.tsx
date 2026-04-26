
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    km: {
      name: 'គឹម ហាក់',
      title: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីគេហទំព័រ',
      tagline: 'បង្កើតអនាគតជាមួយកូដ និងបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត',
      learnMore: 'ស្វែងយល់បន្ថែម',
      downloadCV: 'ទាញយកប្រវត្តិរូប'
    },
    en: {
      name: 'Kim Hak',
      title: 'Web Developer & Programmer',
      tagline: 'Building the future with code and creating innovative solutions',
      learnMore: 'Learn More',
      downloadCV: 'Download Resume'
    }
  };

  const currentContent = content[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div ref={heroRef} className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient break-words">
            {currentContent.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-foreground/90 break-words">
            {currentContent.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed break-words">
            {currentContent.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover-lift"
            >
              {currentContent.learnMore}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
            >
              {currentContent.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
