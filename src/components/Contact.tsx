import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  // លុប language ចេញពី useTheme
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    // ប្តូរមកជាអក្សរធម្មតាវិញ
    alert('សារត្រូវបានផ្ញើរួចរាល់! (Message sent!)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/kimhakmelody', icon: '📱', color: 'bg-blue-500' },
    { name: 'Facebook', url: 'https://www.facebook.com/kimhakmelody', icon: '📘', color: 'bg-blue-600' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@kimhak.melody', icon: '🎵', color: 'bg-black' },
    { name: 'GitHub', url: 'https://github.com/kimhakmelody', icon: '🐱', color: 'bg-gray-800' },
    { name: 'Linktree', url: 'https://linktr.ee/kimhakmelody', icon: '🌳', color: 'bg-green-400' }
  ];

  // កំណត់ទិន្នន័យស្រេចៗតែម្តង
  const currentContent = {
    title: 'ទាក់ទងខ្ញុំ (Contact Me)',
    subtitle: 'ផ្ញើសារមកខ្ញុំ ឬទាក់ទងតាមរយៈបណ្តាញសង្គម',
    nameLabel: 'ឈ្មោះ (Name)',
    emailLabel: 'អ៊ីមែល (Email)',
    messageLabel: 'សារ (Message)',
    sendButton: 'ផ្ញើសារ (Send Message)',
    contactInfo: 'ព័ត៌មានទំនាក់ទំនង',
    socialMedia: 'បណ្តាញសង្គម',
    namePlaceholder: 'បញ្ចូលឈ្មោះរបស់អ្នក',
    emailPlaceholder: 'បញ្ចូលអ៊ីមែលរបស់អ្នក',
    messagePlaceholder: 'សរសេរសាររបស់អ្នកនៅទីនេះ...'
  };

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
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-white py-3">
                  {currentContent.sendButton}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{currentContent.contactInfo}</h3>
                <div className="space-y-3">
                  <p>📧 kimhakmelody@gmail.com</p>
                  <p>📱 Telegram: @kimhakmelody</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{currentContent.socialMedia}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 p-3 rounded-lg ${social.color} text-white`}
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
