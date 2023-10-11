import { useEffect, useState} from 'react'
import * as s from './style'
import heartRegular from '../../assets/heartRegular.svg'
import heartSolid from '../../assets/heartSolid.svg'
import commentRegular from '../../assets/commentRegular.svg'
import { AuthContext } from '../../contexts/Context'
import { useAppContext } from '../../auth'

 
const ImageActionBar = ({numOfLikes, numOfComments, handleLike, postId}) => {
  const {state} = useAppContext(AuthContext);
  const [myLikes, setMyLikes] = useState(false);


  const getPost = async () => {
    console.log('get single post')
    try {
      const response = await fetch(
        'https://api-4uzdo5gwpq-uc.a.run.app/api/post/' + postId,
        {
          method: 'GET',
          headers:{
            authorization: `${state.credentials.token}`
          }
        }
      );
 
      const postAPI = await response.json();
      console.log(postAPI[0].likes)
      postAPI.likes.forEach((post) => {
        if (post.id === state.credentials.userId) {
          setMyLikes(true)
          
        } else {
          setMyLikes(false)
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (post?.user_id) usersContext.getUserById(post.user_id)
    getPost()
  }, []);


 /*  const handleLike = async () => {
    try {
      console.log('do stuff');
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/post/like/04246e65-f07b-43f2-91e0-3c74003dec20",
        {
          method: "PUT",
          body: JSON.stringify({
            id: "LikeByAlex",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('like finished');
    } catch (error) {
      console.error("Error during like:", error);
    }
  };   */

  return (
    <s.Container>
    {numOfLikes || 0} likes{' '}
    <img
      src={numOfLikes === 0 ? heartRegular : heartSolid}
      style={{ height: '20px', marginRight: '16px', cursor: 'pointer' }}
      onClick={handleLike}
    />
    {numOfComments || 0} comment <img src={commentRegular} style={{ height: '20px', marginRight: '16px' }} />
  </s.Container>
  )
}
 
export default ImageActionBar
 