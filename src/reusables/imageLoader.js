
const loadImage = (width, height, imageSrc, onLoaded) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")
    const img = new Image();
    img.addEventListener('load', () => {
      ctx.drawImage(img, 0, 0, width, height)
      setTimeout(() => {onLoaded()}, 100)
    });
    img.src = imageSrc;
    return canvas
}

export default loadImage