import React from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'
import ButtonUser from '../Button/ButtonUser'

const LeftMenu = () => {
  return (
    <s.Container>
  <s.LeftMenuDiv>
    <s.LeftMenuItem>Item 1</s.LeftMenuItem>
    <s.LeftMenuItem>Item 2</s.LeftMenuItem>
    <Avatar /> 
    <ButtonUser buttonName={"Logout"} buttonLink={"/"} />
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
  
</s.Container>
  )
}

export default LeftMenu
