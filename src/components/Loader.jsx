import React, { useState, useEffect } from 'react';
import './Loader.css'; 

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data, API call)
    const fetchData = async () => {
      // Assume the asynchronous operation takes 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className={`loader-container ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="loader"></div>
      <br></br>
      <div id="font1">
      Loading...</div>
    </div>
  );
};

export default Loader;
