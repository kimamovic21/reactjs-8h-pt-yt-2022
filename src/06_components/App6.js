import React, { useState } from 'react';
import './App6.css';
import Text from './Text';

const App6 = () => { 
  const [showText, setShowText] = useState(false);

  return (
    <div className='App6'>
        <button onClick={() => setShowText(!showText)}>
            Show Text
        </button>
        {showText && <Text />}
    </div>
  );
};

export default App6;


// mounting
// updating
// unmounting
