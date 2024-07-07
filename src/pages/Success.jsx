import React from 'react'
import "./Success.css"
import Button from '../components/Button'
const Success = () => {
    const handleClick =(e)=>{
        navigator.clipboard.writeText("https://simpleiq.vercel.app/");

    }
  return (
    <div className='successmain'>
        <h1>
            Thank you for taking Simple IQ test.

        </h1>
        <h2>
            Please check your inbox for your estimated IQ Score
        </h2>

        <div>
            <Button text="Share with Friends" type="primary" handleClick={handleClick} />
        </div>
    </div>
  )
}

export default Success