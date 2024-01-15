import { useState, useEffect } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{color:"purple"}}>Текущее время: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Timer;