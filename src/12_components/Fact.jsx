import React from 'react';
import useGetFact from './custom_hooks/useGetFact';

const Fact = () => {
  const {data, isFactLoading, refetchData} = useGetFact();

  if(isFactLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <p>{data?.text}</p>
    </div>
  );
};

export default Fact;
