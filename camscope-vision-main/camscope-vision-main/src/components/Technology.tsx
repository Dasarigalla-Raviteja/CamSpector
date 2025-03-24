import React, { useEffect, useRef } from 'react';
import { Camera, Cpu, Database, BarChart } from 'lucide-react';

const Technology: React.FC = () => {
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
                  } else if (el.classList.contains('animate-fade-in-left')) {
                    el.classList.add('animate-fade-in-left');
                  } else if (el.classList.contains('animate-fade-in-right')) {
                    el.classList.add('animate-fade-in-right');
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
    <div id="technology" className="py-20 relative" ref={sectionRef}>
      {/* Background accent - changed to grey */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gray-700/10 rounded-full filter blur-[80px] opacity-30"></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div>
            <div 
              className="px-4 py-2 glass inline-flex items-center rounded-full mb-6 opacity-0" 
              data-animate="true"
              style={{ opacity: 0 }}
            >
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in" 
              data-animate="true"
              style={{ opacity: 0 }}
            >
              Advanced <span className="text-gradient">Technology</span> Behind CamSpector
            </h2>
            
            <p 
              className="text-gray-400 mb-8 opacity-0 animate-fade-in" 
              data-animate="true"
              style={{ opacity: 0 }}
            >
              CamSpector leverages cutting-edge computer vision and deep learning algorithms to transform ordinary surveillance systems into intelligent monitoring solutions.
            </p>
            
            <div 
              className="grid sm:grid-cols-2 gap-6 opacity-0 animate-fade-in" 
              data-animate="true"
              style={{ opacity: 0 }}
            >
              <div className="glass p-5 rounded-xl border border-white/10">
                <Cpu size={24} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">YOLO Algorithm</h3>
                <p className="text-sm text-gray-400">
                  You Only Look Once (YOLO) provides real-time object detection with high accuracy and efficiency.
                </p>
              </div>
              
              <div className="glass p-5 rounded-xl border border-white/10">
                <Camera size={24} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">CCTV Integration</h3>
                <p className="text-sm text-gray-400">
                  Works with existing camera infrastructure without requiring expensive hardware upgrades.
                </p>
              </div>
              
              <div className="glass p-5 rounded-xl border border-white/10">
                <Database size={24} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-gray-400">
                  Edge computing ensures minimal latency for time-sensitive detection scenarios.
                </p>
              </div>
              
              <div className="glass p-5 rounded-xl border border-white/10">
                <BarChart size={24} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-gray-400">
                  Comprehensive reports and insights with customizable alerts and notifications.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Tech visualization - fixed positioning */}
          <div 
            className="relative opacity-0 animate-fade-in-right lg:h-[500px]" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            <div className="relative glass border border-white/10 p-4 rounded-2xl overflow-hidden h-full">
              {/* Replace external image with a local one or create a mockup visualization */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative flex flex-col items-center justify-center">
                <div className="text-center p-4 text-sm font-medium text-gray-400">AI technology visualization</div>
                
                {/* Add network visualization elements */}
                <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-sm">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square border border-gray-700 rounded-md flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
                
                {/* Add connection lines */}
                <div className="absolute inset-0 z-0 opacity-30">
                  <div className="w-[1px] h-24 bg-gray-600 absolute top-1/4 left-1/4 transform -rotate-45"></div>
                  <div className="w-[1px] h-32 bg-gray-600 absolute top-1/3 left-1/2 transform rotate-45"></div>
                  <div className="w-[1px] h-28 bg-gray-600 absolute bottom-1/3 right-1/4 transform -rotate-12"></div>
                  <div className="w-[1px] h-20 bg-gray-600 absolute bottom-1/4 right-1/3 transform rotate-30"></div>
                  <div className="w-[1px] h-36 bg-gray-600 absolute top-1/3 right-1/4 transform -rotate-60"></div>
                </div>
              </div>
              
              {/* Overlay with tech details */}
              <div className="absolute top-4 left-4 px-3 py-2 glass rounded-md text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span>YOLO v8 Active</span>
                </div>
              </div>
              
              {/* Detection boxes overlay simulation */}
              <div className="absolute top-1/3 left-1/4 w-16 h-24 border-2 border-gray-400 rounded opacity-70"></div>
              <div className="absolute top-1/2 right-1/3 w-14 h-20 border-2 border-gray-300 rounded opacity-70"></div>
              
              {/* Processing data animation */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium">Processing</span>
                    <span className="text-xs text-gray-400">24 FPS</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gray-500 to-gray-300 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating tech card - repositioned to bottom right instead of top right to avoid overlap */}
            <div className="absolute -right-4 bottom-24 glass p-4 rounded-xl border border-white/10 animate-float max-w-[180px] z-10 shadow-lg">
              <div className="text-xs font-medium mb-2">Detection Confidence</div>
              <div className="flex justify-between text-xs mb-1">
                <span>Person</span>
                <span className="text-gray-300">98.4%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full mb-3">
                <div className="h-full bg-gray-300 rounded-full" style={{ width: '98.4%' }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span>Fall</span>
                <span className="text-gray-400">92.7%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full">
                <div className="h-full bg-gray-400 rounded-full" style={{ width: '92.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;