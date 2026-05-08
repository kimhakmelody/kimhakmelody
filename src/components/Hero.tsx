import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();
  
  const content = {
    km: { name: 'ហ៊េង គឹមហាក់', title: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ', btn1: 'ស្វែងយល់', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', title: 'Web Developer', btn1: 'Explore', btn2: 'Download CV' }
  }[language] || { name: 'Heng Kim Hak', title: 'Web Developer' };

  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-16 relative bg-background">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* ផ្នែកអត្ថបទ - ខ្លីល្មមស្អាត */}
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="text-gradient hover:scale-105 transition-transform duration-500 inline-block">{cur.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 italic border-l-4 border-primary pl-4">{cur.title}</h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-xl px-8 font-bold" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {cur.btn1} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a href="/cv.pdf" download="Heng_Kim_Hak_CV.pdf">
                <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2 hover:bg-secondary">
                  {cur.btn2} <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* ផ្នែក Slider - ខ្នាតស្អាត */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="animate-slider w-full rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                 {/* Image Slider inside here */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
