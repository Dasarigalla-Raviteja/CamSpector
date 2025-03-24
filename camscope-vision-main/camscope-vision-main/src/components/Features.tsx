
import React, { useEffect, useRef } from 'react';
import { Car, Users, Check, ShieldOff } from 'lucide-react';

const Features: React.FC = () => {
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
                  } else if (el.classList.contains('animate-fade-in-right')) {
                    el.classList.add('animate-fade-in-right');
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

  const features = [
    {
      id: 'crash-detection',
      title: 'Vehicle Crash Detection',
      description: 'Detect traffic accidents in real-time to enable faster emergency response and improved road safety.',
      icon: <Car className="w-6 h-6 text-yellow-400" />,
      color: 'from-yellow-500/20 to-amber-500/20',
      benefits: [
        'Immediate accident detection',
        'Traffic flow monitoring',
        'Reduced response times',
        'Historical accident data'
      ],
      image: 'https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'social-distancing',
      title: 'Harassment Detection',
      description: 'Identify unwanted personal space intrusions and potential harassment scenarios for enhanced safety and security.',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/20',
      benefits: [
        'Personal space monitoring',
        'Harassment prevention',
        'Automated safety alerts',
        'Evidence capture for security'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'theft-detection',
      title: 'Theft Detection',
      description: 'Identify suspicious activities and potential theft in real-time to prevent losses and enhance security.',
      icon: <ShieldOff className="w-6 h-6 text-gray-400" />,
      color: 'from-gray-500/20 to-gray-700/20',
      benefits: [
        'Object removal detection',
        'Unauthorized access alerts',
        'Suspicious behavior recognition',
        'Integration with existing security'
      ],
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div id="features" className="py-20 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div 
            className="px-4 py-2 glass inline-flex items-center rounded-full mb-6 opacity-0" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            <span className="text-sm font-medium">Advanced Detection Capabilities</span>
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 max-w-xl opacity-0" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            Intelligent Monitoring Made <span className="text-gradient">Simple</span>
          </h2>
          <p 
            className="text-camspector-gray max-w-2xl opacity-0" 
            data-animate="true"
            style={{ opacity: 0 }}
          >
            CamSpector transforms standard CCTV cameras into smart monitoring systems with advanced AI capabilities for detecting critical events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="glass-card p-6 flex flex-col h-full opacity-0" 
              data-animate="true"
              style={{ opacity: 0, transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-camspector-gray mb-5">{feature.description}</p>
              
              <ul className="mb-6 space-y-2 mt-auto">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={16} className="text-camspector-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-camspector-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="relative w-full h-40 mt-auto overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
