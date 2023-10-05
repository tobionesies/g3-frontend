import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton = ({ onClick }) => {
  return (
    <Link to="/register" className="register-button" onClick={onClick}>
      Sign up
    </Link>
  );
};

export default RegisterButton;
