import { useState, useEffect } from 'react';
// ត្រូវប្រាកដថាអក្សរផ្ដើមជាអក្សរធំ ឱ្យដូចឈ្មោះ File ពិតប្រាកដក្នុង Folder components
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
// បើអ្នកបានដាក់ ThemeProvider ក្នុង main.tsx ហើយ មិនបាច់ដាក់នៅទីនេះទៀតទេ

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
