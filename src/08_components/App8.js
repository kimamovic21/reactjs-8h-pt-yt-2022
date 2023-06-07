import React from 'react';
import './App8.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Navbar from './Navbar';

const App8 = () => {
  return (
    <div className='App8'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*' element={<h1>Page NOT Found</h1>}/>
            </Routes>
        </Router>
    </div>
  );
};

export default App8;
