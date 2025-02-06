import React, { useState } from 'react';
import { ChevronDown, AlertCircle, AlertTriangle, Check, Code, Layout, Settings, Info } from 'lucide-react';
import { AccessibilityItem } from '../Models';

interface AccordionProps {
  title: string;
  count: number;
  items: {
    [key: string]: AccessibilityItem;
  };
  color: string;
}

const getCategoryIcon = (category: string, itemType?: string) => {
  // First try to match the specific item type
  if (itemType) {
    switch (itemType.toLowerCase()) {
      case 'alt_long':
      case 'alt':
      case 'alt_null':
      case 'alt_link':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'label_title':
      case 'label':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'heading_possible':
      case 'h1':
      case 'h2':
      case 'h3':
        return <Layout className="w-5 h-5 text-green-500" />;
      case 'link_suspicious':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'underline':
        return <Settings className="w-5 h-5 text-purple-500" />;
    }
  }

  // Fall back to category-based icons
  switch (category.toLowerCase()) {
    case 'errors':
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    case 'contrast errors':
      return <AlertTriangle className="w-5 h-5 text-orange-500" />;
    case 'alerts':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'features':
      return <Check className="w-5 h-5 text-green-500" />;
    case 'structural elements':
      return <Layout className="w-5 h-5 text-blue-500" />;
    case 'aria':
      return <Code className="w-5 h-5 text-purple-500" />;
    default:
      return <Settings className="w-5 h-5 text-gray-500" />;
  }
};

export const AccessibilityAccordion: React.FC<AccordionProps> = ({
  title,
  count,
  items,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-150"
        style={{ borderLeft: `4px solid ${color}` }}
      >
        <div className="flex items-center space-x-4">
          {getCategoryIcon(title)}
          <span className="font-medium text-gray-700">{title}</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
            {count}
          </span>
        </div>
        <ChevronDown
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden trasition-all duration-200 ${
          isOpen ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-gray-50">
          {Object.entries(items)
          .filter( (value: [string, AccessibilityItem]) => value[1].count > 0)
          .map(([key, item]) => (
            <div
              key={key}
              className="bg-white rounded-lg p-2 mb-2 last:mb-0 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    {getCategoryIcon(title, item.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-800 truncate">
                      {item.description}
                    </h3>
                    <p className="text-sm text-gray-500">ID: {item.id}</p>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full flex-shrink-0">
                    {item.count}
                  </span>
                  <div className="flex-shrink-0 relative group">
                    <button
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150"
                      aria-label="Show more information"
                    >
                      <Info className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                    {/* <div className="absolute right-0 w-72 p-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 mt-1 shadow-lg">
                      <p className="font-medium mb-2">XPaths:</p>
                      <div className="max-h-32 overflow-y-auto space-y-1">
                        {item.xpaths?.map((xpath, index) => (
                          <code
                            key={index}
                            className="block text-xs bg-gray-700 p-1.5 rounded"
                          >
                            {xpath}
                          </code>
                        )) || <p className="text-gray-400">No XPaths available</p>}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};