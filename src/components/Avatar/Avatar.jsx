import React from 'react'
import * as s from './style'
import userRegular from "../../assets/userRegular.svg";


const Avatar = ({width, height}) => {
  return (
   <s.ImageDiv>
        <img
          src={userRegular}
          style={{ height: height, width: width }}
          alt="Avatar"
        />
   </s.ImageDiv>
  )
}

export default Avatar
