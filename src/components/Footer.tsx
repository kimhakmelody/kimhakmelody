import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  const content = {
    km: { copyright: 'រក្សាសិទ្ធិគ្រប់យ៉ាង', by: 'ដោយ' },
    en: { copyright: 'All Rights Reserved', by: 'by' },
    zh: { copyright: '版权所有', by: '由' },
    ko: { copyright: '모든 권리 보유', by: '작성자' },
    ja: { copyright: '全著作権所有', by: '作成者' }
  };

  const cur = content[language] || content.en;

  return (
    <footer className="bg-card border-t py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* ផ្នែករក្សាសិទ្ធិ */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>ការរក្សាសិទ្ធិ © {currentYear} {cur.by}</span>
            <img 
              src="https://flagcdn.com/kh.svg" 
              alt="Cambodia Flag" 
              className="w-5 h-auto rounded-sm shadow-sm"
            />
            <span className="font-bold text-foreground">Heng Kim Hak</span>
            <span>. {cur.copyright}។</span>
          </div>

          {/* ផ្នែកព័ត៌មានបន្ថែម */}
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span className="text-muted-foreground">Created By</span>
            <span className="text-primary font-bold">Heng Kim Hak</span>
            <span className="text-muted-foreground">with</span>
            <span className="text-primary font-semibold">React + TS</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
