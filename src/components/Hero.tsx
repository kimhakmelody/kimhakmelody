import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();

  const content = {
    km: { name: 'ហ៊េង គឹមហាក់', title: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ & អ្នកសរសេរកម្មវិធី', tag: 'កសាងអនាគតជាមួយកូដ និងបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត', btn1: 'ស្វែងយល់បន្ថែម', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', title: 'Web Developer & Programmer', tag: 'Building the future with code and creating innovative solutions', btn1: 'Explore Projects', btn2: 'Download CV' },
    zh: { name: 'Heng Kim Hak', title: '网页开发人员与程序员', tag: '用代码构建未来，创造创新的解决方案', btn1: '了解更多', btn2: '下载简历' },
    ko: { name: 'Heng Kim Hak', title: '웹 개발자 및 프로그래머', tag: '코드로 미래를 구축하고 혁신적인 솔루션을 창출합니다', btn1: '프로젝트 보기', btn2: '이력서 다운로드' },
    ja: { name: 'Heng Kim Hak', title: 'ウェブ開発者兼プログラマー', tag: 'コードで未来を築き、革新的なソリューションを創造します', btn1: 'もっと詳しく', btn2: '履歴書をダウンロード' }
  };

  const cur = content[language] || content.en;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
      {/* Background Decor - ដូចក្នុង Lovable */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
          <MousePointer2 className="w-4 h-4" />
          <span>Available for New Projects</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
          <span className="text-gradient inline-block hover:scale-105 transition-transform duration-500 cursor-default">
            {cur.name}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground/80 tracking-tight">
          {cur.title}
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed italic opacity-90">
          "{cur.tag}"
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="h-16 px-10 text-lg font-bold rounded-2xl group shadow-2xl shadow-primary/30 transition-all hover:scale-105"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {cur.btn1} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <a href="/cv.pdf" download="Heng-Kim-Hak-CV.pdf" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl border-2 hover:bg-secondary transition-all">
              {cur.btn2} <Download className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
