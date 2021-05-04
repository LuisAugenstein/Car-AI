import { rotate, add, multiply, subtract } from 'mathjs'

class SensorRays{

    constructor(left, right, angle){
        const direction = subtract(right, left)
        this.rays = [-2, -1, 0, 1, 2].map(i => ({
            startPoint: (add(left, multiply((i + 3) / 6, direction))),
            angle: (angle + i * Math.PI / 6)
        }))
    }

    draw(ctx){
        this.rays.forEach(({ startPoint, angle }) => {
            ctx.beginPath()
            const direction = rotate([1, 0], angle)
            let currentPoint = startPoint
            const stepSize = 5
            while (ctx.getImageData(currentPoint[0], currentPoint[1], 1, 1).data[0] !== 255) {
                currentPoint = add(currentPoint, multiply(stepSize, direction))
            }
            ctx.strokeStyle = 'lime'
            ctx.fillStyle = 'lime'
            ctx.lineWidth = 2
            ctx.moveTo(startPoint[0], startPoint[1])
            ctx.lineTo(currentPoint[0], currentPoint[1])
            ctx.stroke()
            ctx.arc(currentPoint[0], currentPoint[1], 2.5, 0, 2 * Math.PI)
            ctx.fill()
            ctx.lineWidth = 1
            ctx.strokeStyle = 'black'
            ctx.fillStyle = 'black'
        })
    }

}

export default SensorRays