
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const Random = () => {

  const {gif, loader, fetchData} = useGif();
  return (
    <div className="w-[60%] mx-auto bg-[#E3FDFD] flex flex-col text-center items-center rounded-md">
      <h1 className="text-xl font-bold py-3 underline">A Random GIF</h1>
      {loader ? (
        <Spinner  />
      ) : (
        <img src={gif} alt="Not Found!" className="h-[250px]" />
      )}
      <button
        onClick={()=>fetchData()}
        className="w-4/12 bg-[#F08A5D] p-2 m-2 rounded-md font-semibold text-xl border border-black"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
