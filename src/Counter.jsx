import React, { useState } from "react";

function Counter({ demo }) {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <h1>{demo}</h1>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </div>
  );
}

export default Counter;
