import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    }
    const [showPassword, setShowPassword] = useState(false);
    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        navigate("/Dashboard")
        toast.success("Logged In")
        console.log(formData)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label >
          <p className="text-white py-2 pt-7">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Your Email Address"
            name="email"
            className="w-[80%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"

          />
        </label>
        <label className="relative">
          <p className="text-white py-2">
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            id="email"
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Your Password"
            name="password"
            className="w-[80%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"

          />
          <span className="absolute text-gray-400 top-[87px] right-3 text-2xl" onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible className="" /> : <AiOutlineEye />}
          </span>
        </label>
        <div className="w-[80%] mt-1 text-end">
          <Link to="#" className="text-blue-400 text-sm">
            Forgot Password
          </Link>
        </div>
        <button className="bg-yellow-400 w-[80%] p-2 rounded-lg my-6">
            Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
