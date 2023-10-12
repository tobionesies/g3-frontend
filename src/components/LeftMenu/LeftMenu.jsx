import React, {useContext} from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import { useAppContext } from '../../auth'
import {FiHome, FiFolder, FiUpload, FiSettings} from 'react-icons/fi'
import { Button } from 'bootstrap'
 


const LeftMenu = () => {
  const {state, dispatch} = useAppContext()

  const handleScreenChange = (screenName)=>{
    dispatch({type:'SET_SCREEN', screen: screenName})
  }

 

  return (
  <s.Container>
  <s.LeftMenuDiv>
    <s.Header>
      <p>ImageSharing App</p> 
    </s.Header>
  
    <s.LeftMenuItem isActive={state.screen.FEEDPAGE} onClick={()=> handleScreenChange('FEEDPAGE')}>
     <FiHome size={20}/>
      <span>All images</span>
    </s.LeftMenuItem>

   
    <s.LeftMenuItem isActive={state.screen.MYIMAGE} onClick={()=> handleScreenChange('MYIMAGE')}>
      <FiFolder size={20}/>
      <span>My images</span>
    </s.LeftMenuItem>
   
    <s.LeftMenuItem isActive={state.screen.UPLOADIMAGE} onClick={()=> handleScreenChange('UPLOADIMAGE')}>
      <FiUpload size={20}/>
      <span>Create Post</span>
    </s.LeftMenuItem>

    <s.LeftMenuItem isActive={state.screen.SETTINGS} onClick={()=> handleScreenChange('SETTINGS')}>
      <FiSettings size={20}/>
      <span>Settings</span>
    </s.LeftMenuItem>

     
    
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
  <s.Profile>
    <Avatar /> 
  </s.Profile>
 
</s.Container>
  )
}

export default LeftMenu
