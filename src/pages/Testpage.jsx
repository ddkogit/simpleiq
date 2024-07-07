import React from 'react'
import Navbar from '../components/Navbar'
import SingleQuestion from '../components/SingleQuestion'
import "./Testpage.css"

const Testpage = ({randomQuestions}) => {
  return (
    <div className='testmain'>
      <ol>

   {randomQuestions && randomQuestions.map((items)=>(
     <div key={items.id}>
      <SingleQuestion item={items} />
      
    </div>
   ))}
   </ol>
    </div>
  )
}

export default Testpage