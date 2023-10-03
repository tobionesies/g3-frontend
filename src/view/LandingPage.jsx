import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ButtonUser from '../components/Button/ButtonUser';
import TextField from '../components/TextField/TextField';

const LandingPage = () => {
  const [textLoginName, setTextLoginName] = useState('');
  const [textPassWord, setTextPassWord] = useState('');

  const handleLoginNameChange = (value) => {
    setTextLoginName(value);
  };

  const handlePassWordChange = (value) => {
    setTextPassWord(value);
  };
  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <p>Username</p>
        <TextField value={textLoginName} onChange={handleLoginNameChange} />  
      </div>
  
      <div style={styles.inputContainer}>
        <p>Password</p>
        <TextField value={textPassWord} onChange={handlePassWordChange} />   
      </div>
  
      <ButtonUser buttonName={"Login"} buttonLink={"/view/FeedPage"} buttonFunction={'login'} newName={textLoginName}/>
    </div>
  );
}
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    },
    inputContainer: {
      marginBottom: '20px', 
    },
  };
  
  export default LandingPage;