import { useState, useEffect } from "react";

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [stopTimer, setStopTimer] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (!stopTimer) {
          setCurrentTime(new Date());
        }
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [stopTimer]);
  
    useEffect(() => {
      const stopTimerId = setTimeout(() => {
        setStopTimer(true);
      }, 30000);
  
      return () => {
        clearTimeout(stopTimerId);
      };
    }, []);
  
  
    return (
      <div    style={{textAlign: "center"}}>
        <h2 style={{color:"green"}}>Текущее время: {currentTime.toLocaleTimeString()}</h2>
        {stopTimer ? (
          <p style={{ color: 'red' }}>Время истекло!</p>
        ) : (
          <p>Таймер будет остановлен через 30 секунд</p>
        )}
      </div>
    );
  };
  
  export default Timer;
  