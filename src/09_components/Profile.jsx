import React, { useContext } from 'react';
import ChangeProfile from './ChangeProfile';
import { AppContext } from './App9';

const Profile = () => {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>PROFILE</h1>
      <h2>The user is: {username}</h2>
      <ChangeProfile/>
    </div>
  );
};

export default Profile;
