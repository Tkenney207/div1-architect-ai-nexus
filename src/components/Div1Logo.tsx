
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
      viewBox="0 0 200 80"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      
      {/* Background geometric shape */}
      <circle cx="40" cy="40" r="35" fill="url(#orangeGradient)" opacity="0.8" />
      <polygon points="20,20 60,20 70,40 60,60 20,60 10,40" fill="url(#blueGradient)" opacity="0.9" />
      
      {/* Stylized "D" */}
      <path
        d="M15 25 L15 55 L25 55 Q35 55 40 50 Q45 45 45 40 Q45 35 40 30 Q35 25 25 25 Z"
        fill="white"
        stroke="none"
      />
      <circle cx="35" cy="40" r="8" fill="url(#orangeGradient)" />
      
      {/* Modern "1" with geometric accent */}
      <rect x="50" y="25" width="8" height="30" fill="white" />
      <polygon points="50,25 58,25 58,30 55,30 55,35 50,35" fill="url(#orangeGradient)" />
      <rect x="45" y="50" width="18" height="5" fill="white" />
      
      {/* Text "DIV1" */}
      <text x="85" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="url(#textGradient)">
        DIV1
      </text>
      <text x="85" y="55" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="normal" fill="#94a3b8">
        PLATFORM
      </text>
      
      {/* Accent dots */}
      <circle cx="175" cy="25" r="3" fill="url(#orangeGradient)" />
      <circle cx="185" cy="35" r="2" fill="url(#blueGradient)" />
      <circle cx="175" cy="45" r="3" fill="url(#orangeGradient)" />
    </svg>
  );
};

export default Div1Logo;
