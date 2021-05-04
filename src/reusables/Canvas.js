import React, { useRef, useEffect } from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    canvas: {
      width: "100%",
    }
}))

const Canvas = ({ width, height, draw, isLoopOn, areImagesLoaded}) => {
  
  const canvasRef = useRef(null)
  const classes = useStyles()
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    
    const render = () => {
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }

    const stop = () => {
        window.cancelAnimationFrame(animationFrameId)
    }

    render()
    if(!isLoopOn && areImagesLoaded){
        stop()
    }
   
    return () => {
        stop()
    }
  }, [draw, isLoopOn, areImagesLoaded])
  
  return <canvas width={width} height={height} ref={canvasRef} className={classes.canvas} />
}

export default Canvas