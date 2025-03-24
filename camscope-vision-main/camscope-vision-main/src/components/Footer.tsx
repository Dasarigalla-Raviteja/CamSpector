
import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 text-camspector-gray max-w-md">
              CamSpector transforms ordinary CCTV cameras into intelligent monitoring systems with advanced AI-powered detection capabilities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-camspector-gray hover:text-white transition-colors">Features</a></li>
              <li><a href="#technology" className="text-camspector-gray hover:text-white transition-colors">Technology</a></li>
              <li><a href="#demo" className="text-camspector-gray hover:text-white transition-colors">Demo</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-camspector-gray hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-camspector-gray">Email: info@camspector.ai</li>
              <li className="text-camspector-gray">Twitter: @camspector</li>
              <li className="text-camspector-gray">GitHub: github.com/camspector</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-camspector-gray text-sm">© {new Date().getFullYear()} CamSpector. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-camspector-gray hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-camspector-gray hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
