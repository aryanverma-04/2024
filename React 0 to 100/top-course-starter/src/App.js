import React from 'react'
import Navbar from "./Components/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
const App = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
