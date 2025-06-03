
import React from 'react';

interface Div1LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Div1Logo: React.FC<Div1LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-32 w-auto',
    xl: 'h-40 w-auto'
  };

  return (
    <svg
      viewBox="0 0 200 60"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "Div" text */}
      <text 
        x="10" 
        y="42" 
        fontFamily="Arial, sans-serif" 
        fontSize="48" 
        fontWeight="400" 
        fill="white"
        letterSpacing="-1px"
      >
        Div
      </text>
      
      {/* Square box for "1" */}
      <rect 
        x="140" 
        y="8" 
        width="44" 
        height="44" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
      />
      
      {/* "1" inside the box */}
      <text 
        x="162" 
        y="42" 
        fontFamily="Arial, sans-serif" 
        fontSize="36" 
        fontWeight="400" 
        fill="white"
        textAnchor="middle"
      >
        1
      </text>
    </svg>
  );
};

export default Div1Logo;
