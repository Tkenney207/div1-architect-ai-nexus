
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
      viewBox="0 0 120 60"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      
      {/* Main circle background */}
      <circle cx="30" cy="30" r="28" fill="url(#orangeGradient)" />
      
      {/* Inner white circle */}
      <circle cx="30" cy="30" r="20" fill="white" />
      
      {/* "D" shape */}
      <path
        d="M20 20 L20 40 L25 40 Q32 40 35 35 Q38 30 38 30 Q38 30 35 25 Q32 20 25 20 Z"
        fill="url(#orangeGradient)"
      />
      
      {/* "1" shape */}
      <rect x="40" y="20" width="4" height="20" fill="url(#orangeGradient)" />
      <polygon points="40,20 44,20 44,24 42,24" fill="url(#orangeGradient)" />
      <rect x="38" y="38" width="8" height="2" fill="url(#orangeGradient)" />
      
      {/* Text "DIV1" */}
      <text x="65" y="25" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1f2937">
        DIV1
      </text>
      <text x="65" y="40" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="normal" fill="#6b7280">
        PLATFORM
      </text>
    </svg>
  );
};

export default Div1Logo;
