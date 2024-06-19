import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const {page, handlePageChange, totalPages}=useContext(AppContext)
  return (
    <div className='font-bold text-center mt-4 bg-[#FF6969] flex justify-between items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-10/12 rounded p-2'>
      <div className=''>
        {
            page > 1 &&
            (<button className='border p-2 border-black rounded-md mx-2' onClick={() => handlePageChange(page-1)}>Previous</button>)
        }
        {
            page < totalPages &&
            (<button className='border p-2 border-black rounded-md mx-2' onClick={() => handlePageChange(page+1)}>Next</button>)
        }
      </div>
      <div>
        Page {page} of {totalPages}
      </div>
    </div>
  )
}

export default Pagination
