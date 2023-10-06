import React, { createContext, useState, useEffect } from "react";
 
export const PostContext = createContext();
 
export const PostProvider = ({ children }) => {
  const [singlePost, setSinglePost] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [openPost, setOpenPost] = useState(false);
 
  const getPostById = async (PostId) => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/" + PostId,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setSinglePost(json);
    } catch (error) {
      console.log(error);
    }
  };
 
  const getAllPosts = async () => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post",
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setAllPosts(json);
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleLike = () => {
    try {
      console.log("like");
    } catch (error) {
      console.log(error);
    }
  };
 
  const handlePostComment = () => {
    try {
      console.log("comment");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <PostContext.Provider
      value={{
        singlePost,
        getPostById,
        allPosts,
        getAllPosts,
        openPost,
        setOpenPost,
        setSinglePost,
        handleLike,
        handlePostComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
 