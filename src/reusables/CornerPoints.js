import { rotate, add } from 'mathjs'

class CornerPoints {

    constructor(width, height, x, y, angle) {
        const w = width / 2
        const h = height / 2
        this.corners = [[w, -h], [w, h], [-w, -h], [-w, h]].map(e => add(rotate(e, angle), [x, y]))
        this.isOnTrack = true
    }

    at(index){
        return this.corners[index]
    }

    draw(ctx){
         this.corners.forEach(e => {
            ctx.beginPath()
            const r = 1.5
            const cornerX = e[0] - r
            const cornerY = e[1] - r
            ctx.arc(cornerX, cornerY, r, 0, 2 * Math.PI);
            if (ctx.getImageData(cornerX, cornerY, 1, 1).data[0] === 255) {
                ctx.fillStyle = 'red'
                this.isOnTrack = false
            }
            ctx.fill()
            ctx.fillStyle = 'black'
        })
    }

}

export default CornerPoints