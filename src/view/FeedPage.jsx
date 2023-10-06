
     
import React, {useContext, useState} from 'react'
import LeftMenu from '../components/LeftMenu/LeftMenu'
import ImageActionBar from '../components/ImageActionBar/ImageActionBar'
import TextField from '../components/TextField/TextField'
import ButtonUser from '../components/Button/ButtonUser'
import Comment from '../components/Comment/Comment'
import basket from '../assets/basket.jpg'
import RightMenu from '../components/RightMenu/RightMenu'
import { AuthContext } from '../contexts/Context'
import ImagePost from '../components/ImagePost/ImagePost'
import Content from '../components/Content/Content'
import SelectedPost from '../components/SelectedPost/SelectedImage'
import { PostContext } from '../contexts/PostContext'
 
const FeedPage = () => {
  const {ImageFilter} = useContext(AuthContext)
  const {openPost, setOpenPost} = useContext(PostContext);
  console.log(openPost)
 
  const closeSelectedPost = () => setOpenPost(false);
 
  console.log('Nuvarande filter = ' + ImageFilter)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0', padding: '0' }}>
    <LeftMenu />
    {/* <ImagePost /> */}
    <SelectedPost isOpen={openPost} onClose={closeSelectedPost} />
    <Content contentValue={'feed'} />
    <RightMenu />
  </div>
 
  )
}
 
export default FeedPage
 