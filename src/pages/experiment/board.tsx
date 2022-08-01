import React, { ReactElement, ReactNode } from 'react'
import Knight from './knight'
import Square from './square'

const Board = ({knightPosition}:{knightPosition: [number, number]}) => {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <div style ={{ height:'100%', width:'100%', display: 'flex', flexWrap: 'wrap'}}>
            { squares }
        </div>
    )
}

function renderSquare(i:number, [knightX, knightY]:[number, number]): ReactElement {
    const x = i % 8
    const y = Math.floor(i/8)
    const black: boolean = (x+y)%2 === 1
    const isKnightHere: boolean = (x === knightX && y === knightY)
    const piece: ReactNode = isKnightHere? <Knight /> : null
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square black={ black }> { piece } </Square>
        </div>
        )

}

export default Board