import React, { FC, ReactNode } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './constants'
import { Game } from './game'
import Square from './square'

export interface BoardSquareProps {
    x: number,
    y: number,
    game: Game,
    children: ReactNode
}

const BoardSquare:FC<BoardSquareProps> = ({x, y, game, children}: BoardSquareProps) => {
    const black = ((x+y) %2 ==1)

    const [{isOver, canDrop}, drop] = useDrop(
        () => ({
            accept: ItemTypes.KNIGHT,
            drop: () => game.moveKnight(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }),
            canDrop: () => game.canMoveKnight(x, y),
        }), [x, y]
    )
    return <div ref={drop} style={{position:'relative', width:'100%', height: '100%'}}><Square black={black} > { children } </Square>
    { isOver && canDrop && <Overlay color='green' />}
    { isOver && !canDrop && <Overlay color='red' />}
    { !isOver && canDrop && <Overlay color='yellow'/>}
    </div>
}

export default BoardSquare

export function Overlay({color}: {color: string}) {
    return (<div style={{
        position: 'absolute',
        top: 0,
        left: 0, 
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color
    }}></div>)
}