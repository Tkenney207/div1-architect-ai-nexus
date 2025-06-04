
import React from 'react';

interface Div1LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Div1Logo: React.FC<Div1LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto'
  };

  return (
    <img
      src="/lovable-uploads/8f321891-d9dc-4c1a-8fc3-275369102a99.png"
      alt="Div1 Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Div1Logo;
