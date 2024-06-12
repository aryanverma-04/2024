import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setLoggedIn }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();

  function createAccountHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    toast.success("Account created successfully");
    setLoggedIn(true);
    navigate("/Dashboard"); // Use navigate function here
    // ...

    const accountData = {
      ...formData
    }
    const finalData = {
      ...accountData, accountType
    }
    console.log("Printing final data collected for signup")
    console.log(finalData)
  }
  return (
    // text-white w-[50%] bg-black rounded-full
    <div>
      <div className="w-[50%] flex flex-row bg-gray-800 h-12 rounded-full p-1 mt-2">
      <button
        className={`text-white w-[50%] ${accountType === "student" ? "bg-black rounded-full transition-all duration-200" : "transition-all duration-200"}`}
        onClick={() => setAccountType("student")}
      >
        Student
      </button>
      <button
        className={`text-white w-[50%] ${accountType === "instructor" ? "bg-black rounded-full transition-all duration-200" : "transition-all duration-200"}`}
        onClick={() => setAccountType("instructor")}
      >
        Instructor
      </button>
    </div>

      <form onSubmit={createAccountHandler}>
        <div className="flex flex-row gap-2 max-w-[100%]">
          <label htmlFor="firstname">
            <p className="text-white py-2">
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className=" w-[95%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"
            />
          </label>
          <label htmlFor="lastname">
            <p className="text-white py-2">
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last Name"
              value={formData.lastname}
              className=" w-[95%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"
            />
          </label>
        </div>
        <label htmlFor="email">
          <p className="text-white py-2">
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="w-[80%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"
          />
        </label>
        <div className="flex flex-row gap-2 max-w-[100%] ">
          <label htmlFor="password" className="relative">
            <p className="text-white py-2">
              Create Password <sup>*</sup>
            </p>
            <input
              type={showPassword1 ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="w-[95%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"
            />
            <span
              className="absolute text-white top-[55px] left-[155px] text-xl"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label htmlFor="password2" className="relative">
            <p className="text-white py-2">
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showPassword2 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="w-[95%] bg-gray-800 h-12 rounded-md p-2 border-b-[1px] border-gray-500 text-white"
            />
            <span
              className="absolute text-white top-[55px] left-[155px] text-xl"
              onClick={() => setShowPassword2((prev) => !prev)}
            >
              {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button className="bg-yellow-400 w-[80%] p-2 rounded-lg my-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
