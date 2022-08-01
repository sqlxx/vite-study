import React from 'react';
import Board from './board';
import Knight from './knight';
import Square from './square';
import './index.scss'

const DndTest = () => {
    return (
        <div style={{ width:800, height:800}}> 
            <Board knightPosition = {[7,4]} />
        </div>
    );
}

export default DndTest;