import React from "react";
import frame from "../Assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div className="flex flex-row mt-3 justify-between w-[90%] px-[10%] mx-auto gap-x-20">
      <div className="w-[50%]">
        <h1 className="text-white text-4xl font-semibold">{title}</h1>
        <div className="">
          <span className="text-gray-400 text-xl">{desc1}</span><br />
          <span className="text-blue-400 italic text-lg">{desc2}</span>
        </div>
        {formtype==="signup"?(<SignupForm setLoggedIn={setLoggedIn}/>):(<LoginForm setLoggedIn={setLoggedIn}/>)}
        <div className="flex flex-row w-[80%] items-center my-2 gap-x-2">
            <div className="h-[0.5px] bg-gray-400 w-full"></div>
            <p className="text-gray-400">OR</p>
            <div className="h-[0.5px] bg-gray-400 w-full"></div>
        </div>
        <button className="w-[80%]  flex flex-row items-center justify-center gap-2 text-l p-1 border-[0.3px] border-gray-400 text-gray-400 rounded font-medium bg-black">
            <FcGoogle />
            <p>Sign in with Google</p> 
        </button>
      </div>
      <div className="w-[50%] relative">
        <img src={frame} alt="imageFrame" loading="lazy" width={450} height={400} className="absolute top-5 left-5"/>
        <img src={image} alt="imageFrame" loading="lazy" width={450} height={400} className="absolute " />
      </div>
    </div>
  );
};

export default Template;
