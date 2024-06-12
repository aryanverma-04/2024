import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/Spinner"
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
        toast("Data Fetched Through API!");
        console.log(output.data);
      } catch {
        toast.error("Error in Fetching Data!!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex height-[100vh] bg-[#252A34] flex-col items-center justify-center text-white">
      <Navbar />
      <Filter filterData={filterData} category = {category} setCategory = {setCategory}/>
      {loading ? (
        <div className="w-4/5 max-w-[1200px] flex flex-wrap justify-center items-center bg-white">
          <Spinner/>
        </div>
      ) : (
        <Cards courses={courses} category = {category}/>
      )}
    </div>
  );
};

export default App;
