import React from 'react';
import './App3.css';
import User from './User';
import Planets from './Planets';

const App3 = () => {
  const age = 15;
  const isGreen = true;
  const names = ['Kerim', 'John', 'Mike', 'Liam'];
  const users = [
    { name: 'Kerim', age: 26},
    { name: 'Jake', age: 25},
    { name: 'George', age: 24}, 
  ];

  return (
    <div className='App3'>

        {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}

        <h2 style={{color: 'white', backgroundColor:'black'}}>This has color</h2>
        <h2 style={{color: isGreen ? 'green' : 'black'}}>This has color</h2>

        {isGreen && <button>Click</button>}

        <h3>{names[0]}</h3>
        <ul>
            {names.map((name, index) => {
                console.log(name);
                console.log(index);
                return (
                    <li key={index}>
                        {name}
                    </li>
                )
            })}
        </ul>

        <ul>
            {users.map((user, index) => {
                console.log(user);
                console.log(index);
                return (<li key={index}>
                            {user.name} {user.age}
                        </li>
                )
            })}
        </ul>

        <div>
        {users.map((user, index) => {
                console.log(user);
                console.log(index);
                return (
                    <User name={user.name} age={user.age}/>
                );
            })}
        </div>

        <Planets />
    </div>
  );
};

export default App3;
