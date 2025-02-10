import React from 'react';
import { Category } from '../Models';
import { COLORS } from '../Constants';

function calculateStrokeDashOffset(percentage: number, circumference: number): number {
  return circumference - (percentage / 100) * circumference;
}

export const PieChartAnalysis: React.FC<any> = ({ accessibilityData }) => {

  const size = 100;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const total = Object.values(accessibilityData).reduce((sum, category) => sum + category.count, 0);


  // Calculate percentages and prepare segments
  let accumulatedPercentage = 0;
  const segments = [
    {
      color: COLORS['error'],//'#ef4444', 
      percentage: Math.round((accessibilityData.error.count / total) * 100),
      label: 'Errors',
      count: accessibilityData.error.count
    },
    {
      color: COLORS['alert'],//'#F87171', 
      percentage: Math.round((accessibilityData.alert.count / total) * 100),
      label: 'Alerts',
      count: accessibilityData.alert.count
    },
    {
      color: COLORS['feature'],//'#A78BFA', 
      percentage: Math.round((accessibilityData.feature.count / total) * 100),
      label: 'Features',
      count: accessibilityData.feature.count
    },
    {
      color: COLORS['structure'],//'#3B82F6', 
      percentage: Math.round((accessibilityData.structure.count / total) * 100),
      label: 'Structure',
      count: accessibilityData.structure.count
    },
    {
      color: COLORS['aria'],//'#06B6D4', 
      percentage: Math.round((accessibilityData.aria.count / total) * 100),
      label: 'ARIA',
      count: accessibilityData.aria.count
    }

  ];

  const mainSegment = segments[0]; // Structure is our main segment

  return (
    <div className="flex justify-around">
      {/* SVG for the circular progress */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {segments.map((segment, index) => {
          const offset = calculateStrokeDashOffset(100 - accumulatedPercentage, circumference);
          accumulatedPercentage += segment.percentage;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000 ease-in-out"
            />
          );
        })}
      </svg>

      {/* Center text */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">{mainSegment.percentage}%</span>
            <span className="text-sm text-gray-300">{mainSegment.label}</span>
          </div> */}

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
            <span className="text-white text-sm">
              {segment.label}&nbsp;
              {/* : {segment.count}  */}
              ({segment.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}