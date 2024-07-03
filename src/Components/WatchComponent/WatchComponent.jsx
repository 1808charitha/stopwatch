
import React, { useState, useEffect } from 'react';
import '../../App.css';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
        <h1>Stopwatch</h1>
    <div className="stopwatch">
      
      <div className="timer-title">Timer</div>
      <div className="time">
        {Math.floor(time / 3600).toString().padStart(2, '0')}:
        {Math.floor((time % 3600) / 60).toString().padStart(2, '0')}:
        {Math.floor(time % 60).toString().padStart(2, '0')}
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)} className="start">Start</button>
        <button onClick={() => setRunning(false)} className="stop">Stop</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
    </div>
  );
};

export default StopWatch;

// const WatchComponent = () => {
//   const [time, setTime] = useState(0); 
//   const [isRunning, setIsRunning] = useState(false); 
//   const intervalRef = useRef(null); 

//   useEffect(() => {
    
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startWatch = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       intervalRef.current = setInterval(() => {
//         setTime(prevTime => prevTime + 1);
//       }, 1000); 
//     }
//   };

//   const stopWatch = () => {
//     if (isRunning) {
//       setIsRunning(false);
//       clearInterval(intervalRef.current);
//     }
//   };

//   const resetWatch = () => {
//     setIsRunning(false);
//     clearInterval(intervalRef.current);
//     setTime(0); 
//   };

  
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     const paddedMinutes = String(minutes).padStart(2, '0');
//     const paddedSeconds = String(seconds).padStart(2, '0');
//     return `${paddedMinutes}:${paddedSeconds}`;
//   };

//   return (
//     <React.Fragment>
//       <p>{formatTime(time)}</p>
//       <button onClick={startWatch}>Start</button>
//       <button onClick={stopWatch}>Stop</button>
//       <button onClick={resetWatch}>Reset</button>
//     </React.Fragment>
//   );
// };

// export default WatchComponent;













