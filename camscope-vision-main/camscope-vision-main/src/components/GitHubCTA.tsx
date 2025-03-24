
import React, { useEffect, useRef } from 'react';
import { Github, ArrowRight } from 'lucide-react';

const GitHubCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                if (el instanceof HTMLElement) {
                  el.style.opacity = '1';
                  
                  if (el.classList.contains('animate-fade-in')) {
                    el.classList.add('animate-fade-in');
                  } else if (el.classList.contains('animate-scale-in')) {
                    el.classList.add('animate-scale-in');
                  }
                }
              }, 150 * index);
            });
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="py-20 relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-camspector-purple/10 rounded-full filter blur-[100px] opacity-50"></div>
      
      <div className="section-container">
        <div className="glass border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-camspector-blue/20 to-camspector-teal/10 rounded-full filter blur-[60px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="grid md:grid-cols-5 gap-10 items-center relative z-10">
            {/* Text content - 3 columns */}
            <div className="md:col-span-3">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" 
                data-animate="true"
                style={{ opacity: 0 }}
              >
                Ready to <span className="text-gradient">Implement</span> CamSpector?
              </h2>
              
              <p 
                className="text-camspector-gray mb-8 opacity-0 animate-fade-in" 
                data-animate="true"
                style={{ opacity: 0 }}
              >
                Our open-source project is available on GitHub. Get started with easy-to-follow documentation and transform your ordinary surveillance into intelligent monitoring systems today.
              </p>
              
              <div 
                className="flex flex-wrap gap-4 opacity-0 animate-fade-in" 
                data-animate="true"
                style={{ opacity: 0 }}
              >
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <Github size={18} className="mr-2" /> View on GitHub
                </a>
                
                <a href="#features" className="btn-secondary">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Image - 2 columns */}
            <div 
              className="md:col-span-2 opacity-0 animate-scale-in" 
              data-animate="true"
              style={{ opacity: 0 }}
            >
              <div className="glass rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
                  alt="Code implementation" 
                  className="w-full h-auto object-cover"
                />
                
                <div className="p-5 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm text-camspector-gray">
                    <div>$ pip install camspector</div>
                    <div>$ python -m camspector --source camera.mp4</div>
                    <div className="text-green-400">Initializing YOLO model...</div>
                    <div className="text-green-400">Model loaded successfully!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubCTA;
