import { useEffect, useState } from 'react';
import Board from './board';
import { observe } from './game';
import './index.scss';


const DndTest = () => {
    const [knightPosition, setKnightPosition] = useState([7,4])


    useEffect(()=>{
        console.log("In use Effect")
        observe((position:number[]) => {
            setKnightPosition(position)
        }
    )}, []);

    return (
        <div style={{ width:800, height:800}}> 
            <Board knightPosition = {knightPosition} />
        </div>
    );
}

export default DndTest;