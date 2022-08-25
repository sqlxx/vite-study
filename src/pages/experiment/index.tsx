import { useEffect, useMemo, useState } from 'react';
import Board from './board';
import { Game} from './game';
import './index.scss';


const DndTest = () => {


    const game = useMemo(() => new Game(), [])


    return (
        <div style={{ width:800, height:800}}> 
            <Board game={game} />
        </div>
    );
}

export default DndTest;