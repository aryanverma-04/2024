import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function Card({ reviews }) {
  let [id, setid] = useState(0)
  const leftClickHandler = () => {
    setid(prevId => (prevId === 0 ? reviews.length - 1 : prevId - 1));
  }
  const rightClickHandler = () => {
    setid(prevId => (prevId === reviews.length - 1 ? 0 : prevId + 1));
  }
  const randomClickHandler = () => {
    let x = Math.floor((Math.random() * 4) + 1);
    setid(x);
  }

  const data = reviews[id];
  return (
    <div className="h-[450px] w-[50%] m-auto bg-red-50 rounded-md">
      {/* creating an element */}
      <div className=" bg-gray-600 relative">
        <div className="rounded-full w-32 h-32 absolute bg-blue-600 top-[-60px] left-6"></div>
        <img
          src={data.image}
          alt=""
          className="rounded-full w-32 absolute  top-[-50px] left-5"
        />
      </div>
      <div className="text-black pt-20 ">
        <div className="text-center text-xl font-bold">{data.name}</div>
        <div className="text-center text-lg text-gray-500 ">{data.job}</div>
        <div className="text-center flex justify-center my-4 text-violet-500">
          <FaQuoteLeft />
        </div>
        <div className="text-center px-6 h-[70px]">
            {data.text}
        </div>
        <div className="text-center flex justify-center my-4 text-violet-500">
          <FaQuoteRight />
        </div>

        <div className="text-center text-violet-500 text-2xl space-x-4">
          <button onClick={leftClickHandler}>
            <FaArrowLeftLong />
          </button>
          <button>
            <FaArrowRight onClick={rightClickHandler}/>
          </button>
        </div>

        <div className="flex justify-center mt-2">
          <button className="h-[40px] bg-violet-500 w-[180px] text-center rounded-md text-white font-bold" onClick={randomClickHandler}>
            Surprise me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
