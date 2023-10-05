import React, {useContext} from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import ButtonUser from '../Button/ButtonUser'
import { AuthContext } from '../../contexts/Context'
import  houseIcon  from '../../assets/houseIcon.svg'
import folder from '../../assets/folder.svg'
import upload from '../../assets/upload.svg'
import { Link } from 'react-router-dom'
import SettingButton from '../SettingButton/SettingButton'
 


const LeftMenu = () => {
  const {userLoginName} = useContext(AuthContext)
  return (
  <s.Container>
  <s.LeftMenuDiv>
    <p>Logged in as {userLoginName}</p> 
    <Link to={'/view/FeedPage'}>
    <s.LeftMenuItem>
     <img src={houseIcon} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      All images
    </s.LeftMenuItem>
    </Link>
    <Link to={'/view/MyImages'}>
    <s.LeftMenuItem>
    <img src={folder} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      My images
    </s.LeftMenuItem>
    </Link>
    <s.LeftMenuItem>
    <img src={upload} style={{ height: '20px', marginRight: '16px' }} alt="Logo" /> 
      Upload image
    </s.LeftMenuItem>
    <Avatar /> 
    <SettingButton/>
    <ButtonUser buttonName={"Logout"} buttonLink={"/"} />
    
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
 
</s.Container>
  )
}

export default LeftMenu
