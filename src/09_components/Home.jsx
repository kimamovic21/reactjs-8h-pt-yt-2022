import React, {useContext} from 'react';
import { AppContext } from './App9';

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Home Page</h1>
      <h2>The user is {username}</h2>
    </div>
  );
};

export default Home;
