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
    <section id="home" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* បែងចែកជា ២ ជួរស្មើគ្នា */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* ផ្នែកអត្ថបទ - បន្ថយទំហំអក្សរឱ្យសមសួន */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                {cur.name}
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-xl px-8 font-bold shadow-lg shadow-primary/20">
                {cur.btn1} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2 shadow-sm">
                {cur.btn2} <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* ផ្នែក Slider - កំណត់ទំហំឱ្យសមល្មម */}
          <div className="flex-1 w-full max-w-[600px]">
            <div className="relative group">
              {/* ពន្លឺ Glow ពីក្រោយរូបភាព */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="animate-slider relative border border-white/10 shadow-2xl overflow-hidden" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
