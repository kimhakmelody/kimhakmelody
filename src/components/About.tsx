import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';

const About = () => {
  const { language } = useTheme();
  const cur = {
    km: { title: 'អំពីខ្ញុំ', desc: 'ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ Full-stack ដែលមានចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រដែលមានប្រសិទ្ធភាព និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អបំផុត។', exp: 'បទពិសោធន៍', project: 'គម្រោងបញ្ចប់' },
    en: { title: 'About Me', desc: 'I am a Full-stack developer with a passion for building efficient web applications and great user experiences.', exp: 'Experience', project: 'Projects Done' },
    // ... ថែមភាសាផ្សេងៗទៀតតាមលំនាំនេះ ...
  }[language] || { title: 'About Me', desc: '', exp: 'Experience', project: 'Projects' };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-card rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" alt="Work" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">{cur.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">{cur.desc}</p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 border-none bg-secondary/50 backdrop-blur-sm shadow-xl">
                <p className="text-5xl font-black text-primary mb-2">2+</p>
                <p className="font-bold uppercase tracking-widest text-sm">{cur.exp}</p>
              </Card>
              <Card className="p-8 border-none bg-secondary/50 backdrop-blur-sm shadow-xl">
                <p className="text-5xl font-black text-primary mb-2">20+</p>
                <p className="font-bold uppercase tracking-widest text-sm">{cur.project}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
