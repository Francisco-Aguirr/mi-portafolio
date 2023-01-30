


import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem('seconds')) || 0
  );
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem('minutes')) || 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (seconds === 60) {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  useEffect(() => {
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
  }, [seconds, minutes]);

  return (
    <div>
      <p>{minutes}:{seconds} Minutes: </p>
      
    </div>
  );
};

export default Timer;
