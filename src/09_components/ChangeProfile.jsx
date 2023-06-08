import React, { useState, useContext } from 'react';
import { AppContext } from './App9';

const ChangeProfile = () => {
  const {username, setUsername} = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
        <input 
            type="text" 
            placeholder="Add new username..."
            onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={() => setUsername(newUsername)}>
            Change Username 
        </button>
    </div>
  );
};

export default ChangeProfile;
