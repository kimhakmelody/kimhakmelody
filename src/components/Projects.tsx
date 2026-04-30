import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'គេហទំព័រពាណិជ្ជកម្ម E-Commerce',
      description: 'គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិកដែលបង្កើតជាមួយ React, TypeScript និង Tailwind CSS។ មានមុខងារទាំងអស់ដូចជាកន្លែងដាក់របស់, ការទូទាត់, និងគ្រប់គ្រងអ្នកប្រើប្រាស់។',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'កម្មវិធីគ្រប់គ្រងកិច្ចការ (Task Management)',
      description: 'កម្មវិធីគ្រប់គ្រងកិច្ចការដ៏ទំនើបដែលជួយក្រុមការងារធ្វើការយ៉ាងមានប្រសិទ្ធភាព។ មានលក្ខណៈពិសេសជាច្រើនដូចជាការតាមដាន, ការជូនដំណឹង, និងរបាយការណ៍។',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ប្រព័ន្ធគ្រប់គ្រងពុម្ពផ្សាយ CMS',
      description: 'ប្រព័ន្ធគ្រប់គ្រងពុម្ពផ្សាយដែលងាយស្រួលប្រើប្រាស់សម្រាប់អ្នកសរសេរ និងអ្នកនិពន្ធ។ មានមុខងារបង្កើត, កែសម្រួល និងផ្សព្វផ្សាយអត្ថបទ។',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'កម្មវិធីចល័ត React Native',
      description: 'កម្មវិធីទូរស័ព្ទចល័តសម្រាប់ការរៀបចំកាលវិភាគ និងការរំលឹក។ មានមុខងារ push notification, calendar integration និង task management។',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500',
      tags: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={projectsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              គម្រោងរបស់ខ្ញុំ
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              គម្រោងខ្លះដែលខ្ញុំបានអភិវឌ្ឍន៍ និងបង្ហាញឱ្យឃើញពីជំនាញ និងបទពិសោធន៍របស់ខ្ញុំ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-lift group border-none shadow-md bg-card">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                    >
                      មើលគម្រោង
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      កូដប្រភព
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
