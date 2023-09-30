import React, {useContext} from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Context';

const ButtonUser = ({ buttonName, buttonLink, buttonFunction, newName }) => {
  const {userLoginName, setUserLoginName} = useContext(AuthContext)

    const updateUserName = () => {
      if (buttonFunction == 'login') {
        setUserLoginName(newName)
    } else {
      console.log('did not update username')
    }
    }

    
  return (
    <Link to={buttonLink}>
        <s.Button onClick={updateUserName}>{buttonName}</s.Button>
    </Link>
    
  );
};

export default ButtonUser;
