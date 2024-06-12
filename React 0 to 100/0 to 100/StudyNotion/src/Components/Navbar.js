import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.svg'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

// Import toastify css file

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const setLoggedIn = props.setLoggedIn;
    return (
    <div className='flex gap-8 justify-evenly text-white mt-5 items-center'>
      <Link to="/">
        <img src={Logo} alt="Logo" width={180} height={40} loading='lazy' className=''/>
      </Link>
      <nav>
        <ul className='flex gap-6 text-gray-300 text-md'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* Creating Four buttons for: Login SignUp Logout Dashboard */}
      
      <div className='flex gap-4'>
        {   !isLoggedIn &&
            <Link to="/login">
                <button className='bg-gray-900 px-[16px] py-[8px] rounded-md border border-gray-800 text-gray-400'>
                    Log In
                </button>
            </Link>
        }
        {   !isLoggedIn &&
            <Link to="/signup">
                <button className='bg-gray-900 px-[16px] py-[8px] rounded-md border border-gray-800 text-gray-400'>
                    Sign Up
                </button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to="/">
                <button onClick={()=>{
                    setLoggedIn(false);
                    toast.error("Logged Out!");
                }} className='bg-gray-900 px-[16px] py-[8px] rounded-md border border-gray-800 text-gray-400'>
                    Log Out
                </button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to="/Dashboard">
                <button className='bg-gray-900 px-[16px] py-[8px] rounded-md border border-gray-800 text-gray-400'>
                    Dashboard
                </button>
            </Link>
        }
      </div>


    </div>
  )
}

export default Navbar
