
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { language } = useTheme();

  const skills = [
    { name: 'Photoshop', level: 95, icon: '🎨' },
    { name: 'CorelDRAW', level: 88, icon: '🖌️' },
    { name: 'HTML/CSS', level: 92, icon: '🌐' },
    { name: 'JavaScript', level: 85, icon: '💛' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Microsoft Word', level: 90, icon: '📝' },
    { name: 'Microsoft Excel', level: 85, icon: '📊' },
    { name: 'PowerPoint', level: 88, icon: '📋' },
    { name: 'Video Director', level: 75, icon: '🎬' },
    { name: 'Kali Linux', level: 40, icon: '🐧' },
  ];

  const categories = [
    {
      title: language === 'km' ? 'អភិវឌ្ឍន៍ផ្នែកមុខ' : 'Frontend Development',
      description: language === 'km' ? 'អភិវឌ្ឍន៍គេហទំព័រដែលមានភាពឆ្លើយតប និងទាក់ទាញ' : 'Building responsive and engaging web interfaces',
      techs: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
      title: language === 'km' ? 'រចនាក្រាហ្វិក' : 'Graphic Design',
      description: language === 'km' ? 'បង្កើតការរចនាដ៏ស្រស់ស្អាត និងប្រកបដោយវិជ្ជាជីវៈ' : 'Creating beautiful and professional visual designs',
      techs: ['Photoshop', 'CorelDRAW', 'UI/UX Design']
    },
    {
      title: language === 'km' ? 'ការិយាល័យ និងប្រព័ន្ធ' : 'Office & Systems',
      description: language === 'km' ? 'ជំនាញក្នុងការប្រើប្រាស់កម្មវិធីការិយាល័យ និងប្រព័ន្ធ' : 'Proficiency in office applications and system administration',
      techs: ['Microsoft Office', 'Video Editing', 'Linux Systems']
    }
  ];

  const content = {
    km: {
      title: 'ជំនាញរបស់ខ្ញុំ',
      subtitle: 'បច្ចេកវិទ្យា និងជំនាញដែលខ្ញុំប្រើប្រាស់ដើម្បីបង្កើតដំណោះស្រាយឌីជីថល'
    },
    en: {
      title: 'My Skills',
      subtitle: 'Technologies and skills I use to create digital solutions'
    }
  };

  const currentContent = content[language];

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
              {currentContent.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Progress */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
