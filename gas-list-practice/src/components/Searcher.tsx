import React, { FC, useState } from 'react';

interface ISearcherProps {
    gasHandler: React.Dispatch<React.SetStateAction<number>>
}


const Searcher : FC<ISearcherProps> = ({ gasHandler }) => {


    return (
        <div >
            Searcher
        </div>
    );
}

export default Searcher;
