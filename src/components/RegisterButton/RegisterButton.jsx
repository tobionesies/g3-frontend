import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton = ({ onClick }) => {
  const buttonStyle = {
    backgroundColor: '#F0F8FF',
    color: 'black',
    padding: '5px 20px 8px',
    borderRadius: '8px',
    textDecoration: 'none',
    border: '1px solid black'
  };

  return (
    <Link to="/register" style={buttonStyle} onClick={onClick}>
      Sign up
    </Link>
  );
};

export default RegisterButton;
