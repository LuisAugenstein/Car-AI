import React, { useState } from 'react'
import Canvas from './reusables/Canvas'
import Map from './reusables/Map'
import Car from './reusables/Car'
import initialState from './reusables/initialState'

const map = new Map(initialState.map)
const car = new Car(initialState.car)

function GameFrame({ isLoopOn }) {
  const [areImagesLoaded, setImagesLoaded] = useState(false)

  const draw = (ctx) => {
    if(map.isImageLoaded && car.isImageLoaded){
      setImagesLoaded(true)
      map.draw(ctx)
      car.draw(ctx)

      if(!car.isOnTrack()){
        //start new epoch, this one failed
      }

      //sent car sensor data to server

      
      //get action, i.e. move forward, left, or right
      
    }
  }

  return <Canvas width={initialState.map.width} height={initialState.map.height} draw={draw} isLoopOn={isLoopOn} areImagesLoaded={areImagesLoaded} />

}

export default GameFrame