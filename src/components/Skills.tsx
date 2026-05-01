import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Palette, Code2, Globe, FileText, Video, Cpu } from 'lucide-react';

const Skills = () => {
  const { language } = useTheme();
  const title = { km: 'ជំនាញជំនាញ', en: 'Core Skills', zh: '核心技能', ko: '핵심 기술', ja: '主なスキル' }[language];

  const skills = [
    { name: 'Graphic Design (PS/AI)', level: 95, icon: <Palette className="text-blue-500" /> },
    { name: 'Web Dev (React/TS)', level: 85, icon: <Code2 className="text-cyan-500" /> },
    { name: 'Office Systems', level: 90, icon: <FileText className="text-green-500" /> },
    { name: 'Video Editing', level: 80, icon: <Video className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gradient">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <Card key={i} className="p-8 border-none shadow-xl hover-lift bg-card/80">
              <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-3 rounded-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
