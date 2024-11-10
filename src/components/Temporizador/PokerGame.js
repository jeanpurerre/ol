import React, { useState, useEffect } from 'react';

function Timer({ isGameOver }) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (isGameOver) {
      // Detener el temporizador cuando el juego termina
      return setTimeElapsed(0);
    }

    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    // Limpiar el temporizador al desmontar o cuando `isGameOver` cambie
    return () => clearInterval(timer);
  }, [isGameOver]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      {formatTime(timeElapsed)}
    </div>
  );
}

export default Timer;
