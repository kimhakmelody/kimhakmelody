import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
// ប្តូរ Telegram ទៅជា Send ដើម្បីបំបាត់ Build Error
import { Mail, Phone, MapPin, Facebook, Send, Github, Globe } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'ទាក់ទងខ្ញុំ', subtitle: 'ផ្ញើសារមកកាន់ខ្ញុំ!', info: 'ព័ត៌មានទំនាក់ទំនង', formTitle: 'ផ្ញើសារ', name: 'ឈ្មោះពេញ', email: 'អ៊ីមែល', subject: 'ប្រធានបទ', msg: 'សារ', send: 'ផ្ញើឥឡូវនេះ', location: 'ភ្នំពេញ, កម្ពុជា' },
    en: { title: 'Contact Me', subtitle: 'Send me a message!', info: 'Contact Information', formTitle: 'Message Me', name: 'Full Name', email: 'Email Address', subject: 'Subject', msg: 'Message', send: 'Send Now', location: 'Phnom Penh, Cambodia' },
    zh: { title: '联系我', subtitle: '给我发消息！', info: '联系信息', formTitle: '发消息', name: '姓名', email: '电子邮件', subject: '主题', msg: '消息内容', send: '立即发送', location: '柬埔寨, 金边' },
    ko: { title: '문의하기', subtitle: '메시지를 보내주세요!', info: '연락처 정보', formTitle: '메시지 작성', name: '이름', email: '이메일 주소', subject: '제목', msg: '내용', send: '지금 보내기', location: '캄보디아, 프놈펜' },
    ja: { title: 'お問い合わせ', subtitle: 'メッセージを送ってください！', info: '連絡先情報', formTitle: 'メッセージ送信', name: 'お名前', email: 'メールアドレス', subject: '件名', msg: '内容', send: '送信する', location: 'カンボジア、プノンペン' }
  };

  const cur = content[language] || content.en;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">{cur.title}</h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-8">{cur.info}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg"><Mail className="text-primary" /></div>
                <div><p className="text-xs text-muted-foreground">Email</p><p className="text-sm font-semibold">your-email@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg"><MapPin className="text-primary" /></div>
                <div><p className="text-xs text-muted-foreground">Location</p><p className="text-sm font-semibold">{cur.location}</p></div>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <a href="#" className="p-2 bg-secondary rounded-full hover:text-blue-600"><Facebook size={20}/></a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:text-sky-500"><Send size={20}/></a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:text-gray-800"><Github size={20}/></a>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-8 border-none shadow-xl">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={cur.name} className="bg-muted/50" />
                <Input placeholder={cur.email} className="bg-muted/50" />
              </div>
              <Input placeholder={cur.subject} className="bg-muted/50" />
              <Textarea placeholder={cur.msg} className="min-h-[120px] bg-muted/50" />
              <Button className="w-full font-bold">{cur.send}</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
