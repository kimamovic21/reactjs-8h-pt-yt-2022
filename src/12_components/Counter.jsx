import React from 'react';
import useCount from './custom_hooks/useCount';

const Counter = () => {
 
  const [count, increaseToggle, decreaseToggle, restartToggle ] = useCount(0);  

  return (
    <div>
        <button onClick={increaseToggle}> Increase </button>
        <button onClick={decreaseToggle}> Decrease </button>
        <button onClick={restartToggle}> Restart </button>
        <p>{count}</p>
    </div>
  );
};

export default Counter;
