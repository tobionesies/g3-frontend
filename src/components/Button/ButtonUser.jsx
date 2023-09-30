import React from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';

const ButtonUser = ({ buttonName, buttonLink }) => {
  return (
    <Link to={buttonLink}>
        <s.Button>{buttonName}</s.Button>
    </Link>
    
  );
};

export default ButtonUser;
