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
        <div>
            <p>Username</p>
            <TextField value={textLoginName} onChange={handleLoginNameChange} />  
        </div>
        <div>
            <p>Password</p>
            <TextField value={textPassWord} onChange={handlePassWordChange} />   
        </div>
        
        <ButtonUser buttonName={"Login"} buttonLink={"/view/FeedPage"} buttonFunction={'login'} newName={textLoginName}/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Optionally, set the height to 100% of the viewport height for vertical centering
  },
};

export default LandingPage;