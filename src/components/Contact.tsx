import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
// ប្រើ Send ជំនួស Telegram ដើម្បីបំបាត់ Error
import { Mail, Phone, MapPin, Facebook, Send, Github, Globe } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
           {/* កូដ Contact ផ្សេងៗនៅទីនេះ... */}
           <Card className="p-6">
             <div className="flex items-center gap-4">
               <Send className="text-primary" /> <span>Telegram: @kimhak_melody</span>
             </div>
           </Card>
        </div>
      </div>
    </section>
  );
};

// ត្រូវតែមានបន្ទាត់នេះដាច់ខាត បើមិនចង់ឱ្យ "សស្លែត"
export default Contact;
