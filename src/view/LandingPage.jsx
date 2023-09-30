import React from 'react';
import { Link } from 'react-router-dom';
import ButtonUser from '../components/Button/ButtonUser';
import TextField from '../components/TextField/TextField';

const LandingPage = () => {
  return (
    <div style={styles.container}>
        <div>
            <p>Username</p>
            <TextField />   
        </div>
        <div>
            <p>Password</p>
            <TextField />   
        </div>
        
        <ButtonUser buttonName={"Login"} buttonLink={"/view/FeedPage"} />
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