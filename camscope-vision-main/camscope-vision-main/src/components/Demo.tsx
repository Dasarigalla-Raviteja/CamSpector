
import React, { useEffect, useRef } from 'react';
import { Play, PlayCircle } from 'lucide-react';

const Demo: React.FC = () => {
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

  // Demo video data
  const demoVideos = [
    {
      id: 'fall-detection',
      title: 'Fall Detection Demo',
      thumbnail: 'https://images.unsplash.com/photo-1674574124792-3be232f1952f?q=80&w=1000&auto=format&fit=crop',
      duration: '0:45'
    },
    {
      id: 'crash-detection',
      title: 'Vehicle Crash Analysis',
      thumbnail: 'https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=1000&auto=format&fit=crop',
      duration: '1:12'
    },
    {
      id: 'social-distancing',
      title: 'Social Distance Monitoring',
      thumbnail: 'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?q=80&w=1000&auto=format&fit=crop',
      duration: '0:58'
    }
  ];

  return (
    <div id="demo" className="py-20 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div 
            className="px-4 py-2 glass inline-flex items-center rounded-full mb-6 opacity-0" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            <span className="text-sm font-medium">See It In Action</span>
          </div>
          
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            CamSpector <span className="text-gradient">Demo Videos</span>
          </h2>
          
          <p 
            className="text-camspector-gray max-w-2xl opacity-0 animate-fade-in" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            Watch CamSpector's real-time detection capabilities in action with our demonstration videos showing various scenarios.
          </p>
        </div>
        
        {/* Featured video */}
        <div 
          className="mb-12 opacity-0 animate-scale-in" 
          data-animate="true"
          style={{ opacity: 0 }}
        >
          <div className="glass-card overflow-hidden rounded-2xl relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop" 
              alt="Main demo" 
              className="w-full h-auto md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center">
              <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Complete CamSpector Overview</h3>
                <p className="text-camspector-gray text-sm md:text-base max-w-2xl">
                  See how our intelligent system works across all detection scenarios in this comprehensive demo.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo video grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {demoVideos.map((video, index) => (
            <div 
              key={video.id} 
              className="glass-card overflow-hidden rounded-xl relative group cursor-pointer opacity-0 animate-fade-in" 
              data-animate="true"
              style={{ opacity: 0, transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center">
                <div className="absolute top-3 right-3 px-2 py-1 glass rounded-md text-xs font-medium">
                  {video.duration}
                </div>
                
                <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="text-lg font-bold">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
