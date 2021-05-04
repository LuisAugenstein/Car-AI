import imgSrc from '../img/map.png'
import loadImage from './imageLoader'

class Map {
    constructor({width, height}){
        this.width = width
        this.height = height
        this.isImageLoaded = false
        this.canvas = loadImage(width, height, imgSrc, ()=>{this.isImageLoaded = true})
    }

    draw(ctx){
        ctx.drawImage(this.canvas, 0, 0, this.width, this.height)
    }


}

export default Map