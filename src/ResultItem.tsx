import { AlertCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ResultListItemData } from "./Models";

  
  function ResultsListItem({ data }: { data: ResultListItemData }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded-lg overflow-hidden mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="flex items-center space-x-4">
            {/* {data.icon} */}
            
            <span className="font-medium text-gray-700">{data.description}</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              {data.count}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <div className="p-4 bg-gray-50">
            {Object.entries(data.items).map(([key, item]: [string, any]) => {
            // const icon = require(`../images/${item.id}.svg`);
            return (
              <div
                key={key}
                className="flex items-center justify-between py-3 px-4 bg-white rounded-lg mb-2 last:mb-0"
              >
                <div className="flex items-center space-x-3">
                  {/* <img src={icon} alt={item.description} /> */}
                  <span className="text-gray-700">{item.description}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {item.count}
                    </span>
                </div>
                <div className="group relative">
                  <AlertCircle className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" />
                  <div className="absolute right-0 w-64 p-2 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 mt-1">
                    {item.count}
                  </div>
                </div>
              </div>
            )
        }
            )}
          </div>
        </div>
      </div>
    );
  }

  export default ResultsListItem;