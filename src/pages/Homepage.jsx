import React from 'react'
import "./Homepage.css"
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <main className='homemain'>
      <h1 className='homeheading'>
        Test Your IQ With Simple IQ for Free
      </h1>
    <section className='rules'>
    <ul>
      <li>There are 20 questions in random difficulty.</li>
      <li>Select one right answer out of four options.</li>
      <li>Submit and get your IQ Score for free.</li>
    </ul>
    </section>
    <Link  to="/testpage">
    <Button text="Start Test" type="primary"  />
    </Link>
    </main> 
  )
}

export default Homepage