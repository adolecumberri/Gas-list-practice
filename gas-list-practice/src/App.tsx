import React, { useState } from 'react';
import './App.css';
import Searcher from './components/Searcher';
import TableDisplayer from './components/TableDisplayer';

function App() {

  const [gasData, useGasData ]  = useState<number>(0);


  return (
    <div className="main-container">
     {!gasData ? <Searcher/> : <TableDisplayer />}
    </div>
  );
}

export default App;
