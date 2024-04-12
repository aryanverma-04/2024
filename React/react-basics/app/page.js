"use client"
import React, {useState} from 'react'

const page = () => {
  // let name = "aryan";
  const [name, setName] = useState("aryan")
  return (
    <>
      <h1>Hello world</h1>
      <div>Hello this is the div tag</div>
      <p>My name is {name}</p>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-3 my-5"onClick={()=>{
        setName("verma")
      }}>Get Surname</button>
    </>
  )
}

export default page
