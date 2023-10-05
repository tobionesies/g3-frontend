import React from 'react';
import * as s from './style';
import ImagePost from '../ImagePost/ImagePost';
import { Form } from 'react-router-dom';

const Content = ({ contentValue, openPost }) => {
  return (
    <s.Container>
      <s.ContentDiv>
        {contentValue === 'feed' ? (
          <>
            <button onClick={openPost}></button>
            <ImagePost />
            <ImagePost />
          </>
        ) : (
          <p>My images</p>
        )}
      </s.ContentDiv>
    </s.Container>
  );
};

export default Content;
