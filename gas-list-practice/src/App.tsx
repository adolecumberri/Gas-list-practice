import React, { useState } from 'react';
import './App.css';
import MoreInfo from './components/MoreInfo';
import Searcher from './components/Searcher';
import TableDisplayer from './components/TableDisplayer';
import { generateProducts } from './utils';

function App() {

  /**
   * Gass Information.
   */
  const [gasData, setGasData] = useState<number>(1);

  /**
   * Products generated Randomly
   */
  const [products] = useState(generateProducts(10));
  /**
   * ToolTip Children property. it's a JSX.Element when it's defined.
   */
  const [toolTipContent, setToolTipContent] = useState<any>(undefined);


  console.log(products);

  return (<>
    {!gasData ?
      <Searcher
        setGasData={setGasData}
        gasData={gasData}
      /> :
      <TableDisplayer
        data={products}
        gasData={gasData}
        setGasData={setGasData}
        setToolTipContent={setToolTipContent}
      />}
    {<MoreInfo
      hidden={toolTipContent === undefined}
      setToolTipContent={setToolTipContent}
    >
      {toolTipContent}
    </MoreInfo>}


  </>

  );
}

export default App;
