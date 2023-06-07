import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RandomAge = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState({});

  const fetchRandomAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
         .then(res => {
            console.log(res.data);
            setPredictedAge(res.data);
         });
  };

  useEffect(() => {
    fetchRandomAge();
  }, []); 

  return (
    <div>
        <input 
            type="text" 
            placeholder='Example Kerim...'
            onChange={(e) => {setName(e.target.value)}}
        />
        <button onClick={fetchRandomAge}>Predict Age</button>
        <h2>Name: {predictedAge?.name}</h2>
        <h2>Predicted Age : {predictedAge?.age}</h2>
        <h2>Count: {predictedAge?.count}</h2>
    </div>
  );
};

export default RandomAge;


// API: https://api.agify.io/?name=kerim
