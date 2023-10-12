import React from "react";
import ImagePost from "../components/ImagePost/ImagePost";
import { useAppContext } from "../auth";
import { useQuery } from "react-query";

const MyImages = ({ userId }) => {
  const { state } = useAppContext();

  const getPosts = async () => {
    const response = await fetch(
      "https://api-4uzdo5gwpq-uc.a.run.app/api/post",
      {
        method: "GET",
        headers: {
          authorization: `${state.credential.credentials.token}`,
        },
      }
    );
    return await response.json();
  };

  const { data: allPosts, error, isLoading } = useQuery("posts", getPosts);

  if (isLoading)
    return (
      <div>
        
        Loading...
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  // Check if allPosts is defined before filtering it
  const userPosts = allPosts.filter((post) => post.user_id === state.credential.credentials.userId);

  return (
    <div>
      {userPosts.map((post, index) => (
        <ImagePost key={index} post={post} />
      ))}
    </div>
  );
};

export default MyImages;
