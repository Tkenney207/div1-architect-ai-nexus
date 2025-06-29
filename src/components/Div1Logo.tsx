
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
      src="/lovable-uploads/d6c80344-0532-45db-bdd5-ed65dcfce08c.png"
      alt="Div1 Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Div1Logo;
