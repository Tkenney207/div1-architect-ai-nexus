
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
    <svg
      viewBox="0 0 140 40"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "Div" text */}
      <text 
        x="4" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontSize="34" 
        fontWeight="900" 
        fill="white"
        letterSpacing="0"
      >
        Div
      </text>
      
      {/* Square box for "1" */}
      <rect 
        x="95" 
        y="3" 
        width="34" 
        height="34" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
      />
      
      {/* "1" inside the box */}
      <text 
        x="112" 
        y="28" 
        fontFamily="Arial, sans-serif" 
        fontSize="26" 
        fontWeight="900" 
        fill="white"
        textAnchor="middle"
      >
        1
      </text>
    </svg>
  );
};

export default Div1Logo;
