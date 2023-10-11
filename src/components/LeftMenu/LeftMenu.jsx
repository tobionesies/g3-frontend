import React, {useContext} from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import ButtonUser from '../Button/ButtonUser'
import  houseIcon  from '../../assets/houseIcon.svg'
import folder from '../../assets/folder.svg'
import upload from '../../assets/upload.svg'
import { Link } from 'react-router-dom'
import SettingButton from '../SettingButton/SettingButton'
import { useAppContext } from '../../auth'
 


const LeftMenu = () => {
  const {state, dispatch} = useAppContext()

  const handleScreenChange = (screenName)=>{
    dispatch({type:'SET_SCREEN', screen: screenName})
  }

  return (
  <s.Container>
  <s.LeftMenuDiv>
    <p>ImageSharing App</p> 
  
    <s.LeftMenuItem onClick={()=> handleScreenChange('FEEDPAGE')}>
     <img src={houseIcon} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      All images
    </s.LeftMenuItem>

    <Link to={'/view/MyImages'}>
    <s.LeftMenuItem>
    <img src={folder} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      My images
    </s.LeftMenuItem>
    </Link>
    <s.LeftMenuItem>
    <Link to={'/view/UploadImage'}>
    <img src={upload} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      Upload image
    </Link>
    </s.LeftMenuItem>
    <SettingButton/>
    <ButtonUser buttonName={"Logout"} buttonLink={"/"} />
    
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
  <s.Profile>
    <Avatar height={"30px"} width={"25px"} /> 
  </s.Profile>
 
</s.Container>
  )
}

export default LeftMenu
