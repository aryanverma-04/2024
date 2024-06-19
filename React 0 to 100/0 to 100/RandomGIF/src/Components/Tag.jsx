import React from "react";
import { useState } from "react";
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {

  const [tag, setTag] = useState("car");
  const {gif, loader, fetchData} = useGif(tag);


  return (
    <div className="w-[60%] mx-auto bg-[#F4EEFF] flex flex-col text-center items-center rounded-md">
      <h1 className="text-xl font-bold py-3 underline">
        A Random <b>{tag}</b> GIF
      </h1>
      {loader ? (
        <Spinner />
      ) : (
        <img src={gif} alt="Not Found!" className="h-[250px]" />
      )}
      <input
        type="text"
        value={tag}
        className="w-4/12 bg-white p-2 m-2 rounded-md font-semibold text-x border border-black"
        onChange={(event)=>setTag(event.target.value)}
      />
      <button
        onClick={()=>fetchData()}
        className="w-4/12 bg-[#F08A5D] p-2 m-2 rounded-md font-semibold text-xl border border-black"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
