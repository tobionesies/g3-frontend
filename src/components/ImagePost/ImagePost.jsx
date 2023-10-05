import React from 'react'
import ImageActionBar from '../ImageActionBar/ImageActionBar'
import TextField from '../TextField/TextField'
import ButtonUser from '../Button/ButtonUser'
import Comment from '../Comment/Comment'
import basket from '../../assets/basket.jpg'
import userRegular from '../../assets/userRegular.svg'
import { Link } from 'react-router-dom'

const ImagePost = () => {
  return (
    <div style={{  height: 'auto', borderBottom: 'solid 1px #c1c6c9', width: '350px', margin: '10px' }}>
       <img src={userRegular} style={{ height: '20px', width: '35px', paddingTop: '10px' }} alt="Logo" />
       Posted by <b>John Doe</b>
      <Link to={'/view/SinglePost'}>
        <img src={basket} style={{ height: '200px', width: '350px', paddingTop: '10px' }} alt="Logo" />
      </Link>  
        <ImageActionBar />
        <TextField />
        <ButtonUser buttonName={'Post'}/>
        {/* <Comment /> */}
    </div>
  )
}

export default ImagePost
