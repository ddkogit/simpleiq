import React from 'react'
import "./Button.css"
const Button = ({text,handleClick,type}) => {
  return (
    <div>
        <button className={`button ${type}`} onClick={handleClick}>
            {text}
        </button>
    </div>
  )
}

export default Button