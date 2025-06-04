import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const postData = {};
  return (
    <PostsContext.Provider value={postData}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  return useContext(PostsContext);
}

export { PostsProvider, usePosts };
