import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Code2, Laptop, Trophy } from 'lucide-react';

const About = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'អំពីខ្ញុំ', desc: 'ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ Full-stack ដែលមានចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រដែលមានប្រសិទ្ធភាព និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អបំផុត។ គោលដៅរបស់ខ្ញុំគឺប្រែក្លាយគំនិតឱ្យទៅជាការពិតតាមរយៈកូដ។', exp: 'ឆ្នាំបទពិសោធន៍', project: 'គម្រោងបញ្ចប់', awards: 'ពានរង្វាន់' },
    en: { title: 'About Me', desc: 'I am a Full-stack developer with a passion for building efficient web applications and great user experiences. My goal is to turn ideas into reality through code.', exp: 'Years Experience', project: 'Projects Done', awards: 'Awards Won' },
    zh: { title: '关于我', desc: '我是一名全栈开发人员，热衷于构建高效的 Web 应用程序和出色的用户体验。我的目标是通过代码将想法变为现实。', exp: '年经验', project: '完成项目', awards: '获得奖项' },
    ko: { title: '자기소개', desc: '저는 효율적인 웹 애플리케이션과 훌륭한 사용자 경험을 구축하는 데 열정을 가진 풀스택 개발자입니다. 코드를 통해 아이디어를 현실로 만드는 것이 목표입니다.', exp: '년 경력', project: '완료된 프로젝트', awards: '수상 내역' },
    ja: { title: '私について', desc: '私は、効率的なウェブアプリケーションと優れたユーザーエクスペリエンスの構築に熱心なフルスタック開発者です。コードを通じてアイデアを現実にすることが私の目標です。', exp: '年の経験', project: '完了したプロジェクト', awards: '受賞歴' }
  };

  const cur = content[language] || content.en;

  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gradient">{cur.title}</h2>
        
        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
              alt="Heng Kim Hak Workspace" 
              className="relative rounded-3xl object-cover h-[500px] w-full shadow-2xl"
            />
          </div>
          
          <div className="lg:col-span-7 space-y-10">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              {cur.desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/80 backdrop-blur border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-4xl font-black mb-2">2+</h3>
                <p className="text-sm font-bold text-muted-foreground uppercase">{cur.exp}</p>
              </Card>
              
              <Card className="p-6 bg-card/80 backdrop-blur border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <Code2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-4xl font-black mb-2">20+</h3>
                <p className="text-sm font-bold text-muted-foreground uppercase">{cur.project}</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-4xl font-black mb-2">5+</h3>
                <p className="text-sm font-bold text-muted-foreground uppercase">{cur.awards}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
