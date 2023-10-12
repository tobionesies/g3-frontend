import { useState } from 'react';

const Post = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const renderText = () => {
    if (showFullText) {
      return text;
    }
    return text.substring(0, 100);
  };

  return (
    <div style={{marginTop:'10px'}}>
      <span>{renderText()} { (!showFullText && text.length > 100) && '...'}</span>
      {
            text.length > 100 &&(
      <span style={{color:'blue'}} onClick={toggleText}>
        {showFullText ? 'See Less' : 'See More'}
      </span>)
      }
    </div>
  );
};

export default Post;
