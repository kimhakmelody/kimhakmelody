import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Facebook, Send, Github, Globe, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();
  const cur = {
    km: { title: 'ទាក់ទងខ្ញុំ', info: 'ព័ត៌មានទំនាក់ទំនង', form: 'ផ្ញើសារមកខ្ញុំ', name: 'ឈ្មោះ', email: 'អ៊ីមែល', msg: 'សារ', send: 'ផ្ញើសារឥឡូវនេះ', location: 'ភ្នំពេញ, កម្ពុជា' },
    en: { title: 'Contact Me', info: 'Contact Info', form: 'Send a Message', name: 'Full Name', email: 'Email', msg: 'Message', send: 'Send Message', location: 'Phnom Penh, Cambodia' },
    zh: { title: '联系我', info: '联系方式', form: '发消息', name: '姓名', email: '电子邮箱', msg: '留言', send: '立即发送', location: '柬埔寨, 金边' },
    ko: { title: '문의하기', info: '연락처 정보', form: '메시지 보내기', name: '성함', email: '이메일', msg: '내용', send: '보내기', location: '캄보디아, 프놈펜' },
    ja: { title: 'お問い合わせ', info: '連絡先', form: 'メッセージを送る', name: 'お名前', email: 'メール', msg: '内容', send: '送信', location: 'カンボジア、プノンペン' }
  }[language] || { title: 'Contact Me' };

  const socials = [
    { icon: <Facebook />, link: 'https://facebook.com/kimhak.melody', color: 'bg-[#1877F2]' },
    { icon: <Send />, link: 'https://t.me/kimhak_melody', color: 'bg-[#0088cc]' },
    { icon: <Github />, link: 'https://github.com/kimhakmelody', color: 'bg-[#333]' },
    { icon: <Youtube />, link: '#', color: 'bg-[#FF0000]' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gradient italic">{cur.title}</h2>
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-8 border-none shadow-2xl bg-card/60 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-8 italic border-b pb-4">{cur.info}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary"><Mail /></div>
                  <p className="font-semibold text-sm md:text-base">kimhak.melody@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary"><Phone /></div>
                  <p className="font-semibold">+855 96 220 2011</p>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.link} className={`${s.color} p-3 rounded-xl text-white hover:scale-110 transition-all shadow-lg`}>{s.icon}</a>
                ))}
              </div>
            </Card>
          </div>
          <div className="lg:col-span-8">
            <Card className="p-10 border-none shadow-2xl bg-card/80 backdrop-blur-xl h-full">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder={cur.name} className="h-14 bg-muted/50 border-none text-lg" />
                  <Input placeholder={cur.email} className="h-14 bg-muted/50 border-none text-lg" />
                </div>
                <Textarea placeholder={cur.msg} className="min-h-[200px] bg-muted/50 border-none text-lg p-5" />
                <Button className="w-full md:w-auto px-12 py-8 text-xl font-black rounded-2xl shadow-xl">{cur.send}</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
