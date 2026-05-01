import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';

const About = () => {
  const { language } = useTheme();
  const cur = {
    km: { title: 'អំពីខ្ញុំ', desc: 'ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ Full-stack ដែលមានចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រដែលមានប្រសិទ្ធភាព និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អបំផុត។', exp: 'បទពិសោធន៍', project: 'គម្រោងបញ្ចប់' },
    en: { title: 'About Me', desc: 'I am a Full-stack developer with a passion for building efficient web applications and great user experiences.', exp: 'Experience', project: 'Projects Done' },
    zh: { title: '关于我', desc: '我是一名全栈开发人员，热衷于构建高效的 Web 应用程序和出色的用户体验。', exp: '经验', project: '完成项目' },
    ko: { title: '자기소개', desc: '저는 효율적인 웹 애플리케이션과 훌륭한 사용자 경험을 구축하는 데 열정을 가진 풀스택 개발자입니다.', exp: '경력', project: '완료된 프로젝트' },
    ja: { title: '私について', desc: '私は、効率的なウェブアプリケーションと優れたユーザーエクスペリエンスの構築に熱心なフルスタック開発者です。', exp: '経験', project: '完了したプロジェクト' }
  }[language] || { title: 'About Me', desc: '', exp: 'Experience', project: 'Projects' };

  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">{cur.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              {cur.desc}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 border-none bg-background/50 backdrop-blur-xl shadow-2xl hover-lift">
                <p className="text-5xl font-black text-primary mb-2">2+</p>
                <p className="font-bold uppercase tracking-widest text-xs text-muted-foreground">{cur.exp}</p>
              </Card>
              <Card className="p-8 border-none bg-background/50 backdrop-blur-xl shadow-2xl hover-lift">
                <p className="text-5xl font-black text-primary mb-2">20+</p>
                <p className="font-bold uppercase tracking-widest text-xs text-muted-foreground">{cur.project}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
