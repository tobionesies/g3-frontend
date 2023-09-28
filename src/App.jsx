import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageActionBar from './components/ImageActionBar/ImageActionBar'
import Comment from './components/Comment/Comment'
import TextField from './components/TextField/TextField'
import RightMenu from './components/RightMenu/RightMenu'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Button from './components/Button'
import Avatar from './components/Avatar/Avatar'
import ButtonUser from './components/Button/ButtonUser'

function App() {

  return (
    <>
      <h1>
        hej
      </h1>
      <ImageActionBar />
      <Comment />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <LeftMenu />
  <TextField />
  <RightMenu />
</div>
      
      <ButtonUser/>
      
      
      <Avatar />
    </>
  )
}

export default App
