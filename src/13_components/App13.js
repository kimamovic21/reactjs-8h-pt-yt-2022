import React from 'react';
import Person from './Person';

const App13 = () => {
  return (
    <div className='App13'>
        <Person 
            name='Kerim Imamovic'
            email='kerim@gmail.com'
            age={26}
            isMarried={false}
            friends={['James', 'John', 'Robert']}
        />
    </div>
  );
};

export default App13;
