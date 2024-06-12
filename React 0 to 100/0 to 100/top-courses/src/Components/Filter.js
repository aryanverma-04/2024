import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };
  return (
    <div>
      {filterData.map((filterData) => {
        return (
          <button
            className={`text-lg px-3 py-2 rounded-md font-medium text-white bg-gradient-to-r from-slate-900 to-slate-700 border-2 hover:bg-opacity-50 transition-all duration-200 mx-2 my-3
            ${category === filterData.title ? "bg-black border-white"
                  : "bg-opacity-40 border-transparent" }
            `}
            onClick={() => filterHandler(filterData.title)}
          >
            <span class="">
              {filterData.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
