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
    <section id="home" className="py-10 md:py-20 flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* ផ្នែកអត្ថបទ - មិនឱ្យរីកធំពេក */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
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

          {/* ផ្នែក Slider - កំណត់ទំហំឱ្យសមល្មម (Fix បញ្ហារូបរីកធំ) */}
          <div className="w-full lg:w-1/2 max-w-[550px] mx-auto">
            <div className="relative group p-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-[25px] blur opacity-20 transition duration-1000"></div>
              <div className="animate-slider relative z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
