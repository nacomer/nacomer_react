import React from 'react';
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
    <div
      className="header"
      tabIndex="0"
      role="button"
      onClick={() => {
        history.pushState(null, null, '');
        props.setViewMode('List');
      }}
      aria-hidden="true"
    >
      <img src={logo} alt="logo" className="logo" />
      <div className="catchCopy">
        自分らしくいられる趣味を見つけよう
        <br />〜 be NAtural, as a newCOMER 〜
      </div>
      <div className="loginUserDiv">
        <h3 className="loginUser">
          ユーザ名:
          {props.loginUser.userName}
        </h3>
        <GoogleLogout
          clientId={props.CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  setViewMode: PropTypes.func.isRequired,
};
