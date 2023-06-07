import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomFact = () => {
  const [randomFact, setRandomFact] = useState("");

  const fetchRandomFact = () => {
    axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
         .then(res => {
            console.log(res.data);
            setRandomFact(res.data.text);
         });
  };

  useEffect(() => {
    fetchRandomFact();
  }, []); 

  return (
    <div>
        <button onClick={fetchRandomFact}>Generate Random Fact</button>
        <p>{randomFact}</p>
    </div>
  );
};

export default RandomFact;


// API: https://uselessfacts.jsph.pl/api/v2/facts/random
