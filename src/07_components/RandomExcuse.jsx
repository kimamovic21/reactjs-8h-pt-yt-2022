import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomExcuse = () => {
  const [randomExcuse, setRandomExcuse] = useState("");

  const fetchRandomExcuse = (excuse) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
         .then(res => {
            console.log(res.data);
            console.log(res.data[0]);
            console.log(res.data[0]?.excuse);
            setRandomExcuse(res.data[0]?.excuse);
         });
  };

  useEffect(() => {
    fetchRandomExcuse();
  }, []); 

  return (
    <div>
        <h1>Generate An Excuse</h1>
        <button onClick={() => fetchRandomExcuse('party')}>Party</button>
        <button onClick={() => fetchRandomExcuse('family')}>Family</button>
        <button onClick={() => fetchRandomExcuse('office')}>Office</button>
        <p>{randomExcuse}</p>
    </div>
  );
};

export default RandomExcuse;


// API: https://excuser-three.vercel.app/
// API: https://excuser-three.vercel.app/v1/excuse
