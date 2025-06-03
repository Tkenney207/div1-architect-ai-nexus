
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
      viewBox="0 0 120 40"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "Div" text */}
      <text 
        x="2" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontSize="32" 
        fontWeight="700" 
        fill="white"
        letterSpacing="-0.5px"
      >
        Div
      </text>
      
      {/* Square box for "1" */}
      <rect 
        x="80" 
        y="4" 
        width="32" 
        height="32" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      />
      
      {/* "1" inside the box */}
      <text 
        x="96" 
        y="26" 
        fontFamily="Arial, sans-serif" 
        fontSize="24" 
        fontWeight="700" 
        fill="white"
        textAnchor="middle"
      >
        1
      </text>
    </svg>
  );
};

export default Div1Logo;
