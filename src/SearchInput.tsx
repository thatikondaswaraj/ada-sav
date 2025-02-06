import { useState, useRef } from "react";
import { Search, ScanSearch } from "lucide-react"; // Icons for better UI

const SearchInput = () => {
  const [url, setUrl] = useState("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleCheck = () => {
    if (isValidUrl(url)) {
      if (!previousSearches.includes(url)) {
        setPreviousSearches([url, ...previousSearches].slice(0, 5)); // Store last 5 searches
      }
      alert("Checking URL: " + url);
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const handleSelect = (selectedUrl: string) => {
    setUrl(selectedUrl);
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  const handleSubmit = () => {}

  return (
    <div className="w-full max-w-[800px] px-8">
      <div className="text-center mb-12">
        <div className="inline-block animate-float mb-6">
          <div className="bg-blue-50 p-6 rounded-full">
            {/* <ScannerIcon className="w-16 h-16 text-blue-600" /> */}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3 tracking-tight">
          SiteWatch
        </h1>
        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Real-time website monitoring and analysis
        </p>
      </div>
      
      <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 transition-colors duration-200 
                ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} />
            </div>
            
            <div className="flex gap-3">
              <input
                type="url"
                placeholder="Enter website address (e.g., www.example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 pl-12 pr-4 py-4 text-base bg-blue-50 text-gray-800 
                         placeholder-gray-400 rounded-xl border border-blue-100
                         focus:border-blue-200 focus:ring-2 focus:ring-blue-100 
                         outline-none transition-all duration-200"
              />
              
              <button
                type="submit"
                className="px-8 py-4 text-base font-semibold whitespace-nowrap
                         text-white bg-blue-600 rounded-xl hover:bg-blue-700 
                         transition-all duration-200 focus:outline-none focus:ring-2 
                         focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed
                         shadow-sm hover:shadow-md"
                disabled={!url.trim()}
              >
                Start Scanning
              </button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            The website address is usually found in your browser's address bar
          </p>
        </form>
      </div>
    </div>
  )

  // return (
  //   <div className="max-w-2xl mx-auto relative">
  //     {/* Search Box */}
  //     <div className="flex items-center">
  //       <div className="relative flex-grow">
  //       <ScanSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        
  //       <input
  //         ref={inputRef}
  //         type="text"
  //         placeholder="Enter your website URL..."
  //         value={url}
  //         onChange={(e) => setUrl(e.target.value)}
  //         onFocus={() => setShowDropdown(previousSearches.length > 0)}
  //         className="w-full pl-12 pr-4 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-0"
  //       />
  //       </div>
  //       <button
  //         onClick={handleCheck}
  //         className="bg-blue-600 text-white px-8 py-4 rounded-r-lg hover:bg-blue-700 transition-colors"
  //       >
  //         Check
  //       </button>
  //     </div>

  //     {/* Dropdown with Previous Searches */}
  //     {showDropdown && (
  //       <div
  //         className="absolute w-full bg-white border border-gray-300 mt-2 rounded-xl shadow-lg overflow-hidden z-10"
  //         onMouseLeave={() => setShowDropdown(false)}
  //       >
  //         {previousSearches.map((search, index) => (
  //           <div
  //             key={index}
  //             className="p-3 hover:bg-gray-100 cursor-pointer transition flex items-center gap-2"
  //             onClick={() => handleSelect(search)}
  //           >
  //             <Search size={16} className="text-gray-400" />
  //             <span className="truncate">{search}</span>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default SearchInput;
