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
    <section className="min-h-[85vh] flex items-center pt-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gradient leading-none">
            {cur.name}
          </h1>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-xl px-8 font-bold">{cur.btn1} <ArrowRight className="ml-2 w-4 h-4" /></Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2">{cur.btn2} <Download className="ml-2 w-4 h-4" /></Button>
          </div>
        </div>
        {/* បង្ហាញ Slider Animation នៅផ្នែកខាងស្តាំ */}
        <div className="relative group h-[300px] md:h-[450px]">
          <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-lg"></div>
          <div className="animate-slider w-full h-full rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
