import React from 'react'
import Navbar from '../components/Navbar'
import SingleQuestion from '../components/SingleQuestion'
import "./Testpage.css"

const Testpage = ({randomQuestions,totalpoint,setTotalpoint}) => {
  return (
    <div className='testmain'>
      <ol>

   {randomQuestions && randomQuestions.map((items)=>(
     <div key={items.id}>
      <SingleQuestion setTotalpoint={setTotalpoint} item={items} totalpoint={totalpoint}/>
      
    </div>
   ))}
   </ol>
    </div>
  )
}

export default Testpage