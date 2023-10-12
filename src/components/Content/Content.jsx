import React, { useEffect, useState } from "react";
import * as s from "./style";
import ImagePost from "../ImagePost/ImagePost";
import { useAppContext } from "../../auth";
import { useQuery} from "react-query";
import SkeletonLoader from "./SkeletonLoader";

const Content = ({openPost, setPostInView }) => {
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

  const { data, error, isLoading } = useQuery("posts", getPosts);

  if (isLoading)
    return (
      <div>
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <s.Container>
      <s.ContentDiv>
        {data.map((post, index) => (
          <ImagePost
            key={index}
            post={post}
            openPost={openPost}
            setPostInView={setPostInView}
          />
        ))}
      </s.ContentDiv>
    </s.Container>
  );
};

export default Content;
