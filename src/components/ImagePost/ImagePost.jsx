import React, { useContext, useEffect, useState } from 'react';
import ImageActionBar from '../ImageActionBar/ImageActionBar';
import TextField from '../TextField/TextField';
import ButtonUser from '../Button/ButtonUser';
import Comment from '../Comment/Comment';
import userRegular from '../../assets/userRegular.svg';
import { UserContext } from '../../contexts/UserContext';
import { PostContext } from '../../contexts/PostContext';
import * as s from './styled'

const ImagePost = ({ image, openPost, postInView, setPostInView, post }) => {
  /* const usersContext = useContext(UserContext);
  const {LoginId} = useContext(AuthContext); */
  const { setOpenPost, setSinglePost } = useContext(PostContext);
  const [likes, setLikes] = useState(post.likes.length);


  const handleLike = async () => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/like/" + post.id,
        {
          method: "PUT",
          body: JSON.stringify({
            id: "LikeByAlex",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedPost = await response.json();

      // Find the like with the matching user_id (LoginId)
      const likedByUser = updatedPost.likes.find((like) => like.user_id === "done");

      if (likedByUser) {
        // If liked by the user, increase likes by 1
        setLikes(likes + 1);
      } else {
        // If not liked by the user, decrease likes by 1
        setLikes(likes - 1);
      }

      console.log('like finished');
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  useEffect(() => {
    // if (post?.user_id) usersContext.getUserById(post.user_id)
  }, [post]);

  const handleClick = () => {
    setOpenPost(true);
    setSinglePost(post);
  };

  return (
    <s.Container >
      <div  onClick={() => handleClick()}>
        <img src={userRegular} style={{ height: '20px', width: '35px', paddingTop: '10px' }} alt="Logo" />
        Posted by <b>{post.user_id}</b>
        <img src={post.image} style={{ width: '350px', paddingTop: '10px' }} alt="Logo" />
        <p>{post.text}</p>
      </div>
      <ImageActionBar numOfLikes={likes} numOfComments={post.comment?.length} postId={post.id} handleLike={handleLike}/>
      <TextField />
      <ButtonUser buttonName={'Post'} />
      {/* <Comment /> */}
    </s.Container>
  );
};

export default ImagePost;
