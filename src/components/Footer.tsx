import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <p className="text-muted-foreground flex items-center gap-1.5">
                การរក្សាសិទ្ធិ © {currentYear} ដោយ
                {/* ត្រង់នេះ៖ ប្រើ <img> ដើម្បីបង្ហាញទង់ជាតិឱ្យចេញជារូប */}
                <img 
                  src="https://flagcdn.com/kh.svg" 
                  alt="Cambodia Flag" 
                  className="w-5 h-auto inline-block rounded-sm shadow-sm"
                  style={{ position: 'relative', top: '-1px' }} // តម្រង់ឱ្យស្មើអក្សរ
                /> 
                គឹម ហាក់។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <span className="text-muted-foreground">Created By</span>
              <span className="text-primary font-semibold">Kim Hak Melody</span>
              <span className="text-muted-foreground">with</span>
              <span className="text-primary font-semibold">React + TS</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                បើសិនជាអ្នកចង់ដឹងបន្ថែម ឬមានគម្រោងថ្មី សូមទាក់ទងខ្ញុំតាមរយៈ{' '}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary hover:underline font-medium"
                >
                  ទម្រង់ទំនាក់ទំនង
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
