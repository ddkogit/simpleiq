import React from 'react'
import "./SingleQuestion.css"
const SingleQuestion = ({item}) => {
  return (
    <div className='singleform'>

        
    <li>
        <form className=''>
        <label htmlFor="">

        {item.question}
        </label>
      
        {item.options.map((option)=>(
            <div className='options' key={option}>

        <input type="radio" name="option" id="" />
            {option}

            </div>
        )
    )
    }
        </form>
        
    </li>
        

    </div>
  )
}

export default SingleQuestion