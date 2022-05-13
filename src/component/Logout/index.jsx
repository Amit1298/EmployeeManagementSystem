import React from 'react';
import './style.css';
import logOut from '../../images/icons/ic_logout.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    const onLogoutHandler = () => {
        // localStorage.removeItem('username');
        // localStorage.removeItem('password');
        navigate('/');
    }
  return (
    <div className='logout-container'>
      <OverlayTrigger
        placement='left'
        delay={{ show: 100, hide: 100 }}
        overlay={(props) => (
          <Tooltip id='button-tooltip' {...props}>
            Logout
          </Tooltip>
        )}>
        <img src={logOut} alt='logOut' onClick={onLogoutHandler} />
      </OverlayTrigger>
    </div>
  );
}

export default Logout;
