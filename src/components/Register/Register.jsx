import React, { useState } from 'react';
import RegisterButton from '../RegisterButton/RegisterButton';
import { Link } from 'react-router-dom';


const apiEndpoint = 'https://api-4uzdo5gwpq-uc.a.run.app/api/user/signup'; 


const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  width: '100%',
  marginBottom: '10px',
};

const Register = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  
  const handleSubmit = async () => {
    
  
    const users = new FormData();
    users.append("username",username);
    users.append("password",password);
    users.append("address",address);
    users.append("phone_number",phoneNumber);
    users.append("email",email);
    users.append("profile_picture", "N/A");

  
    try {
    
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: users
      });
            console.log(response);
      
      if (response.status === 200) {
        
        console.log('Registration successful');
      }
    } catch (error) {
      
      console.error('Registration failed', error);
    }
  
    
    setUsername('');
    setPassword('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setProfilePicture(null);
  };
  


  const handleRegisterButtonClick = () => {
    handleSubmit();
  };

  return (
    <div style={styles.container} className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={inputStyle} 
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle} 
          />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*" 
            onChange={(e) => setProfilePicture(e.target.files[0])}
            style={inputStyle} 
          />
        </div>
        {profilePicture && (
          <div className="form-group">
            <label>Selected Profile Picture</label>
            <img
              src={URL.createObjectURL(profilePicture)}
              alt="Profile"
              style={{ maxWidth: '100px' }}
            />
          </div>
        )}
        <RegisterButton onClick={handleRegisterButtonClick} />
      </form>
      <Link to="/">Back</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '110vh',
  },
};

export default Register;
