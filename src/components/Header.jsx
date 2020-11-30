import React from 'react';
import { Card, CardHeader, Avatar } from 'ui-neumorphism';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import logo from '../image/logo.png';

const { history } = window;

export default function Header(props) {
  const logout = () => {
    props.setLoginSuccess(false);
    props.setLoginUser({});
    props.removeCookie('loginUser');
  };

  const handleLogoutFailure = () => {};

  return (
    <CardHeader
      className="header"
      tabIndex="0"
      role="button"
      onClick={() => {
        history.pushState(null, null, '');
        props.setViewMode('List');
      }}
      aria-hidden="true"
      elevation={3}
      rounded
    >
      <img src={logo} alt="logo" className="logo" />
      {props.loginUser ? (
        <div className="loginUserDiv">
          <Avatar alt="Avatar" src={props.loginUser.imageUrl} />
          <GoogleLogout
            clientId={props.CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure={handleLogoutFailure}
          />
        </div>
      ) : (
        <></>
      )}
    </CardHeader>
  );
}

Header.propTypes = {
  setViewMode: PropTypes.func.isRequired,
};
