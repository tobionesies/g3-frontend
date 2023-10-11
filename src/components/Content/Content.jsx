import React, { useEffect, useState } from 'react';
import * as s from './style';
import ImagePost from '../ImagePost/ImagePost';
import UploadImage from '../../view/UploadImage';
import { Form } from 'react-router-dom';
import { useAppContext } from '../../auth';
 
const Content = ({ contentValue, openPost, setPostInView }) => {
  const [postList, setPostList] = useState([]);
  const {state} = useAppContext()
 
  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://api-4uzdo5gwpq-uc.a.run.app/api/post',
        {
          method: 'GET',
          headers:{
            authorization: `${state.credential.credentials.token}`
          }
        }
      );
        if(response.ok){
          const postAPI = await response.json();
          setPostList(postAPI);
        }else{
          throw new Error('Failed to load posts');
        }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getPosts();
  }, []);
 
 
  return (
    <s.Container>
      <s.ContentDiv>
        {contentValue === 'feed' ? (
          <>
            {postList.map((post, index) => (
              <ImagePost key={index} post={post} openPost={openPost} setPostInView={setPostInView} />
            ))}
          </>
        ) : contentValue === 'upload' ? (
         <p>Upload content</p>
        ) : (
          <p>Error</p>
        )}
      </s.ContentDiv>
    </s.Container>
  );
};
 
export default Content;
 
 
