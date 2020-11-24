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
    const res = await authService.login(userName, password);
    props.setLoginUser({
      id: res.id,
      name: userName,
    });
  };

  const clickUserRefister = async (e) => {
    const userName = document.getElementById('registerUserName').value;
    const passwoord = document.getElementById('registerPassword').value;
    const authService = new AuthService();
    const res = await authService.register(userName, passwoord);
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
              onClick={clickUserRefister}
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
      <p className="topCatchCopy">仲間との出会いへ</p>
      <div className="log-form">
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="topInput"
        />
        <br></br>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="topInput"
        />
        <br></br>
        <button type="submit" className="topBtn" onClick={clickLogin}>
          Login
        </button>
        <br></br>
        <button
          type="submit"
          className="topBtn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          SIGN IN
        </button>
        <button
          type="submit"
          className="topBtn"
          onClick={() => {
            props.setLoginUser({
              id: 0,
              name: 'Guest',
            });
          }}
        >
          Login Later
        </button>
      </div>
      {modal}
    </div>
  );
}
