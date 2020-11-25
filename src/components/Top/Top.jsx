import React, { useState } from 'react';
import '../../styles/top.css';
import ReactModal from 'react-modal';
import AuthService from '../../services/authService';
import logo from '../../image/logo.png';

export default function Top(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [finishRegister, setFinishRegister] = useState(false);

  const clickLogin = async () => {
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const authService = new AuthService();
    const res = await authService.login(userName, password).catch(() => {
      window.alert('ログイン失敗しました');
    });

    if (res) {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('id', res.userId);
      window.localStorage.setItem('name', res.name);

      props.setLoginUser({
        id: res.userId,
        name: res.name,
        token: res.token,
      });
    }
  };

  const clickUserRegister = async (e) => {
    const userName = document.getElementById('registerUserName').value;
    const password = document.getElementById('registerPassword').value;
    const authService = new AuthService();
    const res = await authService.register(userName, password);
    if (res) {
      setFinishRegister(true);
    }
  };

  const modal = (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="singInModal"
    >
      <div className="modalDiv">
        <img src={logo} alt="logo" className="modalLogo" />
        {!finishRegister && (
          <>
            <input
              type="text"
              placeholder="username"
              id="registerUserName"
              className="modalInput"
            />
            <input
              type="password"
              placeholder="password"
              id="registerPassword"
              className="modalInput"
            />
            <button
              type="submit"
              className="modalBtn"
              onClick={clickUserRegister}
            >
              登録
            </button>
          </>
        )}
        {finishRegister && <h3>登録が完了しました</h3>}
        <button
          className="modalBtn"
          onClick={() => {
            setIsOpen(false);
            setFinishRegister(false);
          }}
        >
          戻る
        </button>
      </div>
    </ReactModal>
  );

  return (
    <div>
      <img className="topImage" src="./image/friends.jpg" />
      <p className="topCatchCopy">自分らしくいられる趣味を見つけよう</p>
      <p className="topCatchCopySub">〜 be NAtural, as a newCOMER 〜</p>
      <div className="log-form">
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="topInput"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="topInput"
        />
        <br />
        <button type="submit" className="topBtn" onClick={clickLogin}>
          Login
        </button>
        <button
          type="submit"
          className="topBtn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          SIGN IN
        </button>
      </div>
      {modal}
    </div>
  );
}
