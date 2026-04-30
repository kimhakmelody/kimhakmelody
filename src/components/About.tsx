import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'អំពីខ្ញុំ', desc: 'ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ Full-stack ដែលមានចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រដែលមានប្រសិទ្ធភាព និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អបំផុត។', exp: 'បទពិសោធន៍', project: 'គម្រោងបញ្ចប់' },
    en: { title: 'About Me', desc: 'I am a Full-stack developer with a passion for building efficient web applications and great user experiences.', exp: 'Experience', project: 'Projects Done' },
    zh: { title: '关于我', desc: '我是一名全栈开发人员，热衷于构建高效的 Web 应用程序和出色的用户体验。', exp: '经验', project: '完成项目' },
    ko: { title: '자기소개', desc: '저는 효율적인 웹 애플리케이션과 훌륭한 사용자 경험을 구축하는 데 열정을 가진 풀스택 개발자입니다.', exp: '경력', project: '완료된 프로젝트' },
    ja: { title: '私について', desc: '私は、効率的なウェブアプリケーションと優れたユーザーエクスペリエンスの構築に熱心なフルスタック開発者です。', exp: '経験', project: '完了したプロジェクト' }
  };

  const cur = content[language] || content.en;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gradient">{cur.title}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{cur.desc}</p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-primary">2+</h3>
              <p className="text-muted-foreground">{cur.exp}</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-primary">20+</h3>
              <p className="text-muted-foreground">{cur.project}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
