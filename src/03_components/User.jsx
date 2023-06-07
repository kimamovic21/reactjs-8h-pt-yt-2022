import React from 'react';

const User = (props) => {
  const {name, age} = props;

  return (
    <div>
        <h4>{name} {age}</h4>
    </div>
  );
};

export default User;
