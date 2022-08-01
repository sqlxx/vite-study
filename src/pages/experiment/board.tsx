import React, { ReactElement, ReactNode } from 'react'
import Knight from './knight'
import Square from './square'

const Board = ({knightPosition}:{knightPosition: [number, number]}) => {
    return (
        <div style ={{ height:'100%', width:'100%'}}>
            {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)}
        </div>
    )
}

function renderSquare(x:number, y:number, [knightX, knightY]:[number, number]): ReactElement {
    const black: boolean = (x+y)%2 === 1
    const isKnightHere: boolean = (x === knightX && y === knightY)
    const piece: ReactNode = isKnightHere? <Knight /> : null
    return (
        <Square black>
            { piece }
        </Square>)

}

export default Board