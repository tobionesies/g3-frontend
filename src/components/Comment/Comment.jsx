import React, { useContext, useEffect, useState } from "react";
import * as s from './style'
import { UserContext } from "../../contexts/UserContext";
import { PostContext } from "../../contexts/PostContext";
import userRegular from "../../assets/userRegular.svg";
import { GETUSER } from "../../Utilities/GetSingleUser";
import { useAppContext } from "../../auth";

// Avatar
// Name Text TimeSent

const Comment = ({image, userName, comment, date}) => {
  const {state} = useAppContext()
  const [user, setUser] = useState(null)
  const [username, setUsername]=useState('username')
  const [pictureUrl, setPictureUrl] = useState(userRegular)
  const convertDate = (date) => {
    return `${date?.getDate?.()}.${
      date?.getMonth?.() + 1
    }.${date?.getFullYear?.()} ${date?.getHours?.()}:${date?.getMinutes?.()}`;
  };


  return (
    <s.CommentDiv>
      <s.LeftCol>
        <s.AvatarItem>
        <img
                  src={pictureUrl}
                  style={styles.imageUser}
                  alt="user image profile"
                />
        </s.AvatarItem>
        <div>

        </div>
      </s.LeftCol>
      <s.RightCol>
      <div style={{display: 'flex', justifyContent:'space-between', padding: '8px'}}>
        <s.UsernameItem>
          {username}
        </s.UsernameItem>
        <s.TimeItem>
          {convertDate(new Date(date))}
        </s.TimeItem>

      </div>
        <s.CommentText>
          {comment}
        </s.CommentText>
      </s.RightCol>
    </s.CommentDiv>
  )
}

const styles = {
  imageUser:{
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    border: '1px solid gray'
  },
};

export default Comment
