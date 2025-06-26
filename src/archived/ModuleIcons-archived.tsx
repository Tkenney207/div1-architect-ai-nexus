
// ARCHIVED: Master1 and Division1 Icons - Complete functionality preserved for future restoration
// These components were removed from the main ModuleIcons.tsx but preserved here

import React from 'react';

interface ModuleIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Master1Logo = ({ size = 'md', className = '' }: ModuleIconProps) => {
  const sizeClasses = {
    sm: 'w-32 h-12',
    md: 'w-48 h-18',
    lg: 'w-64 h-24'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`} 
      viewBox="0 0 240 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="master1LogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      
      {/* Geometric Icon - Document/specification layers */}
      <g transform="translate(8, 16)">
        <rect x="2" y="6" width="20" height="24" rx="2" fill="url(#master1LogoGradient)" fillOpacity="0.1" stroke="url(#master1LogoGradient)" strokeWidth="1.5"/>
        <rect x="4" y="4" width="20" height="24" rx="2" fill="url(#master1LogoGradient)" fillOpacity="0.2" stroke="url(#master1LogoGradient)" strokeWidth="1.5"/>
        <rect x="6" y="2" width="20" height="24" rx="2" fill="url(#master1LogoGradient)" fillOpacity="0.3" stroke="url(#master1LogoGradient)" strokeWidth="1"/>
        
        {/* Content lines */}
        <line x1="10" y1="8" x2="22" y2="8" stroke="url(#master1LogoGradient)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="12" x2="20" y2="12" stroke="url(#master1LogoGradient)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="url(#master1LogoGradient)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8"/>
        <line x1="10" y1="20" x2="18" y2="20" stroke="url(#master1LogoGradient)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
        
        {/* Checkmark */}
        <path 
          d="M20 14L22 16L26 12" 
          stroke="url(#master1LogoGradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      
      {/* Text - Master1 */}
      <text x="54" y="30" fill="url(#master1LogoGradient)" fontSize="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="-0.02em">
        MASTER1
      </text>
      <text x="54" y="54" fill="#9CA3AF" fontSize="8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" letterSpacing="0.05em">
        INTELLIGENT SPECIFICATION SYNTHESIS
      </text>
    </svg>
  );
};

export const Master1Icon = ({ size = 'md', className = '' }: ModuleIconProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="master1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Document/specification layers */}
      <rect x="6" y="8" width="24" height="28" rx="3" fill="url(#master1Gradient)" fillOpacity="0.1" stroke="url(#master1Gradient)" strokeWidth="2"/>
      <rect x="8" y="6" width="24" height="28" rx="3" fill="url(#master1Gradient)" fillOpacity="0.2" stroke="url(#master1Gradient)" strokeWidth="1.5"/>
      <rect x="10" y="4" width="24" height="28" rx="3" fill="url(#master1Gradient)" fillOpacity="0.3" stroke="url(#master1Gradient)" strokeWidth="1"/>
      
      {/* Content lines representing specifications */}
      <line x1="14" y1="10" x2="28" y2="10" stroke="url(#master1Gradient)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="14" x2="26" y2="14" stroke="url(#master1Gradient)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
      <line x1="14" y1="18" x2="30" y2="18" stroke="url(#master1Gradient)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
      <line x1="14" y1="22" x2="24" y2="22" stroke="url(#master1Gradient)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
      <line x1="14" y1="26" x2="28" y2="26" stroke="url(#master1Gradient)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
      
      {/* Checkmark indicating compliance/validation */}
      <path 
        d="M26 20L28 22L32 18" 
        stroke="url(#master1Gradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
