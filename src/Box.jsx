import React, { useState } from 'react'

const Box = ({darkMode,key,on,toggle}) => {
    // const [Von , setVOn] = useState(on)
  return (
    <div className="box">
     <button 
      className="box" 
      style={{backgroundColor: on ?  "#222222" : "transparent" , cursor:'pointer'}}  
      key={key} 
      onClick={toggle} ></button>
    </div>
  )
}

export default Box
