
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                ការរក្សាសិទ្ធិ © {currentYear} ដោយ🇰🇭 គឹម ហាក់ រក្សាសិទ្ធិបែបគ្រប់យ៉ាង។
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground">Created By</span>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">Kim Hak Melody</span>
                <span className="text-muted-foreground">And</span>
                <span className="text-primary font-semibold">Hak React + TypeScript</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                បើសិនជាអ្នកចង់ដឹងបន្ថែម ឬមានគម្រោងថ្មី សូមទាក់ទងខ្ញុំតាមរយៈ{' '}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:underline"
                >
                  ទំរង់ទំនាក់ទំនង
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
