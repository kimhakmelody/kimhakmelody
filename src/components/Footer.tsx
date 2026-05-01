import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  const content = {
    km: { copyright: 'រក្សាសិទ្ធិគ្រប់យ៉ាង', createdBy: 'បង្កើតដោយ' },
    en: { copyright: 'All Rights Reserved', createdBy: 'Created By' },
    zh: { copyright: '版权所有', createdBy: '创建者' },
    ko: { copyright: '모든 권리 보유', createdBy: '제작자' },
    ja: { copyright: '全著作権所有', createdBy: '作成者' }
  };

  const cur = content[language] || content.en;

  return (
    <footer className="py-8 border-t bg-card text-center">
      <div className="container mx-auto px-4">
        <p className="mb-2">© {currentYear} **Heng Kim Hak**. {cur.copyright}.</p>
        <p className="text-muted-foreground text-sm">
          {cur.createdBy} <span className="text-primary font-bold">Heng Kim Hak</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
