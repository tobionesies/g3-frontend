import React from 'react'
import ImageActionBar from '../ImageActionBar/ImageActionBar'
import TextField from '../TextField/TextField'
import ButtonUser from '../Button/ButtonUser'
import Comment from '../Comment/Comment'
import basket from '../../assets/basket.jpg'
import userRegular from '../../assets/userRegular.svg'
import { Link } from 'react-router-dom'

const ImagePost = ({image, openPost, postInView, setPostInView}) => {

  

  const handleClick = () => {
  //setPostInView should populate it's keys with values of post
    setPostInView({
      userAvatar: "test_avatar",
      userId: "test_username",
      image: image,
      text: "test_text",
      comments: ["test_comment"]
    })
    openPost()
  }

  return (
    <div style={{  height: 'auto', borderBottom: 'solid 1px #c1c6c9', width: '350px', margin: '10px' }}>
       <img src={userRegular} style={{ height: '20px', width: '35px', paddingTop: '10px' }} alt="Logo" />
       Posted by <b>John Doe</b>
      {/* <Link to={'/view/SinglePost'}> */}
        <img onClick={() => handleClick()} src={image} style={{ height: '200px', width: '350px', paddingTop: '10px' }} alt="Logo" />
      {/* </Link>   */}
        <ImageActionBar />
        <TextField />
        <ButtonUser buttonName={'Post'}/>
        {/* <Comment /> */}
    </div>
  )
}

export default ImagePost
