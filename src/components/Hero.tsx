import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();
  const cur = {
    km: { name: 'ហ៊េង គឹមហាក់', title: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ', tag: 'កសាងអនាគតជាមួយកូដ', btn1: 'ស្វែងយល់', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', title: 'Web Developer', tag: 'Building future with code', btn1: 'Explore', btn2: 'Download CV' },
    zh: { name: 'Heng Kim Hak', title: '网页开发人员', tag: '用代码构建未来', btn1: '了解更多', btn2: '下载简历' },
    ko: { name: 'Heng Kim Hak', title: '웹 개발자', tag: '코드로 미래를 구축', btn1: '더 알아보기', btn2: '이력서' },
    ja: { name: 'Heng Kim Hak', title: 'ウェブ開発者', tag: 'コードで未来を築く', btn1: 'もっと詳しく', btn2: '履歴書' }
  }[language] || { name: 'Heng Kim Hak', title: 'Web Developer' };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-10 pb-10 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <MousePointer2 size={14} /> <span>Portfolio 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="text-gradient">{cur.name}</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-foreground/80">{cur.title}</h2>
            <p className="text-lg text-muted-foreground max-w-lg italic">"{cur.tag}"</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-xl px-8 font-bold" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {cur.btn1} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a href="/cv.pdf" download="Heng_Kim_Hak_CV.pdf">
                <Button size="lg" variant="outline" className="rounded-xl px-8 font-bold border-2">
                  {cur.btn2} <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="animate-hero-slider relative rounded-3xl border border-white/10 shadow-2xl">
                 {/* Image Slider Logic in CSS */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
