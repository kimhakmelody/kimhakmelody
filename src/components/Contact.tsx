
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const { language } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (you could add a toast here)
    alert(language === 'km' ? 'សារត្រូវបានផ្ញើរួចរាល់!' : 'Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/kimhakmelody', icon: '📱', color: 'bg-blue-500' },
    { name: 'Facebook', url: 'www.facebook.com/kimhakmelody', icon: '📘', color: 'bg-blue-600' },
    { name: 'TikTok', url: 'www.tiktok.com/@kimhak.melody', icon: '🎵', color: 'bg-black' },
    { name: 'YouTube', url: 'youtube.com/@kimhakmelody', icon: '📺', color: 'bg-red-600' },
    { name: 'Instagram', url: 'www.instagram.com/kimhakmelody', icon: '📷', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'WeChat', url: '0962364854', icon: '💬', color: 'bg-green-500' },
    { name: 'WhatsApp', url: 'wa.me/qr/ENXEAWXEDL5UC1', icon: '📲', color: 'bg-green-600' },
    { name: 'Discord', url: 'https://discord.gg/FqNW7UFe', icon: '🎮', color: 'bg-indigo-600' },
    { name: 'GitHub', url: 'github.com/kimhakmelody', icon: '🐱', color: 'bg-gray-800' },
    { name: 'Linktree', url: 'https://linktr.ee/kimhakmelody', icon: '🌳', color: 'bg-green-400' }
  ];

  const content = {
    km: {
      title: 'ទាក់ទងខ្ញុំ',
      subtitle: 'ផ្ញើសារមកខ្ញុំ ឬទាក់ទងតាមរយៈបណ្តាញសង្គម',
      nameLabel: 'ឈ្មោះ',
      emailLabel: 'អ៊ីមែល',
      messageLabel: 'សារ',
      sendButton: 'ផ្ញើសារ',
      contactInfo: 'ព័ត៌មានទំនាក់ទំនង',
      socialMedia: 'បណ្តាញសង្គម',
      namePlaceholder: 'បញ្ចូលឈ្មោះរបស់អ្នក',
      emailPlaceholder: 'បញ្ចូលអ៊ីមែលរបស់អ្នក',
      messagePlaceholder: 'សរសេរសាររបស់អ្នកនៅទីនេះ...'
    },
    en: {
      title: 'Contact Me',
      subtitle: 'Send me a message or connect through social media',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButton: 'Send Message',
      contactInfo: 'Contact Information',
      socialMedia: 'Social Media',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      messagePlaceholder: 'Write your message here...'
    }
  };

  const currentContent = content[language];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {currentContent.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {currentContent.nameLabel}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={currentContent.namePlaceholder}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {currentContent.emailLabel}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={currentContent.emailPlaceholder}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {currentContent.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={currentContent.messagePlaceholder}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold hover-lift"
                >
                  {currentContent.sendButton}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social Media */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{currentContent.contactInfo}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📧</span>
                    <span>kimhakmelody@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📧</span>
                    <span>kimhakmelody2020@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📱</span>
                    <span>Telegram: @kimhakmelody</span>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{currentContent.socialMedia}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 p-3 rounded-lg ${social.color} text-white hover:opacity-90 transition-opacity hover-lift`}
                    >
                      <span>{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
