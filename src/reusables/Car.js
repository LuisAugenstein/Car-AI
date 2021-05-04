import imgSrc from '../img/car.png'
import loadImage from './imageLoader'
import CornerPoints from './CornerPoints'
import SensorRays from './SensorRays'

class Car {
    constructor({ width, height, x, y, angle }) {
        this.width = width
        this.height = height
        this.cornerPoints = new CornerPoints(width, height, x, y, angle)
        this.sensorRays = new SensorRays(this.cornerPoints.at(0), this.cornerPoints.at(1), angle)
        this.x = x
        this.y = y
        this.angle = angle
        this.velocity = 0
        this.isImageLoaded = false
        this.canvas = loadImage(width, height, imgSrc, () => { this.isImageLoaded = true })
    }

    /* turnLeft/turnRight {-1 < angleVelocity < 1} 
     * accelerate {-1 < acceleration < 1}
     */
    applyAction({angleVelocity, acceleration}) {
        this.angle += angleVelocity
        this.velocity += acceleration
    }

    update(){

    }

    isOnTrack() {
        return this.cornerPoints.isOnTrack
    }

    draw(ctx) {
        this.update()

        this.cornerPoints.draw(ctx)
        this.sensorRays.draw(ctx)

        // draw car
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.canvas, -this.width / 2, -this.height / 2);
        ctx.rotate(-this.angle);
        ctx.translate(-this.x, -this.y);
    }


}

export default Car