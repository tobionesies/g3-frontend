import React from 'react';
import './Settings.css'; 
import ArrowButton from '../ArrowButton/ArrowButton';
const Settings = () => {
  return (
    <div className="settings-container">
        <ArrowButton/>
      <h2>Settings</h2>

      
      <section className="settings-section">
        <h3>Dark Mode</h3>
        <label className="dark-mode-label">
          <input type="checkbox" className="dark-mode-checkbox" /> Enable Dark Mode
        </label>
      </section>

      
      <section className="settings-section">
        <h3>Username</h3>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="form-control" />
        </div>
        <button className="btn btn-primary">Save Username</button>
      </section>

      
      <section className="settings-section">
        <h3>Change Password</h3>
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password:</label>
          <input type="password" id="currentPassword" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input type="password" id="confirmNewPassword" className="form-control" />
        </div>
        <button className="btn btn-primary">Change Password</button>
      </section>
    </div>

    
  );
};

export default Settings;
