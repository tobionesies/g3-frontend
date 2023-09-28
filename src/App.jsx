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
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <LeftMenu />
        <div style={{ height: '200px' }}>
          <img src={reactLogo} style={{ height: '100px', marginLeft: '80px' }} alt="Logo" />
          <TextField />
          <ImageActionBar />
          <Comment />
          <ButtonUser/>
        </div>
        
        <RightMenu />
    </div>
      
      
      
      
      
    </>
  )
}

export default App
