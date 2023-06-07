import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };
  
  const setToZeroHandler = () => {
    setCount(0);
  };

  return (
    <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={setToZeroHandler}>Set to Zero</button>
        <div>
            {count}
        </div>
    </div>
  );
};

export default Counter;
