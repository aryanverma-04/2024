import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

const App = () => {
  return (
    <div className="bg-[#393E46] h-full w-full flex flex-col items-center pb-10">
      <div className="bg-[#FFC7C7] w-11/12 text-black  text-center p-2 mt-4 mx-auto rounded-md">
        <h1 className="font-bold text-3xl">Random GIF Generator</h1>
        <p className="text-md">Unleash Random Fun with Every Click!</p>
      </div>
      <div className="w-full mx-auto mt-4 flex flex-col gap-y-4">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
