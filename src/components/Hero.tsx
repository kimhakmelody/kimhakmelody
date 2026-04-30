import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Hero = () => {
  const { language } = useTheme();

  const content = {
    km: {
      name: 'ហេង គឹមហាក់',
      title: 'អ្នកអភិវឌ្ឍន៍គេហទំព័រ & អ្នកសរសេរកម្មវិធី',
      tagline: 'កសាងអនាគតជាមួយកូដ និងបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត និងមានសុវត្ថិភាពខ្ពស់បំផុត',
      btn1: 'ស្វែងយល់បន្ថែម',
      btn2: 'ទាញយក CV'
    },
    en: {
      name: 'Heng Kim Hak',
      title: 'Web Developer & Programmer',
      tagline: 'Building the future with code and creating innovative solutions and the highest Security.',
      btn1: 'Learn More',
      btn2: 'Download CV'
    },
    zh: {
      name: '恒 金鹤',
      title: '网页开发人员与程序员',
      tagline: '用代码构建未来，创造创新的解决方案 最高安全级别',
      btn1: '了解更多',
      btn2: '下载简历'
    },
    ko: {
      name: '헹 김학',
      title: '웹 개발자 및 프로그래머',
      tagline: '코드로 미래를 구축하고 혁신적인 솔루션을 창출합니다 그리고 최고의 안전성',
      btn1: '더 알아보기',
      btn2: '이력서 다운로드'
    },
    ja: {
      name: 'ヘン・キムハク',
      title: 'ウェブ開発者兼プログラマー',
      tagline: 'コードで未来を築き、革新的なソリューションを創造します そして最高の安全性',
      btn1: 'もっと詳しく',
      btn2: '履歴書をダウンロード'
    }
  };

  const cur = content[language] || content.en;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gradient flex items-center justify-center gap-4">
          {cur.name}
          <img src="https://flagcdn.com/kh.svg" className="w-10 h-auto rounded-sm shadow-md" alt="KH" />
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-8 text-foreground/90">{cur.title}</h2>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">{cur.tagline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
            {cur.btn1}
          </Button>
          <Button size="lg" variant="outline">{cur.btn2}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
