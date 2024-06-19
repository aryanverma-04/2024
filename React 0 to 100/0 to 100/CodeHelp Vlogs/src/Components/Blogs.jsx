import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
import { useEffect } from "react";
const Blogs = () => {
  // Consuming the data of the Context API (Accessing Shared Grouped Data)
  const { loading, posts, setLoading } = useContext(AppContext);

  return (
    <div className="py-10 flex flex-col items-center justify-center h-full">
    {loading ? (
      <div className="flex items-center justify-center  h-full">
        <Spinner />
      </div>
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (<Card post={post} />))
      )}
    </div>
  );
};

export default Blogs;
