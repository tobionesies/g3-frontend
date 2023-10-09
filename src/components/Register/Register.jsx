import { useState } from 'react';
import RegisterButton from '../RegisterButton/RegisterButton';
import { Link } from 'react-router-dom';

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  width: '100%',
  marginBottom: '10px',
};

const Register = () => {
  // Define state variables for registration form fields
  const [username, setUsername] = useState('chris');
  const [password, setPassword] = useState('123456');
  const [address, setAddress] = useState('dubai');
  const [phoneNumber, setPhoneNumber] = useState('38932879327832');
  const [email, setEmail] = useState('mr.chris@gmail.com');
  const [profilePicture, setProfilePicture] = useState(null);

  // Handle form submission
  const handleSubmit = () => {
    // Perform registration logic (e.g., send data to an API)
    // You can add your registration logic here, using all the form fields
    const formData = new FormData()
    formData.append('username',username)
    formData.append('phone_number',phoneNumber)
    formData.append('address',address)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('picture', profilePicture)
  
    const url = 'https://api-4uzdo5gwpq-uc.a.run.app/api/user/signup'

    fetch(url,{
      method:'POST',
      body: formData
    }).then((response) => {
    if (!response.ok) {
      return Promise.reject(`HTTP Error: ${response.status}`);
    }
    return response.json();
  }).then(data => {console.log(data);
  }).catch((error) => console.log(error))
   

    // Clear form fields after submission
    setUsername('');
    setPassword('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setProfilePicture(null);
  };

  // Handle the registration button click
  const handleRegisterButtonClick = () => {
    // You can add any specific logic related to the button click here
    // For example, you can trigger form submission
    handleSubmit();
  };

  return (
    <div style={styles.container} className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle} // Apply the shared style here
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle} // Apply the shared style here
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={inputStyle} // Apply the shared style here
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={inputStyle} // Apply the shared style here
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle} // Apply the shared style here
          />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*" // Allow only image files
            onChange={(e) => setProfilePicture(e.target.files[0])}
            style={inputStyle} // Apply the shared style here
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
