import React from 'react';
import { Card, CardHeader, Avatar, Fab } from 'ui-neumorphism';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import logo from '../image/logo.png';
import '../styles/header.css';

const { history } = window;

export default function Header(props) {
  const logout = () => {
    props.setLoginSuccess(false);
    props.setLoginUser({});
    props.removeCookie('loginUser');
  };

  const handleLogoutFailure = () => {};

  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      {props.loginUser ? (
        <div className="loginUserDiv">
          <Card rounded>
            <div className="inCardAvatar">
              <Avatar
                className="headerAvatar"
                alt="Avatar"
                src={props.loginUser.imageUrl}
              />
            </div>
          </Card>
          {/* <GoogleLogout
            clientId={props.CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure={handleLogoutFailure}
          /> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

Header.propTypes = {
  setViewMode: PropTypes.func.isRequired,
};
