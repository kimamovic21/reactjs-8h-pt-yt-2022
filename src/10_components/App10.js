import React, { useState } from 'react';
import './App10.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Navbar from './Navbar';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App10 = () => {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    }
   }
  });

  return (
    <div className='App10'>
      <QueryClientProvider client={client}>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/'        element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='*'        element={<h1>Page NOT Found</h1>}/>
            </Routes>
          </Router>
        </QueryClientProvider>
    </div>
  );
};

export default App10;
