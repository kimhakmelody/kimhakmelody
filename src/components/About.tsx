import { Card } from './ui/card';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { language } = useTheme();
  const title = { km: 'អំពីខ្ញុំ', en: 'About Me' }[language] || 'About Me';

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gradient">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" className="w-full h-full object-cover" alt="Profile" />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              ខ្ញុំជាអ្នកអភិវឌ្ឍន៍វេបសាយដែលមានបទពិសោធន៍ក្នុងការប្រើប្រាស់ React និង Tailwind CSS ដើម្បីបង្កើតដំណោះស្រាយឌីជីថល។
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-none shadow-lg">
                <h4 className="text-3xl font-black text-primary">2+</h4>
                <p className="text-xs font-bold uppercase text-muted-foreground">Years Exp</p>
              </Card>
              <Card className="p-6 text-center border-none shadow-lg">
                <h4 className="text-3xl font-black text-primary">20+</h4>
                <p className="text-xs font-bold uppercase text-muted-foreground">Projects</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
