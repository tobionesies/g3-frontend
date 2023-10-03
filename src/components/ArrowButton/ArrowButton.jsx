import React from 'react'
import arrow from '../../assets/arrow.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 

function ArrowButton() {
    const [clickCount, setClickCount] = useState(0);
  
    const handleIconClick = () => {
      setClickCount(clickCount + 1);
    };
    return (
        <div>
          <Link to="/view/Feedpage" className="icon" onClick={handleIconClick}>
            <img src={arrow} style={{ height: '30px', marginRight: '16px' }} alt="Logo" /> 
            Settings
          </Link>
        </div>
      );
    }
    
    export default ArrowButton;