import React from 'react';

const Planets = () => {
  const planets = [
    {name: 'Mars', isGasPlanet: false},
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Venus', isGasPlanet: false},
    {name: 'Neptun', isGasPlanet: true},
    {name: 'Uranus', isGasPlanet: true},
  ];
  
  return (
    <div className='App2'>
        {planets.map((planet, index) => {
            console.log(planet, index);
            return (
                <ul key={index}>
                    <p>{planet.isGasPlanet && planet.name}</p>
                </ul>
        )})}
    </div>
  );
};

export default Planets;
