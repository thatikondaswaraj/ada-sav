import React from 'react';

const ScannerIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <text x="50" y="50" text-anchor="middle" font-family="Arial" font-size="20" fill="#ff6347" dy="5">
        <tspan x="50" y="50" fill="#ff6347" stroke="#ff4500" stroke-width="1">ADA</tspan>
      </text>

      <circle cx="50" cy="50" r="35" fill="none" stroke="#007bff" stroke-width="2" stroke-dasharray="4,4" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(0, 123, 255, 0.5)" stroke-width="1" stroke-dasharray="4,4" />

      {/* <line x1="50" y1="50" x2="50" y2="15" stroke="#00ff00" stroke-width="3" stroke-linecap="round">
        <animate attributeName="stroke-opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="4s"
          repeatCount="indefinite" />
      </line>

      <circle cx="50" cy="50" r="35" fill="none" stroke="#007bff" stroke-width="2" stroke-dasharray="4,4">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="180"
          dur="1s"
          begin="0s"
          repeatCount="indefinite" />
      </circle> */}
    </svg>

  );
};

export default ScannerIcon;