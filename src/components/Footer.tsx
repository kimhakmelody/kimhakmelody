import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  // រៀបចំអត្ថបទបកប្រែសម្រាប់ Footer
  const content = {
    km: {
      copyright: 'រក្សាសិទ្ធិគ្រប់យ៉ាង',
      by: 'ដោយ',
      created: 'បង្កើតដោយ',
      with: 'ជាមួយ'
    },
    en: {
      copyright: 'All Rights Reserved',
      by: 'by',
      created: 'Created By',
      with: 'with'
    },
    zh: {
      copyright: '版权所有',
      by: '由',
      created: '创建者',
      with: '使用'
    },
    ko: {
      copyright: '모든 권리 보유',
      by: '작성자',
      created: '제작자',
      with: '및'
    },
    ja: {
      copyright: '全著作権所有',
      by: '作成者',
      created: '作成者',
      with: 'および'
    }
  };

  const cur = content[language] || content.en;

  return (
    <footer className="bg-card border-t py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* ផ្នែកខាងឆ្វេង៖ រក្សាសិទ្ធិ */}
            <div className="text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <p className="text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center">
                ការរក្សាសិទ្ធិ © {currentYear} {cur.by}
                <img 
                  src="https://flagcdn.com/kh.svg" 
                  alt="Cambodia Flag" 
                  className="w-5 h-auto rounded-sm shadow-sm inline-block"
                />
                <span className="font-bold text-foreground">Heng Kim Hak</span>
                <span>. {cur.copyright}។</span>
              </p>
            </div>

            {/* ផ្នែកខាងស្តាំ៖ បច្ចេកវិទ្យាដែលប្រើ */}
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <span className="text-muted-foreground">{cur.created}</span>
              <span className="text-primary font-bold">Heng Kim Hak</span>
              <span className="text-muted-foreground">{cur.with}</span>
              <span className="text-primary font-semibold">React + TS</span>
            </div>
          </div>

          {/* ផ្នែកខាងក្រោម (Optional - សម្រាប់ទាក់ទង) */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'km' ? 'បើសិនជាអ្នកចង់ដឹងបន្ថែម សូមទាក់ទងខ្ញុំតាមរយៈ ' : 'For more information, contact me via '}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:underline font-medium"
                >
                  {language === 'km' ? 'ទម្រង់ទំនាក់ទំនង' : 'Contact Form'}
                </button>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
