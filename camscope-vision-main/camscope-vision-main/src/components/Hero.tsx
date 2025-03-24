import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, ShieldOff } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const animateElements = () => {
      const elements = heroElement.querySelectorAll('[data-animate]');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0');
        }, 100 * index);
      });
    };

    setTimeout(animateElements, 100);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-12 relative flex items-center" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-[20%] w-72 h-72 bg-camspector-blue/20 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute top-[30%] -left-10 w-80 h-80 bg-camspector-teal/15 rounded-full blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left column - text content */}
        <div className="flex flex-col gap-6">
          <div className="px-4 py-2 glass inline-flex items-center self-start rounded-full opacity-0" data-animate>
            <div className="w-2 h-2 rounded-full bg-camspector-teal mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Real-time AI-powered Surveillance</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0" data-animate>
            Next-Gen <span className="text-gradient">Security</span> Through Intelligent Detection
          </h1>

          <p className="text-lg text-camspector-gray max-w-xl opacity-0" data-animate>
            CamSpector leverages cutting-edge AI and computer vision to transform ordinary CCTV cameras into intelligent monitoring systems that detect vehicle crashes, theft, and harassment.
          </p>

          <div className="flex flex-wrap gap-4 mt-2 opacity-0" data-animate>
            <a href="#features" className="btn-primary">
              Explore Features <ArrowRight size={18} className="ml-1 inline" />
            </a>
            <a href="#demo" className="btn-secondary">
              Watch Demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 opacity-0" data-animate>
            {[{
              icon: <Shield size={20} className="text-yellow-400" />, title: 'Crash Detection', path: '/vehicle-crash-detection'
            }, {
              icon: <ShieldOff size={20} className="text-gray-400" />, title: 'Theft Detection', path: '/theft-detection'
            }].map((item, idx) => (
              <div key={idx} className="glass p-4 rounded-xl cursor-pointer" onClick={() => item.path !== '#' && navigate(item.path)}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br from-gray-500/20 to-gray-700/20">
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Spline 3D Model */}
        <div className="relative opacity-0" data-animate>
          <div className="w-full h-[600px] overflow-visible">
            <Spline 
              scene="https://prod.spline.design/LtJ2yomq56p9baZo/scene.splinecode" 
              style={{ 
                width: '100%', 
                height: '100%',
                transform: 'scale(1.05)',
                transformOrigin: 'center center'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;