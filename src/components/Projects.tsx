import { useTheme } from '../contexts/ThemeContext';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const { language } = useTheme();

  const content = {
    km: { title: 'គម្រោងរបស់ខ្ញុំ', view: 'មើលគម្រោង', source: 'កូដប្រភព', p1_t: 'គេហទំព័រ E-Commerce', p1_d: 'ប្រព័ន្ធលក់ទំនិញអនឡាញពេញលេញ' },
    en: { title: 'My Projects', view: 'Live Demo', source: 'Source Code', p1_t: 'E-Commerce Website', p1_d: 'Full online shopping system' },
    zh: { title: '我的项目', view: '查看演示', source: '源码', p1_t: '电子商务网站', p1_d: '完整的在线购物系统' },
    ko: { title: '나의 프로젝트', view: '라이브 데모', source: '소스 코드', p1_t: '이커머스 웹사이트', p1_d: '완전한 온라인 쇼핑 시스템' },
    ja: { title: '私のプロジェクト', view: 'ライブデモ', source: 'ソースコード', p1_t: 'ECサイト', p1_d: '完全なオンラインショッピングシステム' }
  };

  const cur = content[language] || content.en;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-gradient">{cur.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <Card className="overflow-hidden group">
            <div className="h-48 bg-slate-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{cur.p1_t}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{cur.p1_d}</p>
              <div className="flex gap-3">
                <Button className="flex-1" size="sm">{cur.view}</Button>
                <Button variant="outline" className="flex-1" size="sm">{cur.source}</Button>
              </div>
            </div>
          </Card>
          {/* ប្អូនអាចថែម Card ផ្សេងទៀតតាមគំរូនេះ */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
