import React from 'react'
import { useDrag } from 'react-dnd'
import { DragableTypes } from '../workspace/constants'
import { NodeDiv } from './styled-components'

export default function Node({name}:{name:string}) {
    const [{isDragging},drag] = useDrag(() => ({
       type:  DragableTypes.NODE,
       collect: monitor => ({
        isDragging: !!monitor.isDragging
       })}
       )
    ) 

    return (
        <div ref={drag} style={{margin:'10px'}}>
            <NodeDiv className={isDragging? 'dragging': 'normal'}>
                {name}
            </NodeDiv>
        </div>
        )    

}