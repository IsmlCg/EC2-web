import React, { useState, useRef, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(10);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(timerRef.current);
    }
  }, [count]);

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>Stop</button>
    </div>
  );
}

export default Countdown;
