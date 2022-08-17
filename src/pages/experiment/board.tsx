import React, { ReactElement, ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './boardsquare'
import { canMoveKnight, moveKnight } from './game'
import Knight from './knight'
import Square from './square'

const Board = ({knightPosition}:{knightPosition: number[]}) => {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <DndProvider backend= {HTML5Backend}>
            <div style ={{ height:'100%', width:'100%', display: 'flex', flexWrap: 'wrap'}}>
                { squares }
            </div>
        </DndProvider>
    )
}

function renderSquare(i:number, [knightX, knightY]:number[]): ReactElement {
    const x = i % 8
    const y = Math.floor(i/8)
    const isKnightHere: boolean = (x === knightX && y === knightY)
    const piece: ReactNode = isKnightHere? <Knight /> : null
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)}>
            <BoardSquare x={x} y={y}> { piece } </BoardSquare>
        </div>
        )

}

function handleSquareClick(toX:number, toY:number) {
    if (canMoveKnight(toX, toY)) { 
        moveKnight(toX, toY)
    }
}

export default Board