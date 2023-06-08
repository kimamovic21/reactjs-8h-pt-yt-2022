import React, { useState } from 'react';
import './App12.css';
import useToggle from './custom_hooks/useToggle';
import Fact from './Fact';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Counter from './Counter';

const App12 = () => {

    const client = new QueryClient({defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        }
       }
      });

  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return (
    <div className='App12'>
        <div>
            <button onClick={toggle}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <span>Hidden text</span>}
        </div>

        <div>
            <button onClick={toggle2}>
                {isVisible2 ? 'Hide2' : 'Show2'}
            </button>
            {isVisible2 && <span>Hidden text 2</span>}
        </div>

        <br />

        <QueryClientProvider client={client}>
            <Fact />
        </QueryClientProvider>

        <br />

        <Counter />
    
    </div>
  );
};

export default App12;
