import { useState, useEffect } from 'react';
import './Screenshot.css';

const Screenshot = ({ url }) => {
  const [imageSrc, setImageSrc] = useState(''); // State to store the base64 image
  const [loading, setLoading] = useState(false); // State to handle loading state

  // Fetch the image whenever the `url` prop changes
  useEffect(() => {
    const fetchImage = async () => {
      if (!url) {
        setImageSrc(''); // Clear the image if no URL is provided
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/th?url=${encodeURIComponent(url)}`); // Pass the URL as a query parameter
        const data = await response.json();
        setImageSrc(`data:image/png;base64,${data.base64}`); // Convert base64 to a valid image URL
      } catch (error) {
        console.error('Error fetching image:', error);
        alert('Failed to fetch the screenshot. Please check the URL and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [url]); // Re-run effect when the `url` prop changes

  return (
    <div className="screenshot-container">
      {loading ? (
        <p>Generating screenshot...</p>
      ) : imageSrc ? (
        <img src={imageSrc} alt="Screenshot" className="screenshot-image" />
      ) : (
        <p>No URL provided. Please set a URL in the parent component.</p>
      )}
    </div>
  );
};

export default Screenshot;