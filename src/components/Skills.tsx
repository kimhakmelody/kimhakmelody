import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Palette, PenTool, Globe, Code2, Atom, FileText, FileSpreadsheet, Presentation, Video, Terminal } from 'lucide-react';

const Skills = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'ជំនាញរបស់ខ្ញុំ', subtitle: 'បច្ចេកវិទ្យាដែលខ្ញុំប្រើប្រាស់', cat1: 'អភិវឌ្ឍន៍ផ្នែកមុខ', cat2: 'រចនាក្រាហ្វិក', cat3: 'ការិយាល័យ & ប្រព័ន្ធ' },
    en: { title: 'My Skills', subtitle: 'Technologies I use', cat1: 'Frontend Development', cat2: 'Graphic Design', cat3: 'Office & Systems' },
    zh: { title: '我的技能', subtitle: '我使用的技术', cat1: '前端开发', cat2: '平面设计', cat3: '办公与系统' },
    ko: { title: '나의 기술', subtitle: '사용하는 기술', cat1: '프론트엔드 개발', cat2: '그래픽 디자인', cat3: '사무 및 시스템' },
    ja: { title: '私のスキル', subtitle: '使用テクノロジー', cat1: 'フロントエンド開発', cat2: 'グラフィックデザイン', cat3: 'オフィスとシステム' }
  };

  const cur = content[language] || content.en;

  const skills = [
    { name: 'Photoshop', level: 95, icon: <Palette className="w-6 h-6 text-blue-500" /> },
    { name: 'CorelDRAW', level: 88, icon: <PenTool className="w-6 h-6 text-orange-500" /> },
    { name: 'HTML/CSS', level: 92, icon: <Globe className="w-6 h-6 text-orange-600" /> },
    { name: 'JavaScript', level: 85, icon: <Code2 className="w-6 h-6 text-yellow-500" /> },
    { name: 'React', level: 80, icon: <Atom className="w-6 h-6 text-cyan-400" /> },
    { name: 'Microsoft Word', level: 90, icon: <FileText className="w-6 h-6 text-blue-700" /> },
    { name: 'Microsoft Excel', level: 85, icon: <FileSpreadsheet className="w-6 h-6 text-green-600" /> },
    { name: 'Video Director', level: 75, icon: <Video className="w-6 h-6 text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">{cur.title}</h2>
        <p className="text-center text-muted-foreground mb-16">{cur.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center font-bold">{cur.cat1}</Card>
          <Card className="p-6 text-center font-bold">{cur.cat2}</Card>
          <Card className="p-6 text-center font-bold">{cur.cat3}</Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">{skill.icon} <span className="font-semibold">{skill.name}</span></div>
                <span className="text-sm text-primary font-bold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
