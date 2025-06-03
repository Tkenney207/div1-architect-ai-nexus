
import React from 'react';

interface Div1LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Div1Logo: React.FC<Div1LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-20 w-auto',
    xl: 'h-28 w-auto'
  };

  return (
    <svg
      viewBox="0 0 180 50"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "Div" text */}
      <text 
        x="5" 
        y="38" 
        fontFamily="Arial, sans-serif" 
        fontSize="42" 
        fontWeight="400" 
        fill="white"
        letterSpacing="-1px"
      >
        Div
      </text>
      
      {/* Square box for "1" */}
      <rect 
        x="130" 
        y="6" 
        width="38" 
        height="38" 
        fill="none" 
        stroke="white" 
        strokeWidth="2.5"
      />
      
      {/* "1" inside the box */}
      <text 
        x="149" 
        y="32" 
        fontFamily="Arial, sans-serif" 
        fontSize="28" 
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
