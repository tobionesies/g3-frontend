import React, { useContext, useEffect, useState } from 'react';
import ImageActionBar from '../ImageActionBar/ImageActionBar';
import TextField from '../TextField/TextField';
import ButtonUser from '../Button/ButtonUser';
import Comment from '../Comment/Comment';
import userRegular from '../../assets/userRegular.svg';
import { UserContext } from '../../contexts/UserContext';
import { PostContext } from '../../contexts/PostContext';

const ImagePost = ({ image, openPost, postInView, setPostInView, post }) => {
  const usersContext = useContext(UserContext);
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
      if (likes == 0) {
        setLikes(likes+1)
      } else
        setLikes(0)
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
    <div style={{ height: 'auto', borderBottom: 'solid 1px #c1c6c9', width: '350px', margin: '10px' }}>
      <img src={userRegular} style={{ height: '20px', width: '35px', paddingTop: '10px' }} alt="Logo" />
      Posted by <b>{post.user_id}</b>
      <img onClick={() => handleClick()} src={post.image} style={{ height: '200px', width: '350px', paddingTop: '10px' }} alt="Logo" />
      <p>{post.text}</p>
      <ImageActionBar numOfLikes={likes} numOfComments={post.comments?.length} postId={post.id} handleLike={handleLike}/>
      <TextField />
      <ButtonUser buttonName={'Post'} />
      {/* <Comment /> */}
    </div>
  );
};

export default ImagePost;
