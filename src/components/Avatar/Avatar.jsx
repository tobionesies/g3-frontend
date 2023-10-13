import { useState, useEffect } from "react";
import * as s from "./style";
import userRegular from "../../assets/userRegular.svg";
import { useAppContext } from "../../auth";
import {FiChevronDown} from 'react-icons/fi';

const Avatar = () => {
  const { state, dispatch } = useAppContext();
  const [userData, setUserData] = useState(null);

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleChevronClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  useEffect(() => {
    user();
  }, [state.credential.credentials.userId]);

  const user = async () => {
    const res = await fetch(
      "https://api-4uzdo5gwpq-uc.a.run.app/api/user/" +
        state.credential.credentials.userId,
      {
        headers: {
          authorization: state.credential.credentials.token,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      setUserData(data);
    } else {
      alert(`
      Oops!!!\n
      😱 Something went wrong.\n
      HTTP ERROR : ${res.status} \n
      * Please check you connection \n
      * Make sure you are logged in`);
    }
  };
  let pictureUrl
  if(userData){
      pictureUrl =
      userData.customClaims.picture == undefined
        ? userRegular 
        :userData.customClaims.picture ;

  }
  const handleLogOut = (screenName)=>{
    dispatch({type:'LOGOUT', screen: screenName})
  }

  return(
    <>
      {userData && (
        <s.ImageDiv>
          
          <img src={pictureUrl} alt="Avatar" />
          <span>{userData.customClaims.username}</span>
          <p onClick={handleChevronClick}>
            <FiChevronDown size={25} />
          </p>
        </s.ImageDiv>
      )}

      {isBoxVisible && (
        <div style={{ position: 'absolute', top: '50px', left: '0', background: 'white', border: '1px solid #d6d3d2', paddingLeft: '20px', paddingRight: '20px', marginTop: '580px', marginLeft: '150px' }}>
          {/* Content of the box */}
          <div onClick={handleLogOut}>Logout</div>
          {/* Add other content as needed */}
        </div>
      )}
    </>
  );
};

export default Avatar;
