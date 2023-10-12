import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-username"></div>
      </div>
      <div className="skeleton-text"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-actionbar"></div>
    </div>
  );
};

export default SkeletonLoader;
