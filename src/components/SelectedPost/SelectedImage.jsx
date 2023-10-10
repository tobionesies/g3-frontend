import React, { useContext, useEffect, useState } from "react";
import * as s from "./style";
import Comment from "../Comment/Comment";
import ImageActionBar from "../ImageActionBar/ImageActionBar";
import TextField from "../TextField/TextField";
import Avatar from "../Avatar/Avatar";
import ImagePost from "../ImagePost/ImagePost";
import { Link } from "react-router-dom";
import basket from "../../assets/basket.jpg";
import userRegular from "../../assets/userRegular.svg";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UserContext";
 
const SelectedPost = ({ isOpen, onClose, postInView }) => {
  const {getUserById} = useContext(UserContext)
  const { singlePost, handleLike, handlePostComment } = useContext(PostContext);
  const [typedComment, setTypedComment] = useState("");
  console.log(singlePost);
  useEffect(() => {
    if (singlePost) getUserById(singlePost?.user_id)
  }, [singlePost])
  if (!isOpen) return null;
 
 
  const convertDate = (date) => {
    return `${date?.getDate?.()}.${
      date?.getMonth?.() + 1
    }.${date?.getFullYear?.()} ${date?.getHours?.()}:${date?.getMinutes?.()}`;
  };
 
  const handleComment = () => {
    handlePostComment(singlePost, typedComment);
    setTypedComment("");
  };
 
  return (
    <s.Container>
      <s.Content>
        <s.CloseBtn onClick={onClose}>x</s.CloseBtn>
 
        <s.LeftCol>
          <s.Informations>
            <div>
              {
                <img
                  src={userRegular}
                  style={{ height: "20px", width: "35px", paddingTop: "10px" }}
                  alt="Logo"
                />
              }
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>John Doe</div>
              <div>{convertDate(new Date(singlePost?.created_at))}</div>
            </div>
          </s.Informations>
          <img
            src={singlePost.image}
            style={{ height: "200px", width: "350px", paddingTop: "10px" }}
            alt="Logo"
          />
        </s.LeftCol>
        <s.RightCol>
          <ImageActionBar
            handleLike={() => handleLike(singlePost)}
            numOfComments={singlePost.comments?.length}
            numOfLikes={singlePost.likes?.length}
          />
          {
            singlePost.comments != null 
              ? <s.AllCommentsContainer>
               {singlePost.comments?.map?.((comment, index) => (
                  <s.CommentContainer key={index}>
                    <Comment userName={comment.user_id} comment={comment?.comment} date={comment?.updated_at} />
                  </s.CommentContainer>
                ))}
              </s.AllCommentsContainer>
            : <p>No comments</p>
          }
          <TextField value={typedComment} onChange={setTypedComment} />
          <s.SendButton onClick={handleComment}>Send comment</s.SendButton>
        </s.RightCol>
      </s.Content>
    </s.Container>
  );
};
 
export default SelectedPost;
 