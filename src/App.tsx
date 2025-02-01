import React, { useEffect, useState } from 'react';
import { ScanSearch } from 'lucide-react';
import SearchInput from './SearchInput';
import ResultsList from './ResultsList';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle URL submission here
    console.log('Checking URL:', url);
  };

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket');
    };

    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

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

          <SearchInput/>

          <ResultsList/>
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
