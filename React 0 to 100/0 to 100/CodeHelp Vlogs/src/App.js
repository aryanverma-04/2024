import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(() => {
    fetchBlogPosts();
  }, [])
  
  return (
    <div className='my-10 h-full'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
