import React, { useContext, useEffect, useState } from "react";
import * as s from "./style";
import ImagePost from "../ImagePost/ImagePost";
import { useAppContext } from "../../auth";
import { useQuery} from "react-query";
import SelectedPost from '../SelectedPost/SelectedImage'
import SkeletonLoader from "./SkeletonLoader";
import { PostContext } from "../../contexts/PostContext";
import A from '../../Utilities/SortData.js'

const Content = ({ setPostInView }) => {
  const { state } = useAppContext();

  const {openPost, setOpenPost} = useContext(PostContext);
  const closeSelectedPost = () => setOpenPost(false);

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

  const { data, error, isLoading } = useQuery("posts", getPosts);

  
  if (isLoading)
  return (
    <div>
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
    if (error) return <div>Error: {error.message}</div>;
    
    const sortedData = A.sortDataByTimeCreated(data)
      

  return (
    <s.Container>
      <s.ContentDiv>
        {sortedData.map((post, index) => (
          <ImagePost
            key={index}
            post={post}
            openPost={openPost}
            setPostInView={setPostInView}
          />
        ))}
        <SelectedPost isOpen={openPost} onClose={closeSelectedPost} />
      </s.ContentDiv>
    </s.Container>
  );
};

export default Content;
