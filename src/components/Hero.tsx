import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();
  const cur = {
    km: { name: 'ហេង គឹមហាក់', btn1: 'ស្វែងយល់', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', btn1: 'Explore', btn2: 'Download CV' }
  }[language] || { name: 'Heng Kim Hak' };

  return (
    <section id="home" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ផ្នែកអត្ថបទ */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gradient leading-none">
              {cur.name}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-xl px-8 font-bold">
                {cur.btn1} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2">
                {cur.btn2} <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* ផ្នែក Slider ដែលមានរូបភាពទាំង ៩ សន្លឹក */}
          <div className="relative w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-20"></div>
            <div className="animate-slider relative z-10 shadow-2xl shadow-primary/20 border border-white/10">
              {/* Overlay ឱ្យមើលរូបភាពកាន់តែស្អាត */}
              <div className="absolute inset-0 bg-black/5 rounded-[1.5rem]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
