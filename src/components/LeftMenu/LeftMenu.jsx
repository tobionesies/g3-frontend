import React, {useContext} from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import ButtonUser from '../Button/ButtonUser'
import { AuthContext } from '../../contexts/Context'
import  houseIcon  from '../../assets/houseIcon.svg'
import folder from '../../assets/folder.svg'
import upload from '../../assets/upload.svg'
import SettingButton from '../SettingButton/SettingButton'
 


const LeftMenu = () => {
  const {userLoginName} = useContext(AuthContext)
  return (
  <s.Container>
  <s.LeftMenuDiv>
    <h2>Logged in as {userLoginName}</h2> 
    <s.LeftMenuItem>
     <img src={houseIcon} style={{ height: '30px', marginRight: '16px' }} alt="Logo" /> 
      All images
    </s.LeftMenuItem>
    <s.LeftMenuItem>
    <img src={folder} style={{ height: '30px', marginRight: '16px' }} alt="Logo" /> 
      My images
    </s.LeftMenuItem>
    <s.LeftMenuItem>
    <img src={upload} style={{ height: '30px', marginRight: '16px' }} alt="Logo" /> 
      Upload image
    </s.LeftMenuItem>
    <Avatar /> 
    <ButtonUser buttonName={"Logout"} buttonLink={"/"} />
    <SettingButton/>
    
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
  
</s.Container>
  )
}

export default LeftMenu
