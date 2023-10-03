import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import gearIcon from '../../assets/gearIcon.svg';

function SettingButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleIconClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <Link to="/settings" className="icon" onClick={handleIconClick}>
        <img src={gearIcon} style={{ height: '30px', marginRight: '16px' }} alt="Logo" /> 
        Settings
      </Link>
    </div>
  );
}

export default SettingButton;
