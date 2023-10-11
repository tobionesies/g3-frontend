import React, { useEffect, useState, useContext } from 'react';
import * as s from './style';
import ImagePost from '../ImagePost/ImagePost';
import UploadImage from '../../view/UploadImage';
import { Form } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Content = ({ contentValue, openPost, setPostInView }) => {
  const { loginUser, accessToken, setAccessToken, loginId } = useContext(UserContext);
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://api-4uzdo5gwpq-uc.a.run.app/api/post',
        {
          method: 'GET',
          headers: {
            'authorization': accessToken
            // Add other headers if needed
          },
        }
      );

      const postAPI = await response.json();
      setPostList(postAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loginUser();

      // Add a delay (e.g., 1000 milliseconds or 1 second) before calling getPosts
      setTimeout(async () => {
        await getPosts();
        
      }, 3000); // Adjust the delay as needed
    };

    fetchData();
  }, [loginUser]);

  return (
    <s.Container>
      <s.ContentDiv>
        {contentValue === 'feed' && postList.length > 0 ? (
          postList.map((post, index) => (
            <ImagePost key={index} post={post} openPost={openPost} setPostInView={setPostInView} />
          ))
        ) : contentValue === 'upload' ? (
          <p>Upload content</p>
        ) : (
          <p>Loading...</p>
        )}
      </s.ContentDiv>
    </s.Container>
  );
};

export default Content;
