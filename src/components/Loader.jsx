// Loader.js

import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onLoaderComplete }) => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalId);
      } else {
        intervalId = setInterval(() => {
          setAnimationIndex((prevIndex) => (prevIndex + 1) % 6);
        }, 200);
      }
    };

    const clearScreen = () => {
      setTimeout(() => {
        clearInterval(intervalId);
        onLoaderComplete(); 
      }, 4000);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    intervalId = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 200);

    clearScreen();

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onLoaderComplete]);

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(
        <div
          key={i}
          className={`circle ${animationIndex === i ? 'active' : ''}`}
        />
      );
    }
    return circles;
  };

  return <div className="loader">{renderCircles()}</div>;
};

export default Loader;
