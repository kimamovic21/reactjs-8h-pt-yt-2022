import React from 'react';

const UserComponent = (props) => {
  const {name, age, city} = props;
  console.log(props);
  return (
    <div>
      <h4>My name is {name}. I am {age} years old. I come from {city}.</h4>
    </div>
  );
};

export default UserComponent;
