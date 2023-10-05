import React, { useEffect, useState } from 'react';
import * as s from './style';
import ImagePost from '../ImagePost/ImagePost';
import UploadImage from '../../view/UploadImage';

const Content = ({ contentValue }) => {
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        'https://api-4uzdo5gwpq-uc.a.run.app/api/post',
        {
          method: 'GET',
        }
      );

      const postAPI = await response.json();
      setPostList(postAPI);
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
            {postList.map((post) => (
              <ImagePost key={post.id} image={post.image} />
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

