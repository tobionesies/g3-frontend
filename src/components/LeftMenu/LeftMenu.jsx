import React, {useContext} from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import ButtonUser from '../Button/ButtonUser'
import { AuthContext } from '../../contexts/Context'

const LeftMenu = () => {
  const {userLoginName} = useContext(AuthContext)
  return (
  <s.Container>
  <s.LeftMenuDiv>
    <h2>Logged in as {userLoginName}</h2>
    <s.LeftMenuItem>All images</s.LeftMenuItem>
    <s.LeftMenuItem>My images</s.LeftMenuItem>
    <s.LeftMenuItem>Upload image</s.LeftMenuItem>
    <Avatar /> 
    <ButtonUser buttonName={"Logout"} buttonLink={"/"} />
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
  
</s.Container>
  )
}

export default LeftMenu
