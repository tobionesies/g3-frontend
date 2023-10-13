import React, { useContext, useEffect, useState } from "react";
import ImageActionBar from "../ImageActionBar/ImageActionBar";
import TextField from "../TextField/TextField";
import ButtonUser from "../Button/ButtonUser";
import Comment from "../Comment/Comment";
import userRegular from "../../assets/userRegular.svg";
import { UserContext } from "../../contexts/UserContext";
import { PostContext } from "../../contexts/PostContext";
import Post from "./Post";
import * as s from "./styled";
import { useAppContext } from "../../auth";
import { FiMoreVertical } from "react-icons/fi";
import { GETUSER } from "../../Utilities/GetSingleUser";

const ImagePost = ({ image, openPost, postInView, setPostInView, post }) => {
  /* const usersContext = useContext(UserContext);
  const {LoginId} = useContext(AuthContext); */
  const { setOpenPost, setSinglePost } = useContext(PostContext);

  const [likes, setLikes] = useState(post.likes.length);
  const [likeTrack, setlikeTrack] = useState(0);
  const [postUser, setPostUser] = useState(null);
  const { state } = useAppContext();

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://api-4uzdo5gwpq-uc.a.run.app/api/post/like/${post.id}`,
        {
          method: "PUT",
          headers: {
            authorization: state.credential.credentials.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: state.credential.credentials.userId, // Replace with the actual user ID
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedPost = await response.json();

      // Find the like with the matching user_id (LoginId)
      const likedByUser = updatedPost.likes.find(
        (like) => like.user_id === state.credential.credentials.userId
      );

      if (likedByUser) {
        // If liked by the user, increase likes by 1
        setLikes(likes + 1);

        setlikeTrack(1);
      } else {
        // If not liked by the user, decrease likes by 1
        setLikes(likes - 1);

        setlikeTrack(0);
      }
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  useEffect(() => {
    // if (post?.user_id) usersContext.getUserById(post.user_id)
  }, [post, likes, likeTrack]);

  useEffect(() => {
    const url = "https://api-4uzdo5gwpq-uc.a.run.app/api/user/";
    GETUSER(url, post.user_id, state.credential.credentials.token)
      .then((data) => {
        setPostUser(data);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, [post]);

  const handleClick = () => {
    setOpenPost(true);
    setSinglePost(post);
  };

  return (
    <s.Container>
      <div onClick={() => handleClick()}>
        <s.PostHeader>
          <s.UserImage
            src={
              postUser && postUser.customClaims && postUser.customClaims.picture
                ? postUser.customClaims.picture
                : userRegular
            }
            alt="avatar"
          />
          <span>
            Posted by <b>{post.username ? post.username : "username"}</b>
          </span>
          <div>
            <FiMoreVertical size={25} />
          </div>
        </s.PostHeader>
        <Post text={post.text} />
        <s.ImagePostContainer>
          <s.PostImage src={post.image} loading="lazy" alt={post.category} />
        </s.ImagePostContainer>
      </div>
      <ImageActionBar
        numOfLikes={likes}
        numOfComments={post.comment?.length}
        postId={post.id}
        handleLike={handleLike}
        likeTrack={likeTrack}
        setlikeTrack={setlikeTrack}
      />
      {/* <Comment /> */}
    </s.Container>
  );
};

export default ImagePost;
