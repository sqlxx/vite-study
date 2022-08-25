import React, { FC, ReactElement, ReactNode, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './boardsquare'
import type { Game } from './game'
import Knight from './knight'


export interface BoardProps {
    game: Game
}

const Board:FC<BoardProps> = ({game}:BoardProps) => {

    const [knightPosition, setKnightPosition] = useState(game.knightPosition)

    useEffect(()=> game.observe(setKnightPosition), []);

    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition, game))
    }
    return (
        <DndProvider backend= {HTML5Backend}>
            <div style ={{ height:'100%', width:'100%', display: 'flex', flexWrap: 'wrap'}}>
                { squares }
            </div>
        </DndProvider>
    )
}

function renderSquare(i:number, [knightX, knightY]:number[], game:Game): ReactElement {
    const x = i % 8
    const y = Math.floor(i/8)
    const isKnightHere: boolean = (x === knightX && y === knightY)
    const piece: ReactNode = isKnightHere? <Knight /> : null
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y, game)}>
            <BoardSquare x={x} y={y} game={game}> { piece } </BoardSquare>
        </div>
        )

}

function handleSquareClick(toX:number, toY:number, game:Game) {
    if (game.canMoveKnight(toX, toY)) { 
        game.moveKnight(toX, toY)
    }
}

export default Board