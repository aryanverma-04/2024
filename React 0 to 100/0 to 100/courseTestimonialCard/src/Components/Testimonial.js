import React from 'react'
import Card from './Card'

const Testimonial = ( {reviews} ) => {
  return (
    <div>
      {/* Adding horizontal line */}
      <hr className="h-1 w-[50%] m-auto bg-gray-200 my-5" />

      <Card reviews={reviews} />
    </div>
  ) 
}

export default Testimonial
