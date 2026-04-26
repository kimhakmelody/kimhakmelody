
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { language } = useTheme();

  const content = {
    km: {
      title: 'អំពីខ្ញុំ',
      bio1: 'ជំរាបសួរ! ខ្ញុំ គឹម ហាក់ ជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលចូលចិត្តបង្កើតដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត។ ខ្ញុំមានបទពិសោធន៍ជាង ៥ ឆ្នាំក្នុងការអភិវឌ្ឍន៍គេហទំព័រ និងការរចនាក្រាហ្វិក។',
      bio2: 'ខ្ញុំឯកទេសក្នុងការប្រើប្រាស់បច្ចេកវិទ្យាទំនើបដូចជា React, HTML/CSS, JavaScript និងកម្មវិធីរចនាក្រាហ្វិកដូចជា Photoshop និង CorelDRAW ដើម្បីបង្កើតកម្មវិធីដែលមានប្រសិទ្ធភាព និងការរចនាដ៏ស្រស់ស្អាត។',
      bio3: 'គោលដៅរបស់ខ្ញុំគឺបន្តរៀនសូត្រ និងអភិវឌ្ឍជំនាញថ្មីៗ ដើម្បីជួយដោះស្រាយបញ្ហាស្មុគស្មាញតាមរយៈបច្ចេកវិទ្យា និងការរចនាប្រកបដោយភាពច្នៃប្រឌិត។',
      experience: 'ឆ្នាំបទពិសោធន៍',
      experienceDesc: 'អភិវឌ្ឍន៍កម្មវិធី',
      projects: 'គម្រោងបានបញ្ចប់',
      projectsDesc: 'គេហទំព័រ និងកម្មវិធី',
      clients: 'អតិថិជនពេញចិត្ត',
      clientsDesc: 'គម្រោងជោគជ័យ'
    },
    en: {
      title: 'About Me',
      bio1: 'Hello! I am Kim Hak, a passionate programmer creating innovative solutions. I have over 5 years of experience in web development and graphic design.',
      bio2: 'I specialize in using modern technologies like React, HTML/CSS, JavaScript, and graphic design software like Photoshop and CorelDRAW to create efficient applications and beautiful designs.',
      bio3: 'My goal is to continue learning and developing new skills to help solve complex problems through technology and creative design.',
      experience: 'Years Experience',
      experienceDesc: 'Software Development',
      projects: 'Projects Completed',
      projectsDesc: 'Websites & Applications',
      clients: 'Happy Clients',
      clientsDesc: 'Successful Projects'
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {currentContent.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {currentContent.bio1}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {currentContent.bio2}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {currentContent.bio3}
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">៥+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{currentContent.experience}</h3>
                    <p className="text-muted-foreground">{currentContent.experienceDesc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">៥០+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{currentContent.projects}</h3>
                    <p className="text-muted-foreground">{currentContent.projectsDesc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">២០+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{currentContent.clients}</h3>
                    <p className="text-muted-foreground">{currentContent.clientsDesc}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
