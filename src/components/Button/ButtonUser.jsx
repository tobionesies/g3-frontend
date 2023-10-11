import React, {useContext} from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';
import { UserContext } from '../../contexts/UserContext';

const ButtonUser = ({ buttonName, buttonLink, buttonFunction, userName, userPassword }) => {

  const {loginUser, accessToken, userLoginName, setUserLoginName, 
    userLoginPassWord, setUserLoginPassWord
  } = useContext(UserContext)

    const updateUserName = () => {
      if (buttonFunction == 'login') {
        
        setUserLoginName(userName)
        setUserLoginPassWord(userPassword)

        
      } else {
        console.log('did not update username')
      }
      console.log('access här')
      console.log(accessToken)
    }

    
  return (
    <Link to={buttonLink}>
        <s.Button onClick={updateUserName}>{buttonName}</s.Button>
    </Link>
    
  );
};

export default ButtonUser;
