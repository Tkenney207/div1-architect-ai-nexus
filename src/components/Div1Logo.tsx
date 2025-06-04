
import React from 'react';

interface Div1LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '5xl';
}

const Div1Logo: React.FC<Div1LogoProps> = ({ className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto',
    '2xl': 'h-32 w-auto',
    '5xl': 'h-80 w-auto'
  };

  return (
    <img
      src="/lovable-uploads/f697aada-ee5e-4230-9990-1919c395d1b8.png"
      alt="Div1 Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Div1Logo;
