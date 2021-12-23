import React, { useCallback, useState } from 'react';
import './App.css';
import Searcher from './components/Searcher';
import TableDisplayer from './components/TableDisplayer';
import { IProduct } from './interface/products';
import { generateProducts } from './utils';
import { DATA_TEMPLATE } from './utils/data';

function App() {


  const [gasData, setGasData] = useState<number>(1);

  const [products, useProducts] = useState(generateProducts(10));

  console.log(products);

  return (<>
    {!gasData ? <Searcher setGasData={setGasData} gasData={gasData} /> : <TableDisplayer data={products} gasData={gasData} setGasData={setGasData}/>}
  </>

  );
}

export default App;
