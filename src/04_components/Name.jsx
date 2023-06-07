import React, { useState } from 'react';

const Name = () => {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  const toggleTextHandler = () => {
    console.log(showText);
    setShowText(!showText);
  };

  const toggleColorHandler = () => {
    console.log(textColor);
    setTextColor(textColor === 'black' ? 'red' : 'black');
  };

  return (
    <div>
        <button onClick={toggleTextHandler}>Show / Hide</button>
        {showText && <h1>Hi, my name is Kerim</h1>}

        <br/><br/>

        <button onClick={toggleColorHandler}>Change text color</button>
        <h2 style={{color: textColor}}>Kerim Imamovic</h2>
    </div>
  );
};

export default Name;
