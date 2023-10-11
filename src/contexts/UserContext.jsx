import React, { createContext, useState, useEffect } from "react";
 
export const UserContext = createContext();


 
export const UserProvider = ({ children }) => {
  const [singleUser, setSingleUser] = useState({});
  const [loginId, setLoginId] = useState("21773dfe-5aaf-4d8d-bb0d-09112aac1a29");
  const [accessToken, setAccessToken] = useState("");
  const [userLoginName, setUserLoginName] = useState("");
  const [userLoginPassWord, setUserLoginPassWord] = useState("");

  const getUserById = async (userId) => {
    try {
      const response = await fetch(
        "https://api-4uzdo5gwpq-uc.a.run.app/api/user/" + userId,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setSingleUser(json)
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async () => {
    try {
        const response = await fetch(
            "https://api-4uzdo5gwpq-uc.a.run.app/api/user/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: userLoginName,
                  password: userLoginPassWord,
                }),
            }
        );

        const postAPI = await response.json();
        setAccessToken(postAPI.token);
        
    } catch (error) {
        console.log(error);
    }
};
  return (
    <UserContext.Provider value={{ singleUser, getUserById, loginId, loginUser, accessToken, setAccessToken,
      userLoginName, setUserLoginName, userLoginPassWord, setUserLoginPassWord
    }}>
      {children}
    </UserContext.Provider>
  );
};
 