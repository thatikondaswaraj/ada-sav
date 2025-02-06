import React from 'react';

interface ScannerAnimationProps {
  isScanning?: boolean;
}

const ScannerAnimation: React.FC<ScannerAnimationProps> = ({ isScanning = true }) => {
  return (
    <div className="relative w-[640px] h-[480px]">
      {/* Browser Window Frame */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 640 480" className="shadow-2xl">
          {/* Browser Window */}
          <rect
            x="0"
            y="0"
            width="640"
            height="480"
            rx="8"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          
          {/* Browser Header */}
          <rect
            x="0"
            y="0"
            width="640"
            height="40"
            rx="8"
            fill="#f8fafc"
          />
          
          {/* Browser Controls */}
          <circle cx="24" cy="20" r="6" fill="#ef4444"/>
          <circle cx="44" cy="20" r="6" fill="#fbbf24"/>
          <circle cx="64" cy="20" r="6" fill="#22c55e"/>
          
          {/* URL Bar */}
          <rect x="96" y="8" width="440" height="24" rx="4" fill="#e2e8f0"/>
          
          {/* Navigation Bar */}
          <rect x="0" y="40" width="640" height="50" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
          <rect x="40" y="55" width="40" height="20" rx="2" fill="#e2e8f0"/>
          <rect x="100" y="55" width="60" height="20" rx="2" fill="#e2e8f0"/>
          <rect x="180" y="55" width="50" height="20" rx="2" fill="#e2e8f0"/>
          <rect x="250" y="55" width="70" height="20" rx="2" fill="#e2e8f0"/>
          
          {/* Hero Section */}
          <rect x="40" y="120" width="560" height="160" rx="4" fill="#f1f5f9"/>
          <rect x="80" y="150" width="240" height="32" rx="2" fill="#e2e8f0"/>
          <rect x="80" y="190" width="480" height="16" rx="2" fill="#e2e8f0"/>
          <rect x="80" y="220" width="120" height="32" rx="4" fill="#3b82f6"/>
          
          {/* Content Grid */}
          <rect x="40" y="320" width="170" height="120" rx="4" fill="#f1f5f9"/>
          <rect x="235" y="320" width="170" height="120" rx="4" fill="#f1f5f9"/>
          <rect x="430" y="320" width="170" height="120" rx="4" fill="#f1f5f9"/>
          
          {/* Content Grid Headers */}
          <rect x="60" y="340" width="130" height="16" rx="2" fill="#e2e8f0"/>
          <rect x="255" y="340" width="130" height="16" rx="2" fill="#e2e8f0"/>
          <rect x="450" y="340" width="130" height="16" rx="2" fill="#e2e8f0"/>
          
          {/* Content Grid Text */}
          <rect x="60" y="370" width="130" height="12" rx="2" fill="#e2e8f0"/>
          <rect x="60" y="390" width="100" height="12" rx="2" fill="#e2e8f0"/>
          <rect x="255" y="370" width="130" height="12" rx="2" fill="#e2e8f0"/>
          <rect x="255" y="390" width="100" height="12" rx="2" fill="#e2e8f0"/>
          <rect x="450" y="370" width="130" height="12" rx="2" fill="#e2e8f0"/>
          <rect x="450" y="390" width="100" height="12" rx="2" fill="#e2e8f0"/>
          
          {/* Scanning Overlay */}
          { (
            <>
              {/* Scanning Line Shadow */}
              <rect
                x="0"
                y="0"
                width="640"
                height="4"
                fill="black"
                opacity="0.1"
                filter="url(#shadow)"
              >
                <animate
                  attributeName="y"
                  from="0"
                  to="480"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </rect>
              
              {/* Scanning Line */}
              <rect
                x="0"
                y="0"
                width="640"
                height="4"
                fill="url(#scanLineGradient)"
                opacity="0.9"
              >
                <animate
                  attributeName="y"
                  from="0"
                  to="480"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </rect>
              
              {/* Scanning Gradient Overlay */}
              <rect
                x="0"
                y="0"
                width="640"
                height="480"
                fill="url(#scanGradient)"
                opacity="0.1"
              >
                <animate
                  attributeName="y"
                  from="0"
                  to="480"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </rect>
            </>
          )}
          
          {/* Gradient and Filter Definitions */}
          <defs>
            <linearGradient id="scanLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa"/>
              <stop offset="50%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#60a5fa"/>
            </linearGradient>
            
            <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="2"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ScannerAnimation;