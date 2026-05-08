import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();
  const cur = {
    km: { name: 'ហ៊េង គឹមហាក់', btn1: 'ស្វែងយល់', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', btn1: 'Explore', btn2: 'Download CV' }
  }[language] || { name: 'Heng Kim Hak' };

  return (
    <section id="home" className="py-10 md:py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* ផ្នែកអត្ថបទ */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                {cur.name}
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-xl px-8 font-bold shadow-lg shadow-primary/20">
                {cur.btn1} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2">
                {cur.btn2} <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* ផ្នែក Slider (រូបភាព ៩ សន្លឹក) */}
          <div className="w-full lg:w-1/2">
             <div className="animate-slider" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
