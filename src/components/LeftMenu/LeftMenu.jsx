import React from 'react'
import * as s from './style'
import Avatar from '../Avatar/Avatar'

const LeftMenu = () => {
  return (
    <s.Container>
  <s.LeftMenuDiv>
    <s.LeftMenuItem>Item 1</s.LeftMenuItem>
    <s.LeftMenuItem>Item 2</s.LeftMenuItem>
    <Avatar /> 
  </s.LeftMenuDiv>
  <s.ContentDiv> 
  </s.ContentDiv>
 
</s.Container>
  )
}

export default LeftMenu
