import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
  return (
    <div>
        <h4>Name: {props.name}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Age: {props.age}</h4>
        <h4>This person {props.isMarried ? 'is' : 'is not'} married.</h4>
        {props.friends.map((friend, index) => (
            <span key={index}>{friend} </span>
        ))}
    </div>
  );
};

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
};

export default Person;
