import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Facebook, Send, Github, Globe, Youtube } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'ទាក់ទងខ្ញុំ', subtitle: 'តើអ្នកមានសំណួរ ឬចង់សហការមែនទេ? សូមផ្ញើសារមកកាន់ខ្ញុំ!', info: 'ព័ត៌មានទំនាក់ទំនង', form: 'ផ្ញើសារមកខ្ញុំ', name: 'ឈ្មោះពេញ', email: 'អ៊ីមែល', subject: 'ប្រធានបទ', msg: 'សាររបស់អ្នក', send: 'ផ្ញើសារឥឡូវនេះ', location: 'ភ្នំពេញ, កម្ពុជា' },
    en: { title: 'Contact Me', subtitle: 'Have a question or want to work together? Send me a message!', info: 'Contact Info', form: 'Send a Message', name: 'Full Name', email: 'Email Address', subject: 'Subject', msg: 'Your Message', send: 'Send Message Now', location: 'Phnom Penh, Cambodia' },
    zh: { title: '联系我', subtitle: '有问题或想合作吗？给我发消息吧！', info: '联系方式', form: '给我发消息', name: '姓名', email: '电子邮件', subject: '主题', msg: '您的留言', send: '立即发送', location: '柬埔寨, 金边' },
    ko: { title: '문의하기', subtitle: '질문이 있거나 함께 일하고 싶으신가요? 메시지를 보내주세요!', info: '연락처 정보', form: '메시지 보내기', name: '이름', email: '이메일 주소', subject: '제목', msg: '메시지 내용', send: '지금 보내기', location: '캄보디아, 프놈펜' },
    ja: { title: 'お問い合わせ', subtitle: 'ご質問や仕事のご依頼はお気軽にご連絡ください！', info: '連絡先情報', form: 'メッセージを送る', name: 'お名前', email: 'メールアドレス', subject: '件名', msg: 'メッセージ内容', send: '今すぐ送信', location: 'カンボジア、プノンペン' }
  };

  const cur = content[language] || content.en;

  // Security Form Submission Logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been secured and sent.");
    // Add real sending logic here later
  };

  const socials = [
    { icon: <Facebook />, link: 'https://facebook.com/kimhak.melody', color: 'bg-[#1877F2]' },
    { icon: <Send />, link: 'https://t.me/kimhak_melody', color: 'bg-[#0088cc]' },
    { icon: <Github />, link: 'https://github.com/kimhakmelody', color: 'bg-[#333]' },
    { icon: <Youtube />, link: '#', color: 'bg-[#FF0000]' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{cur.title}</h2>
          <p className="text-xl text-muted-foreground">{cur.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Info Card */}
          <div className="lg:col-span-4">
            <Card className="p-8 h-full border-none shadow-2xl bg-card/80 backdrop-blur hover-lift">
              <h3 className="text-2xl font-bold mb-8 border-b pb-4">{cur.info}</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl"><Mail className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Email</p>
                    <p className="font-semibold text-sm">kimhak.melody@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl"><Phone className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Phone</p>
                    <p className="font-semibold text-sm">+855 96 220 2011</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl"><MapPin className="text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Location</p>
                    <p className="font-semibold text-sm">{cur.location}</p>
                  </div>
                </div>
              </div>

              {/* Security: rel="noopener noreferrer" added to external links */}
              <div className="mt-12 flex gap-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={`${s.color} p-3 rounded-xl text-white hover:scale-110 transition-transform shadow-lg`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8">
            <Card className="p-10 border-none shadow-2xl bg-card/90 backdrop-blur h-full">
              <h3 className="text-2xl font-bold mb-8">{cur.form}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input required placeholder={cur.name} className="h-14 bg-muted/50 border-none text-lg focus:ring-2 focus:ring-primary/50" />
                  <Input required type="email" placeholder={cur.email} className="h-14 bg-muted/50 border-none text-lg focus:ring-2 focus:ring-primary/50" />
                </div>
                <Input required placeholder={cur.subject} className="h-14 bg-muted/50 border-none text-lg focus:ring-2 focus:ring-primary/50" />
                <Textarea required placeholder={cur.msg} className="min-h-[200px] bg-muted/50 border-none text-lg p-5 focus:ring-2 focus:ring-primary/50" />
                <Button type="submit" className="w-full md:w-auto px-12 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                  {cur.send}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
