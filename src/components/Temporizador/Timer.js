import React, { useState, useEffect } from 'react';
import './Timer.css'; // Asegúrate de que esta ruta sea correcta

function Timer({ isGameOver }) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (isGameOver) {
      // Detener el temporizador si el juego ha terminado
      return; // No hacemos nada aquí porque el temporizador ya está detenido
    }

    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    // Limpia el temporizador al desmontar o cambiar el estado de isGameOver
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
