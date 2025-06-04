import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  };
  useEffect(fetchPosts, []);
  const postData = { posts, refreshPosts: fetchPosts };
  return (
    <PostsContext.Provider value={postData}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  return useContext(PostsContext);
}

export { PostsProvider, usePosts };
