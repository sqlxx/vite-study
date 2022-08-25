let observer: ((position: number[]) =>void) | null = null

export class Game {
    knightPosition:number[] = [0, 0]
    private emitChange() {
        if (observer != null) {
            observer(this.knightPosition)
        }
    }

    public observe(receive: (position: number[]) => void) {
        if (observer) {
            throw new Error("Multiple observers not implemented")
        }

        observer = receive
        this.emitChange()
    }

    public moveKnight(toX:number, toY:number) {
        this.knightPosition = [toX, toY]
        this.emitChange()
    }

    public canMoveKnight(toX:number, toY:number) {
        const [x, y] = this.knightPosition
        const dx = toX - x
        const dy = toY - y

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    }
}