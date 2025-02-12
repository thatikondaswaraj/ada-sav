import React from 'react';

const ScannerIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="20"
        fill="#ff6347"
        dy="5"
      >
        <tspan
          x="50"
          y="50"
          fill="#ff6347"
          stroke="#ff4500"
          strokeWidth="1"
        >
          ADA
        </tspan>
      </text>

      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="#007bff"
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      <circle
        cx="50"
        cy="50"
        r="36"
        fill="none"
        stroke="rgba(0, 123, 255, 0.5)"
        strokeWidth="1"
        strokeDasharray="4,4"
      />
    </svg>
  );
};

export default ScannerIcon;