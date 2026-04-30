import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
// នាំចូល Icons ស្អាតៗ
import { 
  Palette, 
  PenTool, 
  Globe, 
  Code2, 
  Atom, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Video, 
  Terminal 
} from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  // កំណត់ Skill ជាមួយ Icon ឱ្យត្រូវតាមមុខជំនាញ
  const skills = [
    { name: 'Photoshop', level: 95, icon: <Palette className="w-6 h-6 text-blue-500" /> },
    { name: 'CorelDRAW', level: 88, icon: <PenTool className="w-6 h-6 text-orange-500" /> },
    { name: 'HTML/CSS', level: 92, icon: <Globe className="w-6 h-6 text-orange-600" /> },
    { name: 'JavaScript', level: 85, icon: <Code2 className="w-6 h-6 text-yellow-500" /> },
    { name: 'React', level: 80, icon: <Atom className="w-6 h-6 text-cyan-400 animate-spin-slow" /> },
    { name: 'Microsoft Word', level: 90, icon: <FileText className="w-6 h-6 text-blue-700" /> },
    { name: 'Microsoft Excel', level: 85, icon: <FileSpreadsheet className="w-6 h-6 text-green-600" /> },
    { name: 'PowerPoint', level: 88, icon: <Presentation className="w-6 h-6 text-orange-700" /> },
    { name: 'Video Director', level: 75, icon: <Video className="w-6 h-6 text-red-500" /> },
    { name: 'Kali Linux', level: 40, icon: <Terminal className="w-6 h-6 text-gray-400" /> },
  ];

  const categories = [
    {
      title: 'អភិវឌ្ឍន៍ផ្នែកមុខ (Frontend)',
      description: 'អភិវឌ្ឍន៍គេហទំព័រដែលមានភាពឆ្លើយតប និងទាក់ទាញ',
      techs: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'រចនាក្រាហ្វិក (Graphic Design)',
      description: 'បង្កើតការរចនាដ៏ស្រស់ស្អាត និងប្រកបដោយវិជ្ជាជីវៈ',
      techs: ['Photoshop', 'CorelDRAW', 'UI/UX']
    },
    {
      title: 'ការិយាល័យ និងប្រព័ន្ធ (Office)',
      description: 'ជំនាញក្នុងការប្រើប្រាស់កម្មវិធីការិយាល័យ និងប្រព័ន្ធ',
      techs: ['MS Office', 'Video Editing', 'Linux']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              ជំនាញរបស់ខ្ញុំ
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              បច្ចេកវិទ្យា និងជំនាញដែលខ្ញុំប្រើប្រាស់ដើម្បីបង្កើតដំណោះស្រាយឌីជីថល
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover-lift border-none shadow-sm bg-card">
                <h3 className="text-xl font-bold mb-2 text-primary">{category.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Progress */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-5 hover-lift border-none shadow-sm bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {/* បង្ហាញ Icon */}
                    <span>{skill.icon}</span>
                    <h3 className="font-semibold text-base">{skill.name}</h3>
                  </div>
                  <span className="text-xs font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
