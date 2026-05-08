import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'គម្រោងថ្មីៗ', subtitle: 'ស្នាដៃមួយចំនួនដែលខ្ញុំបានបង្កើត', view: 'មើលផ្ទាល់', code: 'កូដប្រភព' },
    en: { title: 'Recent Projects', subtitle: 'Some of the works I have created', view: 'Live Demo', code: 'Source Code' },
    zh: { title: '近期项目', subtitle: '我创建的一些作品', view: '查看演示', code: '源码' },
    ko: { title: '최근 프로젝트', subtitle: '내가 만든 몇 가지 작품들', view: '라이브 데모', code: '소스 코드' },
    ja: { title: '最近のプロジェクト', subtitle: '私が作成したいくつかの作品', view: 'ライブデモ', code: 'ソースコード' }
  };

  const cur = content[language] || content.en;

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-featured online store built with React and Tailwind CSS.",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "Portfolio Website",
      desc: "Multilingual personal portfolio with smooth animations.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["UI/UX", "Frontend", "Vite"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{cur.title}</h2>
          <p className="text-xl text-muted-foreground">{cur.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden group border-none shadow-2xl bg-card/80 backdrop-blur">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{project.desc}</p>
                <div className="flex gap-4">
                  <Button className="flex-1 h-12 text-md font-bold rounded-xl shadow-lg">
                    <ExternalLink className="w-4 h-4 mr-2" /> {cur.view}
                  </Button>
                  <Button variant="outline" className="flex-1 h-12 text-md font-bold rounded-xl border-2 hover:bg-secondary">
                    <Github className="w-4 h-4 mr-2" /> {cur.code}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
