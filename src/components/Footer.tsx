import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  const content = {
    km: { copyright: 'រក្សាសិទ្ធិគ្រប់យ៉ាង', created: 'បង្កើតដោយក្តីស្រឡាញ់ ពី', with: 'ប្រើប្រាស់បច្ចេកវិទ្យា' },
    en: { copyright: 'All Rights Reserved', created: 'Created with love by', with: 'Powered by' },
    zh: { copyright: '版权所有', created: '用爱心制作', with: '技术支持' },
    ko: { copyright: '모든 권리 보유', created: '사랑으로 만든', with: '제작 기술' },
    ja: { copyright: '全著作権所有', created: '愛を込めて作成', with: '搭載技術' }
  };

  const cur = content[language] || content.en;

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* ខាងឆ្វេង */}
          <div className="text-center md:text-left flex flex-col sm:flex-row items-center gap-3 text-lg">
            <span className="text-muted-foreground font-medium">© {currentYear}</span>
            <span className="font-black text-foreground">Heng Kim Hak</span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">{cur.copyright}.</span>
            <img 
              src="https://flagcdn.com/kh.svg" 
              alt="Cambodia Flag" 
              className="w-6 h-auto rounded-sm shadow-sm ml-2"
            />
          </div>

          {/* ខាងស្តាំ */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm md:text-base bg-secondary/50 px-6 py-3 rounded-2xl">
            <span className="text-muted-foreground">{cur.created}</span>
            <span className="text-primary font-black hover:scale-105 transition-transform cursor-pointer">Heng Kim Hak</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
