
import React from 'react';

interface Div1LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '5xl';
}

const Div1Logo: React.FC<Div1LogoProps> = ({ className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl',
    '5xl': 'text-6xl'
  };

  return (
    <span className={`font-semibold text-white ${sizeClasses[size]} ${className}`}>
      AI Specification review and updating engine
    </span>
  );
};

export default Div1Logo;
