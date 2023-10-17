import React, { useContext, useEffect, useState } from "react";
import * as s from "./style";
import Comment from "../Comment/Comment";
import ImageActionBar from "../ImageActionBar/ImageActionBar";
import TextField from "../TextField/TextField";
import userRegular from "../../assets/userRegular.svg";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UserContext";
import { GETUSER } from "../../Utilities/GetSingleUser";
import { useAppContext } from "../../auth";
import {RiSendPlane2Fill} from 'react-icons/ri';

const SelectedPost = ({ isOpen, onClose, postInView }) => {
  const { getUserById, accessToken } = useContext(UserContext);
  const { singlePost, handleLike, handlePostComment } = useContext(PostContext);
  const [typedComment, setTypedComment] = useState("");
  const { state } = useAppContext();
  const [postUser, setPostUser] = useState(null);

  useEffect(() => {
    if (singlePost) {
      getUserById(singlePost?.user_id);
    }
  }, [singlePost]);

  useEffect(()=>{
    const url = "https://api-4uzdo5gwpq-uc.a.run.app/api/user/"
    console.log(singlePost)
    GETUSER(url,singlePost.user_id , state.credential.credentials.token)
    .then((data) => {
      setPostUser(data)
    })
    .catch((error) => {
      console.log("An error occurred:", error);
  });
  },[singlePost])

  if (!isOpen) return null;

  const convertDate = (date) => {
    return `${date?.getDate?.()}.${
      date?.getMonth?.() + 1
    }.${date?.getFullYear?.()} ${date?.getHours?.()}:${date?.getMinutes?.()}`;
  };

  const handleComment = () => {
    handlePostComment(singlePost, typedComment, accessToken);
    setTypedComment("");
  };

  
  
 

  let pictureUrl = userRegular
  if (postUser != null) {
    pictureUrl = postUser.customClaims?.picture 
  }

  let username = 'username'
  if (postUser != null) {
    username = postUser.customClaims?.username
  }

  return (
    <s.Container>
      <s.Content>
        <s.CloseBtn onClick={onClose}>x</s.CloseBtn>

        <s.LeftCol>
          <s.Informations>
            <div>
                <img
                  src={pictureUrl}
                  style={styles.imageUser}
                  alt="Logo"
                />
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>{username}</div>
              <div>{convertDate(new Date(singlePost?.created_at))}</div>
            </div>
          </s.Informations>
          <img src={singlePost.image} style={styles.imagePost} alt="Logo" />
        </s.LeftCol>
        <s.RightCol>
          <ImageActionBar
            handleLike={() => handleLike(singlePost)}
            numOfComments={singlePost.comment?.length}
            numOfLikes={singlePost.likes?.length}
          />
          {singlePost.comment != null ? (
            <s.AllCommentsContainer>
              {singlePost.comment?.map?.((comment, index) => (
                <s.CommentContainer key={index}>
                  <Comment
                    userName={comment.user_id}
                    comment={comment?.comment}
                    date={comment?.updated_at}
                  />
                </s.CommentContainer>
              ))}
            </s.AllCommentsContainer>
          ) : (
            <p>No comments</p>
          )}
          <div style={styles.bottomComment}>
            <TextField value={typedComment} onChange={setTypedComment} />
            <RiSendPlane2Fill onClick={handleComment} size={40} color='blue' />
          </div>
        </s.RightCol>
      </s.Content>
    </s.Container>
  );
};

const styles = {
  imagePost: {
    paddingTop: "10px",
    paddingInline: "auto",
    width: "75%",
    aspectRatio: "1/1",
  },
  imageUser:{
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: '1px solid gray'
  },
  bottomComment:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    paddingRight: 10,
  }
};

export default SelectedPost;
