import React from 'react'

const Card = ({post}) => {
  return (
    <div className='bg-[#FFF5E1] m-6 w-1/2 mx-auto p-7 rounded-xl' key={post.id}>
        <p className='font-bold text-md '>{post.title}</p>
        <p>
            By <span className='italic'>{post.author} on <span className='underline font-bold'>{post.category}</span></span>
        </p>
        <p>
            Posted on {post.date}
        </p>
        <p className='mt-4'>{post.content}</p>
        <div className='text-blue-500 underline flex gap-3'>
            {
                post.tags.map((tag, index) =>{
                    return <span key={index}>{`#${tag}`}</span>
                })
            }
        </div>
    </div>
  )
}

export default Card
