
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
      viewBox="0 0 180 50"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "D" */}
      <text 
        x="0" 
        y="40" 
        fontFamily="Arial, sans-serif" 
        fontSize="48" 
        fontWeight="700" 
        fill="white"
        letterSpacing="2px"
      >
        D
      </text>
      
      {/* "i" without dot */}
      <text 
        x="45" 
        y="40" 
        fontFamily="Arial, sans-serif" 
        fontSize="48" 
        fontWeight="700" 
        fill="white"
        letterSpacing="2px"
      >
        i
      </text>
      
      {/* Dot over "i" */}
      <circle 
        cx="52" 
        cy="12" 
        r="4" 
        fill="white"
      />
      
      {/* "v" */}
      <text 
        x="70" 
        y="40" 
        fontFamily="Arial, sans-serif" 
        fontSize="48" 
        fontWeight="700" 
        fill="white"
        letterSpacing="2px"
      >
        v
      </text>
      
      {/* Square box for "1" */}
      <rect 
        x="125" 
        y="5" 
        width="40" 
        height="40" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
      />
      
      {/* "1" inside the box */}
      <text 
        x="145" 
        y="35" 
        fontFamily="Arial, sans-serif" 
        fontSize="32" 
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
