import React, { ReactElement } from 'react';
import styled from 'styled-components'
import { useMemo } from 'react';

type Point = {
    x: number | string;
    y: number | string;
}

type TwoPoints = {
    start: Point;
    end: Point;
}

const GridBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

function createHorizontalLines(height:number, gap:number): TwoPoints[] {
    const res = [];
    const count = height/gap;
    for (let i = 0; i < count; i++) {
        res.push({start: {x: 0, y: i*gap}, end: {x: "100%", y: i*gap}})   
    }
    return res;
}

function createVerticalLines(width:number, gap:number): TwoPoints[] {
    const res = [];
    const count = width/gap;
    for (let i = 0; i < count; i++) {
        res.push({start: {x: i*gap, y: 0}, end: {x: i*gap, y: "100%"}})   
    }
    return res;
}

type linesProps = {
    lines: TwoPoints[]
}

const Lines = ({lines} : linesProps) : ReactElement => {
    return (
        <>
            {lines.map((line, i) => ( 
                 <line x1={`${line.start.x}`} x2={`${line.end.x}`} y1={`${line.start.y}`} y2={`${line.end.y}`} 
                     stroke="#e0e0e0" key={i} strokeWidth="1px" shapeRendering="optimizeSpeed"/>
                     ))}
        </>
    )
}

const GridBackground = () : ReactElement => {
    const width:number = 4000;
    const height:number = 4000;
    const gap:number = 10;

    const horizontalLines:TwoPoints[] = useMemo(() => createHorizontalLines(width, gap), [width, gap]);
    const verticalLines:TwoPoints[] = useMemo(() => createVerticalLines(height, gap), [height, gap]);

    return (
        <GridBackgroundDiv className="grid-container" >
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
                <Lines lines = {horizontalLines}/>
                <Lines lines = {verticalLines}/>
            </svg>
        </GridBackgroundDiv>
    )
}

export default GridBackground;
