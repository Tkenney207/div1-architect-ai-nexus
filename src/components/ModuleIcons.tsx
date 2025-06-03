
import React from 'react';

interface ModuleIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ManufacturerBaseIcon = ({ size = 'md', className = '' }: ModuleIconProps) => {
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
        <linearGradient id="manufacturerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Database/Grid structure representing manufacturer data */}
      <rect x="4" y="4" width="32" height="32" rx="4" fill="url(#manufacturerGradient)" fillOpacity="0.1" stroke="url(#manufacturerGradient)" strokeWidth="2"/>
      <rect x="8" y="8" width="8" height="8" rx="2" fill="url(#manufacturerGradient)"/>
      <rect x="20" y="8" width="8" height="8" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.7"/>
      <rect x="32" y="8" width="4" height="8" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.5"/>
      <rect x="8" y="20" width="8" height="8" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.7"/>
      <rect x="20" y="20" width="8" height="8" rx="2" fill="url(#manufacturerGradient)"/>
      <rect x="32" y="20" width="4" height="8" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.5"/>
      <rect x="8" y="32" width="8" height="4" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.5"/>
      <rect x="20" y="32" width="8" height="4" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.5"/>
      <rect x="32" y="32" width="4" height="4" rx="2" fill="url(#manufacturerGradient)" fillOpacity="0.3"/>
    </svg>
  );
};

export const EngageIcon = ({ size = 'md', className = '' }: ModuleIconProps) => {
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
        <linearGradient id="engageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Conversational bubbles representing engagement */}
      <path 
        d="M8 12C8 8.68629 10.6863 6 14 6H26C29.3137 6 32 8.68629 32 12V20C32 23.3137 29.3137 26 26 26H18L12 32V26H14C10.6863 26 8 23.3137 8 20V12Z" 
        fill="url(#engageGradient)" 
        fillOpacity="0.1" 
        stroke="url(#engageGradient)" 
        strokeWidth="2"
      />
      <circle cx="16" cy="16" r="2" fill="url(#engageGradient)"/>
      <circle cx="20" cy="16" r="2" fill="url(#engageGradient)" fillOpacity="0.7"/>
      <circle cx="24" cy="16" r="2" fill="url(#engageGradient)" fillOpacity="0.5"/>
      {/* Secondary bubble */}
      <path 
        d="M20 22C20 21.4477 20.4477 21 21 21H31C31.5523 21 32 21.4477 32 22V28C32 28.5523 31.5523 29 31 29H27L24 32V29H21C20.4477 29 20 28.5523 20 28V22Z" 
        fill="url(#engageGradient)" 
        fillOpacity="0.3"
      />
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
