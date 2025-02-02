import { useState, useRef } from "react";
import { Search, ScanSearch } from "lucide-react";

const SearchInput = (props: any) => {
  const [url, setUrl] = useState("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      props.searchedUrl(url);
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const handleSelect = (selectedUrl: string) => {
    setUrl(selectedUrl);
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <div className="relative flex-grow">
          <ScanSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your website URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setShowDropdown(previousSearches.length > 0)}
            className="w-full pl-12 pr-4 py-4 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleCheck}
          className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors"
        >
          Scan
        </button>
      </div>

      {/* Dropdown with Previous Searches */}
      {showDropdown && (
        <div
          className="absolute w-full bg-white border border-gray-300 rounded-b-lg shadow-lg overflow-hidden z-10 mt-[-1px]"
          onMouseLeave={() => setShowDropdown(false)}
        >
          {previousSearches.map((search, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer transition flex items-center gap-2"
              onClick={() => handleSelect(search)}
            >
              <Search size={16} className="text-gray-400" />
              <span className="truncate">{search}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
