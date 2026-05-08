import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Palette, Code2, Globe, FileText, Video, Layout } from 'lucide-react';

const Skills = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'ជំនាញរបស់ខ្ញុំ', subtitle: 'បច្ចេកវិទ្យា និងកម្មវិធីដែលខ្ញុំប្រើប្រាស់ប្រចាំថ្ងៃ', front: 'ផ្នែកខាងមុខ (Frontend)', design: 'រចនាក្រាហ្វិក', tools: 'ឧបករណ៍ផ្សេងៗ' },
    en: { title: 'My Skills', subtitle: 'Technologies and software I use daily', front: 'Frontend Development', design: 'Graphic Design', tools: 'Other Tools' },
    zh: { title: '我的技能', subtitle: '我每天使用的技术和软件', front: '前端开发', design: '平面设计', tools: '其他工具' },
    ko: { title: '나의 기술', subtitle: '내가 매일 사용하는 기술과 소프트웨어', front: '프론트엔드 개발', design: '그래픽 디자인', tools: '기타 도구' },
    ja: { title: '私のスキル', subtitle: '私が毎日使用するテクノロジーとソフトウェア', front: 'フロントエンド開発', design: 'グラフィックデザイン', tools: 'その他のツール' }
  };

  const cur = content[language] || content.en;

  const skillData = [
    { name: 'Graphic Design (PS, CorelDRAW)', level: 95, icon: <Palette className="w-8 h-8 text-blue-500" /> },
    { name: 'Web Dev (HTML, CSS, React)', level: 88, icon: <Code2 className="w-8 h-8 text-cyan-500" /> },
    { name: 'UI/UX Design', level: 85, icon: <Layout className="w-8 h-8 text-purple-500" /> },
    { name: 'Video Editing', level: 80, icon: <Video className="w-8 h-8 text-red-500" /> },
    { name: 'Office Systems (Word, Excel)', level: 92, icon: <FileText className="w-8 h-8 text-green-500" /> },
    { name: 'Language Translations', level: 85, icon: <Globe className="w-8 h-8 text-orange-500" /> }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{cur.title}</h2>
          <p className="text-xl text-muted-foreground">{cur.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillData.map((skill, i) => (
            <Card key={i} className="p-8 border-none shadow-xl bg-card/80 backdrop-blur hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <p className="text-primary font-black text-lg">{skill.level}%</p>
                </div>
              </div>
              <Progress value={skill.level} className="h-3 rounded-full bg-secondary" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
