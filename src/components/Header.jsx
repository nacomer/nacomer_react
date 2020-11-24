import React from 'react';
import PropTypes from 'prop-types';
import logo from '../image/logo.png';
import '../styles/header.css';

const { history } = window;

export default function Header(props) {
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
      <div className="catchCopy">自分らしくいられる趣味を見つけよう<br></br>〜 be NAture, as a new COMER 〜</div>
      <h3 className="loginUser">ユーザ名:{props.loginUser.name}</h3>
    </div>
  );
}

Header.propTypes = {
  setViewMode: PropTypes.func.isRequired,
};
