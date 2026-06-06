import React, { useState } from 'react'
import './MiniProject.css'


const MiniProjectToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  }
  return (
    <div className='main'>
      <button className={toggle ? "green" : "red"} onClick={handleClick}>
        <span>{toggle ? "ON" : "OFF"}</span>
      </button>
    </div>
  )
}

export default MiniProjectToggle
