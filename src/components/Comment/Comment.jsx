import React, { useContext, useEffect, useState } from "react";
import * as s from './style'
import { UserContext } from "../../contexts/UserContext";
import { PostContext } from "../../contexts/PostContext";
import Avatar from "../Avatar/Avatar";

// Avatar
// Name Text TimeSent

const Comment = ({image, userName, comment, date}) => {

  const convertDate = (date) => {
    return `${date?.getDate?.()}.${
      date?.getMonth?.() + 1
    }.${date?.getFullYear?.()} ${date?.getHours?.()}:${date?.getMinutes?.()}`;
  };

  return (
    <s.CommentDiv>
      <s.LeftCol>
        <s.AvatarItem>
          <Avatar image={"image here"} height={"50px"} width={"50px"}/>
        </s.AvatarItem>
      </s.LeftCol>
      <s.RightCol>
        <s.UsernameItem>
          {userName}
        </s.UsernameItem>
        <s.CommentText>
          {comment}
        </s.CommentText>
        <s.TimeItem>
          {convertDate(new Date(date))}
        </s.TimeItem>
      </s.RightCol>
    </s.CommentDiv>
  )
}

export default Comment
