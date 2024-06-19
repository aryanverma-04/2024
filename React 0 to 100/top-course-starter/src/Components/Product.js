import React from 'react'

const Product = ({post}) => {
  return (
    <div>
      <div className='font-bold '>
        <p>{post.title} </p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} loading='lazy' alt="Cart Item Image" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>
        {
          false ? <p>Remove Item</p> : <p>Add to Cart</p>
        }
      </button>
    </div>
  )
}

export default Product
