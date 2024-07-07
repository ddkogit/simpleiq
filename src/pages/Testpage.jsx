import React from 'react'
import Navbar from '../components/Navbar'
import SingleQuestion from '../components/SingleQuestion'
import "./Testpage.css"
import Button from '../components/Button'
import SubmitForm from '../components/SubmitForm'

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

   <h2>
    Please enter your fullname and email to get your result for free
   </h2>

   <SubmitForm totalpoint={totalpoint}/>

    </div>
  )
}

export default Testpage