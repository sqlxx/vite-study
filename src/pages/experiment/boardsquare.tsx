import React, { ReactNode } from 'react'
import { useDrop } from 'react-dnd'
import { keyframes } from 'styled-components'
import { ItemTypes } from './constants'
import { canMoveKnight, moveKnight } from './game'
import Square from './square'

export default function BoardSquare({x, y, children}: {x:number, y:number, children: ReactNode}) {
    const black = ((x+y) %2 ==1)

    const [{isOver, canDrop}, drop] = useDrop(
        () => ({
            accept: ItemTypes.KNIGHT,
            drop: () => moveKnight(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }),
            canDrop: () => canMoveKnight(x, y),
        }), [x, y]
    )
    return <div ref={drop} style={{position:'relative', width:'100%', height: '100%'}}><Square black={black} > { children } </Square>
    { isOver && canDrop && <Overlay color='green' />}
    { isOver && !canDrop && <Overlay color='red' />}
    { !isOver && canDrop && <Overlay color='yellow'/>}
    </div>
}

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