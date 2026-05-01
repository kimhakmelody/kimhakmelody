import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Facebook, Telegram, Github, Globe } from 'lucide-react';

const Contact = () => {
  const { language } = useTheme();

  const content = {
    km: {
      title: 'ទាក់ទងខ្ញុំ',
      subtitle: 'តើអ្នកមានសំណួរ ឬចង់សហការមែនទេ? សូមផ្ញើសារមកកាន់ខ្ញុំ!',
      info: 'ព័ត៌មានទំនាក់ទំនង',
      formTitle: 'ផ្ញើសារមកកាន់ខ្ញុំ',
      name: 'ឈ្មោះពេញ',
      email: 'អាសយដ្ឋានអ៊ីមែល',
      subject: 'ប្រធានបទ',
      msg: 'សាររបស់អ្នក',
      send: 'ផ្ញើសារឥឡូវនេះ',
      location: 'ភ្នំពេញ, កម្ពុជា'
    },
    en: {
      title: 'Contact Me',
      subtitle: 'Have a question or want to work together? Send me a message!',
      info: 'Contact Information',
      formTitle: 'Send Me a Message',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      msg: 'Your Message',
      send: 'Send Message Now',
      location: 'Phnom Penh, Cambodia'
    },
    zh: {
      title: '联系我',
      subtitle: '有问题或想合作吗？给我发消息吧！',
      info: '联系信息',
      formTitle: '给我发消息',
      name: '姓名',
      email: '电子邮件',
      subject: '主题',
      msg: '您的留言',
      send: '立即发送',
      location: '柬埔寨, 金边'
    },
    ko: {
      title: '문의하기',
      subtitle: '질문이 있거나 함께 일하고 싶으신가요? 메시지를 보내주세요!',
      info: '연락처 정보',
      formTitle: '메시지 보내기',
      name: '이름',
      email: '이메일 주소',
      subject: '제목',
      msg: '메시지 내용',
      send: '지금 보내기',
      location: '캄보디아, 프놈펜'
    },
    ja: {
      title: 'お問い合わせ',
      subtitle: 'ご質問や仕事のご依頼はお気軽にご連絡ください！',
      info: '連絡先情報',
      formTitle: 'メッセージを送る',
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      msg: 'メッセージ内容',
      send: '今すぐ送信',
      location: 'カンボジア、プノンペン'
    }
  };

  const cur = content[language] || content.en;

  const contactDetails = [
    { icon: <Mail className="text-primary" />, label: 'Email', value: 'your-email@example.com' },
    { icon: <Phone className="text-primary" />, label: 'Phone', value: '+855 00 000 000' },
    { icon: <MapPin className="text-primary" />, label: 'Location', value: cur.location },
  ];

  const socialLinks = [
    { icon: <Facebook />, link: 'https://facebook.com/yourprofile', color: 'hover:text-blue-600' },
    { icon: <Telegram />, link: 'https://t.me/yourusername', color: 'hover:text-sky-500' },
    { icon: <Github />, link: 'https://github.com/yourusername', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: <Globe />, link: '#', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{cur.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{cur.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-8">{cur.info}</h3>
            <div className="space-y-6">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">{item.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary rounded-full transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <Card className="lg:col-span-2 p-8 border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-8">{cur.formTitle}</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{cur.name}</label>
                  <Input placeholder="Heng Kim Hak" className="bg-muted/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{cur.email}</label>
                  <Input type="email" placeholder="example@gmail.com" className="bg-muted/50 border-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{cur.subject}</label>
                <Input placeholder="Project Inquiry" className="bg-muted/50 border-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{cur.msg}</label>
                <Textarea placeholder="..." className="min-h-[150px] bg-muted/50 border-none" />
              </div>
              <Button className="w-full md:w-auto px-12 py-6 text-lg font-bold shadow-lg shadow-primary/20">
                {cur.send}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
