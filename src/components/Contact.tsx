import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
// កែពី Telegram មកជា Send ដើម្បីបំបាត់ Error build
import { Mail, Phone, MapPin, Facebook, Send, Github, Youtube } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();
  const cur = {
    km: { title: 'ទាក់ទងខ្ញុំ', send: 'ផ្ញើសារឥឡូវនេះ', name: 'ឈ្មោះ', email: 'អ៊ីមែល', msg: 'សារ' },
    en: { title: 'Contact Me', send: 'Send Message', name: 'Name', email: 'Email', msg: 'Message' }
  }[language] || { title: 'Contact Me' };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">{cur.title}</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-none shadow-xl bg-card/80">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" /> <span>kimhak.melody@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Send className="text-primary" /> <span>@kimhak_melody</span>
              </div>
            </div>
          </Card>
          <Card className="p-8 border-none shadow-xl bg-card/80">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder={cur.name} required />
              <Input type="email" placeholder={cur.email} required />
              <Textarea placeholder={cur.msg} className="h-32" required />
              <Button className="w-full font-bold">{cur.send}</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

// ត្រូវតែមានបន្ទាត់នេះដាច់ខាត ដើម្បីបំបាត់ Error ក្នុង App.tsx
export default Contact;
