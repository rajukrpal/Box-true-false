import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'

export default function App({darkMode}) {
  const [squares, setSquares] = useState(boxes)
  const toggle = (id)=>{
      const updatedSquares = squares.map(square => 
      square.id === id 
        ? { ...square, on: !square.on }
        : square
    );

    setSquares(updatedSquares);

  }
  
  const squareElements = squares.map(square => (
     <Box 
     key={square.id} 
     on={square.on}
     toggle={() => toggle(square.id)} />
  ))
  return (
      <main >
          {squareElements}
      </main>
  )
}