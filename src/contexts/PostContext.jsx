import React, { createContext, useState, useEffect } from "react";
 
export const PostContext = createContext();
 
export const PostProvider = ({ children }) => {
  const [singlePost, setSinglePost] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [openPost, setOpenPost] = useState(false);

  const [commentsOnPost, setCommentsOnPost] = useState();
 
  const getPostById = async (PostId, accessToken) => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/" + PostId,
        {
          method: "GET",
          
          headers: {
            "Content-Type": "application/json",
            'authorization': accessToken
          },
        }
      );
      const json = await response.json();
      setSinglePost(json);
      setCommentsOnPost(json.comment)
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
 
   const handlePostComment = async (post, comment, accessToken) => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/comment/" + post.id,
        {
          method: "PUT",
          body: JSON.stringify({
            id:"username_testing", //userId
            comment:comment, //comment
          }),
          headers: {
            "Content-Type": "application/json",
            'authorization': accessToken
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('like finished');
    } catch (error) {
      console.error("Error during like:", error);
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
        commentsOnPost,
        setCommentsOnPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
 