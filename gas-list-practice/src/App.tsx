<<<<<<< Updated upstream
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React, { useCallback, useState } from 'react';
import './App.css';
import Searcher from './components/Searcher';
import TableDisplayer from './components/TableDisplayer';
import { IProduct } from './interface/products';
import { generateProducts } from './utils';
import { DATA_TEMPLATE } from './utils/data';

function App() {


  const [gasData, useGasData] = useState<number>(0);

  const [products, useProducts] = useState(generateProducts(10));

  console.log(products);

  return (<>
    {!gasData ? <Searcher gasHandler={useGasData} /> : <TableDisplayer />}
  </>

>>>>>>> Stashed changes
  );
}

export default App;
