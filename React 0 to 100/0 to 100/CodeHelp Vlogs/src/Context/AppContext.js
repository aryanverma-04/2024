import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  // Step 1: Creating the context
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };

  // Step 2
  async function fetchBlogPosts(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`
    try{
        const result = await fetch(url)
        const data = await result.json();
        console.log(data)
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
    }
    catch{
        console.log("Error in Fetching the data")
        setPage(1)
        setPosts([])
        setTotalPages(null)
    }
    finally{
        setLoading(false)
    }
  }
  function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page);
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}
