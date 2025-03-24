
import React from 'react';
import logoSvg from '../assets/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoSvg} alt="CamSpector Logo" className="w-10 h-10" />
      <div className="font-bold text-2xl tracking-tight text-white">
        Cam<span className="text-gradient">Spector</span>
      </div>
    </div>
  );
};

export default Logo;
