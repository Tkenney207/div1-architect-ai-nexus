import React from 'react';

interface ModuleIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ManufacturerBaseLogo = ({ size = 'md', className = '' }: ModuleIconProps) => {
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
        <linearGradient id="manufacturerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      
      {/* Geometric Icon - Database/Grid structure */}
      <g transform="translate(8, 16)">
        <rect x="0" y="0" width="32" height="32" rx="4" fill="url(#manufacturerLogoGradient)" fillOpacity="0.1" stroke="url(#manufacturerLogoGradient)" strokeWidth="2"/>
        <rect x="4" y="4" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)"/>
        <rect x="13" y="4" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.8"/>
        <rect x="22" y="4" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.6"/>
        <rect x="4" y="13" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.8"/>
        <rect x="13" y="13" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)"/>
        <rect x="22" y="13" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.6"/>
        <rect x="4" y="22" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.6"/>
        <rect x="13" y="22" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.6"/>
        <rect x="22" y="22" width="6" height="6" rx="1" fill="url(#manufacturerLogoGradient)" fillOpacity="0.4"/>
      </g>
      
      {/* Text - Manufacturer-Base */}
      <text x="54" y="26" fill="url(#manufacturerLogoGradient)" fontSize="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="-0.02em">
        MANUFACTURER
      </text>
      <text x="54" y="42" fill="url(#manufacturerLogoGradient)" fontSize="14" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="-0.02em">
        BASE
      </text>
      <text x="54" y="54" fill="#9CA3AF" fontSize="8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" letterSpacing="0.05em">
        AI-DRIVEN PRODUCT INTELLIGENCE
      </text>
    </svg>
  );
};

export const EngageLogo = ({ size = 'md', className = '' }: ModuleIconProps) => {
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
        <linearGradient id="engageLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      
      {/* Geometric Icon - Conversation bubbles */}
      <g transform="translate(8, 16)">
        <path 
          d="M4 8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8V16C28 18.2091 26.2091 20 24 20H16L10 26V20H8C5.79086 20 4 18.2091 4 16V8Z" 
          fill="url(#engageLogoGradient)" 
          fillOpacity="0.1" 
          stroke="url(#engageLogoGradient)" 
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="1.5" fill="url(#engageLogoGradient)"/>
        <circle cx="16" cy="12" r="1.5" fill="url(#engageLogoGradient)" fillOpacity="0.7"/>
        <circle cx="20" cy="12" r="1.5" fill="url(#engageLogoGradient)" fillOpacity="0.5"/>
        
        {/* Secondary bubble */}
        <path 
          d="M18 22C18 21.4477 18.4477 21 19 21H27C27.5523 21 28 21.4477 28 22V26C28 26.5523 27.5523 27 27 27H25L22 30V27H19C18.4477 27 18 26.5523 18 26V22Z" 
          fill="url(#engageLogoGradient)" 
          fillOpacity="0.3"
        />
      </g>
      
      {/* Text - Engage */}
      <text x="54" y="30" fill="url(#engageLogoGradient)" fontSize="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="-0.02em">
        ENGAGE
      </text>
      <text x="54" y="54" fill="#9CA3AF" fontSize="8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" letterSpacing="0.05em">
        AI-FACILITATED PROJECT CHARTER
      </text>
    </svg>
  );
};

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

// Keep the original icon exports for backward compatibility
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
