import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("Got caught in Error", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  console.log("Inside the Home component");
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product  key={posts.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
