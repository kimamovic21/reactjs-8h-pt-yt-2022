import React, { useState } from 'react';

const useCount = (initialVal = 0) => {
  const [state, setState] = useState(initialVal);

  const increaseToggle = () => {
    setState((prev) => prev + 1);
    console.log(state);
  };

  const decreaseToggle = () => {
    setState((prev) => prev - 1);
    console.log(state);
  };

  const restartToggle = () => {
    setState(0);
    console.log(state);
  };

  return [state, increaseToggle, decreaseToggle, restartToggle];
};

export default useCount;
