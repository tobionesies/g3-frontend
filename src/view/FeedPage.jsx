import React from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ImageActionBar from '../components/ImageActionBar/ImageActionBar'
import TextField from '../components/TextField/TextField'
import ButtonUser from '../components/Button/ButtonUser'
import Comment from '../components/Comment/Comment'
import basket from '../assets/basket.jpg'
import RightMenu from '../components/RightMenu/RightMenu'

const FeedPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
       <LeftMenu />
        <div style={{ height: '200px' }}>
          <img src={basket} style={{ height: '200px', paddingTop: '10px' }} alt="Logo" />
          <ImageActionBar />
          <TextField />
          <ButtonUser buttonName={"knapp"} />
          <Comment />
        </div>
        <RightMenu />
      </div>
    </div>
  )
}

export default FeedPage
