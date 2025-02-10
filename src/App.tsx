import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import SearchInput from "./components/SearchInput";
import { motion } from "framer-motion";
import ProcessUrlList from "./components/UrlsList";
import ResultsList from "./ResultsList";
import ScannerAnimation from "./ScannerAnimation";

interface UrlItem {
  id: number;
  url: string;
  progress: number;
}

const urlList: UrlItem[] = [
  { id: 1, url: "https://example.com/file1", progress: 80 },
  { id: 2, url: "https://example.com/file2", progress: 40 },
  { id: 3, url: "https://example.com/file3", progress: 100 },
  { id: 4, url: "https://example.com/file4", progress: 10 },
  { id: 5, url: "https://example.com/file5", progress: 80 },
  { id: 6, url: "https://example.com/file6", progress: 70 },
  { id: 7, url: "https://example.com/file7", progress: 100 },
  { id: 8, url: "https://example.com/file8", progress: 35 },
];

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fetchResults, setFetchResults] = useState(true);

  useEffect(() => {
    if (url && fetchResults) {
      setLoading(true);
      setTimeout(() => {
        if(!fetchResults) return;

        setLoading(false);
        setShowProgress(true);
      }, 4000); // Simulating API call delay

      setTimeout(() => {
        if(!fetchResults) return;

        setShowProgress(false);
        setShowResults(true);
      }, 5000);
    }
  }, [url, fetchResults]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onmessage = (event) => console.log("Received message:", event.data);
    ws.onclose = () => console.log("Disconnected from WebSocket");
    ws.onerror = (error) => console.error("WebSocket error:", error);

    return () => ws.close();
  }, []);

  const handleUrlSet = (url: string) => {
    setUrl(url);
    setFetchResults(!!url);
  }

  const handleBackEvent = () => {
    setUrl("");
    setLoading(false);
    setShowProgress(false);
    setShowResults(false);
    setFetchResults(false);
  }

  return (
    <div className="min-h-screen bg-white-900 flex flex-col items-center justify-center  relative overflow-hidden p-1">
      {/* Animated Search Input */}
      <motion.div
        initial={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-80%",
        }}
        animate={
          url
            ? {
              top: "1rem",
              left: "auto",
              translateX: "0",
              translateY: "0",
              scale: 0.9,
            }
            : {}
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute w-full max-w-4xl"
      >
        <SearchInput searchedUrl={(url: string) => handleUrlSet(url)} onBack={handleBackEvent} />
      </motion.div>

      {loading && (
        <div className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
        <ScannerAnimation isScanning={true} />
      </div>
      )}

      {/* Main Layout - Left (Progress List) & Right (Animated Loader) */}
      <div className="w-full max-w-6xl flex mt-70">
        {/* Progress List on Left */}
        {(!loading && showProgress || showResults) && (
          <motion.div
            className="w-1/3 p-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProcessUrlList urlsList={urlList} />
          </motion.div>
        )}

        {/* Animated Loader on Right */}
        {showProgress && (
          <motion.div
            className="w-2/3 flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Loader2 className="animate-spin w-10 h-10 text-blue-400" />
          </motion.div>
        )}

        {showResults && (
          <motion.div
            className="w-2/3 p-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ResultsList />

          </motion.div>
        )}

      </div>

      {/* Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
      </div> */}
    </div>
  );
}

export default App;
