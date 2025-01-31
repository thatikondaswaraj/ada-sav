import React, { useState } from 'react';
import { ScanSearch } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle URL submission here
    console.log('Checking URL:', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Header text goes here..
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Sub header text goes here
          </p>

          {/* URL Input Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative">
            <div className="flex items-center">
              <div className="relative flex-grow">
                <ScanSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-0"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-r-lg hover:bg-blue-700 transition-colors">
                Scan 
              </button>
            </div>
          </form>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </main>
    </div>
  );
}

export default App;