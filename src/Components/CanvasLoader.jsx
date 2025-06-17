import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    //gives number from 0 to 100 to indicate  wether model has loaded or not
    const {progress} = useProgress()
  return (
    // if you want to show html with the canvas, use html
    <Html
     as='div'
     center
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
     }} 
    >
        <span className='canvas-loader'/>
        <p style={{font:14, color:'#F1F1F1', fontWeight:800, marginTop: 40}}>
            {progress !== 0 ?
            `${progress.toFixed(2)}%`: 'Loading...'}
            </p>
    </Html>
  )
}

export default CanvasLoader