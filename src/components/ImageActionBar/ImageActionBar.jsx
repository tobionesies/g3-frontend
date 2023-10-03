import React from 'react'
import * as s from './style'
import heartRegular from '../../assets/heartRegular.svg'
import commentRegular from '../../assets/commentRegular.svg'

const ImageActionBar = () => {
  return (
    <s.Container>
    2 likes  <img src={heartRegular} style={{height: '20px', marginRight: '16px'}}/>
    1 comment <img src={commentRegular} style={{height: '20px', marginRight: '16px'}}/>
    </s.Container>
  )
}

export default ImageActionBar
