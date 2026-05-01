import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useTheme();
  const cur = {
    km: { name: 'ហេង គឹមហាក់', title: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ & អ្នកសរសេរកម្មវិធី', tag: 'កសាងអនាគតជាមួយកូដ និងបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត', btn1: 'ស្វែងយល់បន្ថែម', btn2: 'ទាញយក CV' },
    en: { name: 'Heng Kim Hak', title: 'Web Developer & Programmer', tag: 'Building the future with code and creating innovative solutions', btn1: 'Explore More', btn2: 'Download CV' },
    zh: { name: 'Heng Kim Hak', title: '网页开发人员与程序员', tag: '用代码构建未来，创造创新的解决方案', btn1: '了解更多', btn2: '下载简历' },
    ko: { name: 'Heng Kim Hak', title: '웹 개발자 및 프로그래머', tag: '코드로 미래를 구축하고 혁신적인 솔루션을 창출합니다', btn1: '더 알아보기', btn2: '이력서 다운로드' },
    ja: { name: 'Heng Kim Hak', title: 'ウェブ開発者兼プログラマー', tag: 'コードで未来を築き、革新的なソリューションを創造します', btn1: 'もっと詳しく', btn2: '履歴書をダウンロード' }
  }[language] || { name: 'Heng Kim Hak', title: 'Web Developer', tag: '', btn1: 'Explore', btn2: 'CV' };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-bounce">
           Hello, I'm {cur.name} 👋
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-gradient leading-tight">
          {cur.name}
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground/80 italic">{cur.title}</h2>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">"{cur.tag}"</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl group shadow-2xl shadow-primary/30" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
            {cur.btn1} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="/cv.pdf" download="Heng-Kim-Hak-CV.pdf" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold rounded-2xl border-2 hover:bg-secondary">
              {cur.btn2} <Download className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
