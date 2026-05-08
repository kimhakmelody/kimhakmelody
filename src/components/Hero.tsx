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
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ផ្នែកអត្ថបទ (ខាងឆ្វេង) */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold animate-pulse">
              <MousePointer2 className="w-4 h-4" />
              <span>Available for Work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-gradient">
              {cur.name}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-foreground/90">
              {cur.title}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
              "{cur.tag}"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {cur.btn1} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              {/* Security added for download link */}
              <a href="/cv.pdf" download="Heng-Kim-Hak-CV.pdf" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl border-2 hover:bg-secondary w-full sm:w-auto transition-all">
                  {cur.btn2} <Download className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* ផ្នែករូបភាព Slider (ខាងស្តាំ - យកតាម Video) */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur-xl opacity-30"></div>
            {/* នេះគឺជាកន្លែងដែល Class animate-hero-slider ធ្វើការ */}
            <div className="animate-hero-slider w-full h-[600px] rounded-[2rem] border-4 border-card/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                 <h3 className="text-2xl font-bold text-white shadow-sm">My Creative Workspace</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
