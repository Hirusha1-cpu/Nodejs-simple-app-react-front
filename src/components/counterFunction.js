import React, { useState } from 'react';

export function CounterFunction() {
  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>This is a function-based component!</h1>
      <h1>Counter = {number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
