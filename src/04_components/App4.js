import React, { useState } from 'react';
import './App4.css';
import Name from './Name';
import Counter from './Counter';

const App4 = () => {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const incrementAgeHandler = () => {
    // setAge(26);
    setAge(age + 1);
    console.log(age + 1);
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
 
  return (
    <div className='App03'>

        <div>{age}</div>
        <button onClick={incrementAgeHandler}>Increase Age</button>

        <br/><br/>

        <div>
          <input type='text' onChange={inputChangeHandler}/>
          <div>{inputValue}</div> 
        </div> 
       
       <br/><br/>

        <Name />
        <br /> <br />

        <Counter />
    </div>
  );
};

export default App4;
