import React from 'react'
import * as s from './style'
import heartRegular from '../../assets/heartRegular.svg'
import commentRegular from '../../assets/commentRegular.svg'
 
const ImageActionBar = ({numOfLikes, numOfComments, postId}) => {

  const handleLike = async () => {
    try {
      console.log('do stuff')
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/like/",
        {
          method: "PUT",
          body: JSON.stringify(
            {
              "id":"21773dfe-5aaf-4d8d-bb0d-09112aac1a29",
            }
          ),
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <s.Container>
    {numOfLikes || 0} likes  <img src={heartRegular} style={{height: '20px', marginRight: '16px', cursor: "pointer"}} onClick={handleLike}/>
    {numOfComments || 0} comment <img src={commentRegular} style={{height: '20px', marginRight: '16px'}}/>
    </s.Container>
  )
}
 
export default ImageActionBar
 