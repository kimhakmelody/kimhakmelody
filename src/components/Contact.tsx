import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
// ប្រើ Send ជំនួស Telegram ដើម្បីកុំឱ្យ Build Error និងបន្ថែម Icons ផ្សេងៗឱ្យដូចដើម
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Send, 
  Github, 
  Globe, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();

  const content = {
    km: {
      title: 'ទាក់ទងខ្ញុំ',
      subtitle: 'តើអ្នកមានសំណួរ ឬចង់សហការមែនទេ? សូមផ្ញើសារមកកាន់ខ្ញុំ!',
      infoTitle: 'ព័ត៌មានទំនាក់ទំនង',
      formTitle: 'ផ្ញើសារមកកាន់ខ្ញុំ',
      name: 'ឈ្មោះពេញ',
      email: 'អាសយដ្ឋានអ៊ីមែល',
      subject: 'ប្រធានបទ',
      msg: 'សាររបស់អ្នក',
      send: 'ផ្ញើសារឥឡូវនេះ',
      location: 'ភ្នំពេញ, កម្ពុជា',
      follow: 'តាមដានខ្ញុំលើបណ្តាញសង្គម'
    },
    en: {
      title: 'Contact Me',
      subtitle: 'Have a question or want to work together? Send me a message!',
      infoTitle: 'Contact Information',
      formTitle: 'Send Me a Message',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      msg: 'Your Message',
      send: 'Send Message Now',
      location: 'Phnom Penh, Cambodia',
      follow: 'Follow me on social media'
    },
    zh: {
      title: '联系我',
      subtitle: '有问题或想合作吗？给我发消息吧！',
      infoTitle: '联系信息',
      formTitle: '给我发消息',
      name: '姓名',
      email: '电子邮件',
      subject: '主题',
      msg: '您的留言',
      send: '立即发送',
      location: '柬埔寨, 金边',
      follow: '在社交媒体上关注我'
    },
    ko: {
      title: '문의하기',
      subtitle: '질문이 있거나 함께 일하고 싶으신가요? 메시지를 보내주세요!',
      infoTitle: '연락처 정보',
      formTitle: '메시지 보내기',
      name: '이름',
      email: '이메일 주소',
      subject: '제목',
      msg: '메시지 내용',
      send: '지금 보내기',
      location: '캄보디아, 프놈펜',
      follow: '소셜 미디어에서 나를 팔로우하세요'
    },
    ja: {
      title: 'お問い合わせ',
      subtitle: 'ご質問や仕事のご依頼はお気軽にご連絡ください！',
      infoTitle: '連絡先情報',
      formTitle: 'メッセージを送る',
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      msg: 'メッセージ内容',
      send: '今すぐ送信',
      location: 'カンボジア、プノンペン',
      follow: 'ソーシャルメディアで私をフォローする'
    }
  };

  const cur = content[language] || content.en;

  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6 text-primary" />, 
      label: 'Email', 
      value: 'kimhak.melody@gmail.com', 
      href: 'mailto:kimhak.melody@gmail.com' 
    },
    { 
      icon: <Phone className="w-6 h-6 text-primary" />, 
      label: 'Phone', 
      value: '+855 96 220 2011', 
      href: 'tel:+855962202011' 
    },
    { 
      icon: <MapPin className="w-6 h-6 text-primary" />, 
      label: 'Location', 
      value: cur.location, 
      href: '#' 
    }
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, link: 'https://facebook.com/kimhak.melody', color: 'bg-[#1877F2]' },
    { icon: <Send className="w-5 h-5" />, link: 'https://t.me/kimhak_melody', color: 'bg-[#0088cc]' },
    { icon: <Github className="w-5 h-5" />, link: 'https://github.com/kimhakmelody', color: 'bg-[#333]' },
    { icon: <Instagram className="w-5 h-5" />, link: '#', color: 'bg-[#E4405F]' },
    { icon: <Linkedin className="w-5 h-5" />, link: '#', color: 'bg-[#0077B5]' },
    { icon: <Youtube className="w-5 h-5" />, link: '#', color: 'bg-[#FF0000]' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient italic">
            {cur.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            {cur.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Details (Left Side) */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-8 border-none shadow-2xl bg-card/60 backdrop-blur-xl hover-lift">
              <h3 className="text-2xl font-bold mb-10 border-b pb-4 italic">{cur.infoTitle}</h3>
              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="flex items-center gap-5 group transition-all"
                  >
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{item.label}</p>
                      <p className="text-lg font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t">
                <p className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-widest">{cur.follow}</p>
                <div className="grid grid-cols-3 gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} p-3 rounded-xl text-white flex justify-center items-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-8">
            <Card className="p-10 border-none shadow-2xl bg-card/80 backdrop-blur-xl h-full">
              <h3 className="text-2xl font-bold mb-10 italic">{cur.formTitle}</h3>
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase">{cur.name}</label>
                  <Input 
                    placeholder="Heng Kim Hak" 
                    className="h-14 bg-muted/50 border-none focus:ring-2 focus:ring-primary/50 text-lg" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase">{cur.email}</label>
                  <Input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="h-14 bg-muted/50 border-none focus:ring-2 focus:ring-primary/50 text-lg" 
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase">{cur.subject}</label>
                  <Input 
                    placeholder="Topic..." 
                    className="h-14 bg-muted/50 border-none focus:ring-2 focus:ring-primary/50 text-lg" 
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase">{cur.msg}</label>
                  <Textarea 
                    placeholder="Write something..." 
                    className="min-h-[200px] bg-muted/50 border-none focus:ring-2 focus:ring-primary/50 text-lg p-5" 
                  />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full md:w-auto px-16 py-8 text-xl font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300">
                    {cur.send}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
