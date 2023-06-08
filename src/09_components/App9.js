import React, { useState, createContext } from 'react';
import './App9.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Navbar from './Navbar';

export const AppContext = createContext();

const App9 = () => {
  const [username, setUsername] = useState("imamovickerim");

  return (
    <div className='App9'>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/'        element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*'        element={<h1>Page NOT Found</h1>}/>
            </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App9;
