import React from 'react'
import * as s from './style'
import heartRegular from '../../assets/heartRegular.svg'
import commentRegular from '../../assets/commentRegular.svg'
 
const ImageActionBar = ({numOfLikes, numOfComments, handleLike}) => {
  return (
    <s.Container>
    {numOfLikes || 0} likes  <img src={heartRegular} style={{height: '20px', marginRight: '16px', cursor: "pointer"}} onClick={handleLike}/>
    {numOfComments || 0} comment <img src={commentRegular} style={{height: '20px', marginRight: '16px'}}/>
    </s.Container>
  )
}
 
export default ImageActionBar
 