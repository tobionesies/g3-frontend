import React from 'react';
import * as s from './style';
import ImagePost from '../ImagePost/ImagePost';

const Content = ({ contentValue }) => {
  return (
    <s.Container>
      <s.ContentDiv>
        {contentValue === 'feed' ? (
          <>
            <ImagePost />
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
