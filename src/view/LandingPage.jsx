import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonUser from "../components/Button/ButtonUser";
import TextField from "../components/TextField/TextField";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import { colors } from "../theme";
import { useAppContext } from "../auth";

const LandingPage = () => {
  const [textLoginName, setTextLoginName] = useState("");
  const [textPassWord, setTextPassWord] = useState("");
  const {state, dispatch} = useAppContext();

  const handleLoginNameChange = (value) => {
    setTextLoginName(value);
  };

  const handlePassWordChange = (value) => {
    setTextPassWord(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (textLoginName.length <= 3 || textPassWord.length <= 2) {
      console.log('provide user credentials');
      return;
    }
  
    const response = await fetch('http://localhost:3000/api/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email: textLoginName, password: textPassWord }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      const res = await response.json()
      
      const credentials = {
        token : res.token,
        userId : res.id 
      }
      dispatch({type:'LOGIN', payload: credentials})

    } else {
      console.error('Error message state:', response.status);
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.inputContainer}>
          <p style={styles.label}>Username</p>
          <TextField value={textLoginName} placeholder='email address' onChange={handleLoginNameChange} />
        </div>

        <div style={styles.inputContainer}>
          <p style={styles.label}>Password</p>
          <TextField value={textPassWord} type='password' onChange={handlePassWordChange} />
        </div>

       {/*  <ButtonUser
          buttonName={"Login"}
          buttonLink={"/view/FeedPage"}
          buttonFunction={"login"}
          newName={textLoginName}
        /> */}
        <button onClick={handleLogin}>Login</button>
        <p>Dont have an account?</p>
        <RegisterButton />
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: colors.backgroundColor,
  },
  content:{
    display: "flex",
    padding: "25px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  inputContainer: {
    marginBottom: "5px",
  },
  label:{
    margin:0,
    fontSize: '18px',
    fontFamily:'Public Sans, sans-serif',
    fontWeight: '500',
  }
};

export default LandingPage;
