import { useState, useEffect } from 'react';


const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [expired, setExpired] = useState(false);
  
    useEffect(() => {
      const updateCurrentTime = () => {
        const newTime = new Date();
        setCurrentTime(newTime);
  
        const expirationTime = new Date(currentTime.getTime() + 1 * 60 * 1000);
        if (newTime > expirationTime) {
          setExpired(true);
          clearInterval(intervalId);
        }
      };
  
      const intervalId = setInterval(updateCurrentTime, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentTime]);
  
    return (
      <div>
        <p style={{textAlign:"center"}}>Текущее время: {currentTime.toLocaleTimeString()}</p>
        {expired ? (
          <p style={{ color: 'red' }}>Время истекло!</p>
        ) : (
          <p>Таймер будет остановлен через 1 минуту</p>
        )}
      </div>
    );
  };
  
  export default Timer;