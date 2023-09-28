import React from 'react'
import * as s from './style'


const RightMenu = () => {
  return (
    <s.Container>
    <s.RightMenuDiv>
      {/* Content for LeftMenuDiv */}
      <s.RightMenuItem>Item 1</s.RightMenuItem>
      <s.RightMenuItem>Item 2</s.RightMenuItem>
    </s.RightMenuDiv>
    <s.ContentDiv>
      {/* Content for the rest of the screen */}
    </s.ContentDiv>
  </s.Container>
  )
}

export default RightMenu
