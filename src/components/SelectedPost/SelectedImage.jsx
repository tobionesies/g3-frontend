import React from 'react'
import * as s from './style'
import Comment from '../Comment/Comment'
import ImageActionBar from '../ImageActionBar/ImageActionBar'
import TextField from '../TextField/TextField'
import Avatar from '../Avatar/Avatar'
import ImagePost from '../ImagePost/ImagePost'
import { Link } from 'react-router-dom'
import basket from '../../assets/basket.jpg'


const SelectedPost = ({isOpen, onClose, postInView}) => {
  if(!isOpen) return null;

  return (
    <s.Container>
      <s.Content>
          <s.CloseBtn onClick={onClose}>x</s.CloseBtn>
        <s.LeftCol>
            <img src={postInView.image} style={{ height: '200px', width: '350px', paddingTop: '10px' }} alt="Logo" />
        </s.LeftCol>
        <s.RightCol>
          <div>{postInView.userAvatar}</div>
          <div>{postInView.userId}</div>
          {/* <Avatar /> */}
          <ImageActionBar />
          {/* <Comment /> */}
          <div>{postInView.comments}</div>
          <TextField />
        </s.RightCol>
      </s.Content>
    </s.Container>
  )
}

export default SelectedPost