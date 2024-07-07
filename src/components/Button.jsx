import React from 'react'
import "./Button.css"
const Button = ({text,handleClick,type}) => {

  const handleButton =(e)=>{
    handleClick(e);
  }
  
  return (
    <div>
        <button className={`button ${type}`} onClick={(e)=>handleButton(e)}>
            {text}
        </button>
    </div>
  )
}

export default Button