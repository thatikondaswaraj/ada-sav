import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ScreenshotProps {
  url: string;
}

const Screenshot: React.FC<ScreenshotProps> = ({ url }) => {
  const [imageSrc, setImageSrc] = useState<string>(''); // State to store the base64 image
  const [loading, setLoading] = useState<boolean>(false); // State to handle loading state

  // Fetch the image whenever the `url` prop changes
  useEffect(() => {
    const fetchImage = async () => {
      if (!url) {
        setImageSrc(''); // Clear the image if no URL is provided
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/th?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        setImageSrc(`data:image/png;base64,${data.base64}`); // Convert base64 to a valid image URL
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageSrc('https://placehold.co/600x300/1f2937/ffffff?text=Screenshot+Not+Available');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [url]); // Re-run effect when the `url` prop changes

  return (
    <div className="flex gap-4 bg-gray-800 rounded-lg overflow-hidden mb-4">
      {/* Left side - Screenshot */}
      <div className="w-1/2 h-[300px] relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" />
              <p className="text-sm text-gray-400">Generating screenshot...</p>
            </div>
          </div>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Website Screenshot"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x300/1f2937/ffffff?text=Screenshot+Not+Available';
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-gray-400">No URL provided. Please set a URL in the parent component.</p>
          </div>
        )}
      </div>

      {/* Right side - URL and Info */}
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-white mb-2">Target URL</h3>
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-sm text-gray-300 break-all">{url}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            Status: {loading ? 'Scanning...' : 'Scan Complete'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screenshot;