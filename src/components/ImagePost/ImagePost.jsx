import React from 'react'
import ImageActionBar from '../ImageActionBar/ImageActionBar'
import TextField from '../TextField/TextField'
import ButtonUser from '../Button/ButtonUser'
import Comment from '../Comment/Comment'
import basket from '../../assets/basket.jpg'

const ImagePost = () => {
  return (
    <div style={{  height: '200px' }}>
        <img src={basket} style={{ height: '200px', paddingTop: '10px' }} alt="Logo" />
        <ImageActionBar />
        <TextField />
        <ButtonUser buttonName={'Post'}/>
        <Comment />
    </div>
  )
}

export default ImagePost
