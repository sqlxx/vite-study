import React, { ReactElement, ReactNode } from 'react'

export default function Square({ black, children} : {black: boolean, children?: ReactNode} ) {
    const fill:string = black ? 'black' : 'white'
    const stroke:string = black ? 'white' : 'black'
    return (<div style={{ backgroundColor: fill, color: stroke, }} >
            { children }
        </div>)
}