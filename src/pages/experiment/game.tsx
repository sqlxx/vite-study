let knightPosition:number[] = [0, 0]
let observer: ((position: number[]) =>void) | null = null

function emitChange() {
    if (observer != null) {
        observer(knightPosition)
    }
}

export function observe(receive: (position: number[]) => void) {
    if (observer) {
        // throw new Error("Multiple observers not implemented")
    }

    observer = receive
    emitChange()
}

export function moveKnight(toX:number, toY:number) {
    knightPosition = [toX, toY]
    emitChange()
}