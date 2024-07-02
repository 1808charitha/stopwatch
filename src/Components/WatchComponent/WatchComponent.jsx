import React, { useState, useEffect, useRef } from 'react';
import './WatchComponent.css';

const WatchComponent = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 

  useEffect(() => {
    
    return () => clearInterval(intervalRef.current);
  }, []);

  const startWatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); 
    }
  };

  const stopWatch = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const resetWatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0); 
  };

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <React.Fragment>
      <p>{formatTime(time)}</p>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </React.Fragment>
  );
};

export default WatchComponent;













