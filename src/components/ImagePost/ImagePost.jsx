import React, { useContext, useEffect, useState } from 'react'
import ImageActionBar from '../ImageActionBar/ImageActionBar'
import TextField from '../TextField/TextField'
import ButtonUser from '../Button/ButtonUser'
import Comment from '../Comment/Comment'
import basket from '../../assets/basket.jpg'
import userRegular from '../../assets/userRegular.svg'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { PostContext } from '../../contexts/PostContext'
 
const ImagePost = ({image, openPost, postInView, setPostInView, post}) => {
  const usersContext = useContext(UserContext);
  const {setOpenPost, setSinglePost} = useContext(PostContext);
 
  useEffect(() => {
    // if (post?.user_id) usersContext.getUserById(post.user_id)
  }, [post])
 
  
 
  const handleClick = () => {
  //setPostInView should populate it's keys with values of post
    setOpenPost(true);
    setSinglePost(post)
  }
 
  const handleLike = () => {
 
  }
 
  return (
    <div style={{  height: 'auto', borderBottom: 'solid 1px #c1c6c9', width: '350px', margin: '10px' }}>
       <img src={userRegular} style={{ height: '20px', width: '35px', paddingTop: '10px' }} alt="Logo" />
       Posted by <b>John Doe</b>
      {/* <Link to={'/view/SinglePost'}> */}
        <img onClick={() => handleClick()} src={post.image} style={{ height: '200px', width: '350px', paddingTop: '10px' }} alt="Logo" />
      {/* </Link>   */}
        <ImageActionBar numOfLikes={post.likes.length} numOfComments={post.comments?.length} handleLike={handleLike} />
        <TextField />
        <ButtonUser buttonName={'Post'}/>
        {/* <Comment /> */}
    </div>
  )
}
 
export default ImagePost
 