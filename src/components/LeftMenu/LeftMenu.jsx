import React from 'react'
import * as s from './style'

const LeftMenu = () => {
  return (
    <s.Container>
  <s.LeftMenuDiv>
    {/* Content for LeftMenuDiv */}
    <s.LeftMenuItem>Item 1</s.LeftMenuItem>
    <s.LeftMenuItem>Item 2</s.LeftMenuItem>
  </s.LeftMenuDiv>
  <s.ContentDiv>
    {/* Content for the rest of the screen */}
  </s.ContentDiv>
</s.Container>
  )
}

export default LeftMenu
