import React from "react";
import Logo from "../Assets/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#003865] ">
      <div className="flex flex-row justify-between py-4 w-8/12 mx-auto ">
        <NavLink to="/">
          <img className="w-[50px]" src={Logo} alt="Logo" />
        </NavLink>
        <div className="flex flex-row text-white items-center text-2xl gap-10">
          <NavLink to="/">
            <p className="">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <AiOutlineShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
