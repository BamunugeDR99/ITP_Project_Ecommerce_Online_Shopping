import React, { useState } from "react";

// using hooks
function CounterFunction() {
  let [number, setNumber] = useState(0);
  //let [number,dNumber] = useState(0)

  function increment() {
    setNumber(++number);
  }

  function decrement() {
    setNumber(--number);
  }

  return (
    <div>
      <h1>Counter = {number}</h1>
      <button onClick={(e) => increment()}>Increment</button>
      <button onClick={(e) => decrement()}>decrement</button>
    </div>
  );
}

export default CounterFunction;
