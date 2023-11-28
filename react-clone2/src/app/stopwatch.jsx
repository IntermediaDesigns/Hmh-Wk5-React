import { useState, useEffect } from 'react';


// Create a timer that starts counting up automatically, stops, and clears the timer, add styling to space out the buttons
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const clearTimer = () => {
    clearInterval(intervalId);
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const buttonStyle = {
    marginRight: '5px',
    marginLeft: '5px',
    marginTop: '5px'
  };

  return (
    <div>
      <div style={{ color: 'green', fontSize: '50px' }}>{seconds} seconds</div>
      <button style={buttonStyle} onClick={startTimer}>Start</button>
      <button style={buttonStyle} onClick={stopTimer}>Stop</button>
      <button style={buttonStyle} onClick={clearTimer}>Clear</button>
    </div>
  );
}
