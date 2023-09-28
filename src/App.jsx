import { useState } from 'react'
import reactLogo from './assets/react.svg'
import basket from './assets/basket.jpg'
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
          <img src={basket} style={{ height: '200px' }} alt="Logo" />
          <ImageActionBar />
          <TextField />
          <ButtonUser/>
          <Comment />
          <Comment />
          
        </div>
        
        <RightMenu />
    </div>
      
      
      
      
      
    </>
  )
}

export default App
