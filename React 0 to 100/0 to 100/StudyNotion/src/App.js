import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute"

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='bg-black flex flex-col h-[100vh]'>
      <ToastContainer />
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/Login' element=<Login setLoggedIn={setLoggedIn}/> />
        <Route path='/Signup' element=<Signup setLoggedIn={setLoggedIn}/> />
        <Route path='/Dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard></Dashboard>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
