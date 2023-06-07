import React, { useState, useEffect } from 'react';

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('Component mounted!');

    return () => {
        console.log('Component unmounted!');
    };
  }, []);

  return (
    <div>
        <input 
            type="text" 
            onChange={(e) => setText(e.target.value)}
        />
        <h4> {text} </h4>
    </div>
  );
};

export default Text;
