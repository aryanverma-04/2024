import React from 'react'
import Testimonial from "./Components/Testimonial"
import reviews from './data.js';
const App = () => {
  return (
    <div className='text-white'>
      <h1 className='text-4xl text-center font-bold mt-10'>Our Testimonial</h1>
      <Testimonial reviews = {reviews}/>
    </div>
  )
}

export default App
