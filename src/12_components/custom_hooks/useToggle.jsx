import React, { useState } from 'react';

const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
    console.log(state);
  };

  return [state, toggle];
};

export default useToggle;
