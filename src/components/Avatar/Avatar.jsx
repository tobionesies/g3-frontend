import { useState, useEffect } from "react";
import * as s from "./style";
import userRegular from "../../assets/userRegular.svg";
import { useAppContext } from "../../auth";
import {FiChevronDown} from 'react-icons/fi';

const Avatar = () => {
  const { state } = useAppContext();
  const [userData, setUserData] = useState(null);

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
      console.log(data)
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

  return (
    <>
      {userData && (
        <s.ImageDiv>
          <img
            src={pictureUrl}
            alt="Avatar"
          />
          <span>{userData.customClaims.username}</span>
          <p>
           <FiChevronDown size={25} />
          </p>
        </s.ImageDiv>
      )}
    </>
  );
};

export default Avatar;
