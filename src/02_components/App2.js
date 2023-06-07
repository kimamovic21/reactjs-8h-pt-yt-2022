import React from 'react';
import './App2.css';
import UserComponent from './UserComponent';

const App2 = () => {
  let myName = `Kerim`;
  let sentence = `I come from Sarajevo`;
  let email = <h2>imamovic.kerim@gmail.com</h2>;

  return (
    <div className="App">
      <div> Hello {myName} 🖐</div>
      <div>{sentence}</div> 
      <div>{email}</div>
      <UserComponent name='Kerim' age='26' city='Sarajevo'/>
      <UserComponent name='John' age='30' city='New York'/>
    </div>
  );
};

export default App2;
