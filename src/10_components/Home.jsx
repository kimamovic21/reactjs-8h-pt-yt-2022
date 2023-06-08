import React from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const Home = () => {
  const { 
    data: randomFact, 
    isLoading, 
    isError, refetch 
  } = useQuery(["fact"], async () => {
    return await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
                 .then((res) => res.data);
  });

  if(isError) {
    return <h2>Sorry, there was an error</h2>;
  };

  if(isLoading) {
    return <p>Loading...</p>;
  };

  return (
    <div>
      <h1>This is the Home Page</h1>
      <button onClick={ refetch}> Update Data </button>
      <p>{randomFact?.text}</p>
    </div>
  );
};

export default Home;
