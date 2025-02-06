import { useState, useRef } from "react";
import { Search, ScanSearch } from "lucide-react";
import ScannerIcon from "./ScannerIcon";

const SearchInput = (props: any) => {
  const [initiallayout, setInitiallayout] = useState(true);
  const [url, setUrl] = useState("https://wave.webaim.org/");
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
      props.searchedUrl(url);
      setInitiallayout(false);
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
    <div className="w-full max-w-[800px] px-8">
      {initiallayout && (
        <div>
          <div className="text-center mb-6">
            <div className="inline-block animate-float mb-2">
              {/* <div className="bg-blue-50 p-6 rounded-full"> */}
              <ScannerIcon className="w-12 h-12 text-blue-600" />
              {/* </div> */}
            </div>
            <h1 className="text-3xl font-bold text-gray-600 mb- tracking-tight">
              ADAWatch
            </h1>
            <p text-sm text-gray-500>Web accessibility and ADA compliance, elegantly streamlined.</p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 transition-colors duration-200 
                        ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>

              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter website address (e.g., www.example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  className="flex-1 pl-12 pr-4 py-4 text-base bg-blue-50 text-gray-800 
                                 placeholder-gray-400 rounded-xl border border-blue-100
                                 focus:border-blue-200 focus:ring-2 focus:ring-blue-100 
                                 outline-none transition-all duration-200"
                />

                <button
                  onClick={handleCheck}
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

            <p className="text-sm text-gray-500 mt-4">Effortlessly identify issues, implement solutions, and achieve compliance, all just a click away.</p>
            {/* </form> */}
          </div>
        </div>
      )}
      {!initiallayout && (
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
      )
      }
    </div>
  )

};

export default SearchInput;
