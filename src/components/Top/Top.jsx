import React, { useState } from "react";
import "../../styles/top.css";
import AuthService from "../../services/authService";
import ReactModal from 'react-modal';
import logo from "../../image/logo.png";


export default function Top(props) {
  const [isOpen, setIsOpen] = useState(false)

  const clickLogin = async () => {
    const userName = document.getElementById("userName").value
    const password = document.getElementById("password").value
    const authService = new AuthService();
    const res = await authService.login(userName, password)
    props.setLoginUser({
      id: res.id,
      name: userName
    })
  }

  const clickUserRefister = async (e) => {
    const userName = document.getElementById("registerUserName").value
    const passwoord = document.getElementById("registerPassword").value
    const authService = new AuthService();
    await authService.register(userName, passwoord)
    setIsOpen(false)
  }

  const modal = (
    <ReactModal
      isOpen={
        isOpen
        /* Boolean describing if the modal should be shown or not. */}
      onRequestClose={()=>setIsOpen(false)}
      className={
        "singInModal"
      /* String className to be applied to the modal content.
       See the `Styles` section for more details. */}

    >
      <div className="">
        <img src={logo} alt="logo" className="logo" />
        <input type="text" placeholder="username" id="registerUserName" className="modalInput" />
        <br></br>
        <input type="password" placeholder="password" id="registerPassword" className="modalInput" />
        <br></br>
        <button type="submit" className="modalBtn" onClick={clickUserRefister}>登録</button>
        <br></br>
        <button className="modalBtn" onClick={() => { setIsOpen(false) }}>戻る</button>
      </div>
    </ReactModal>

  )


  return (
    <div>
      <img className="topImage" src="./image/friends.jpg" />
      <p className="topCatchCopy">仲間との出会いへ</p>
      <div className="log-form">
        <input type="text" placeholder="username" id="userName" className="topInput" />
        <br></br>
        <input type="password" placeholder="password" id="password" className="topInput" />
        <br></br>
        <button type="submit" className="topBtn" onClick={clickLogin}>
          Login
        </button>
        <br></br>
        <button type="submit" className="topBtn" onClick={() => { setIsOpen(true) }}>
          SIGN IN
        </button>
        <button type="submit" className="topBtn" onClick={() => { props.setViewMode("List") }}>
          Login Later
        </button>
      </div>
      {modal}
    </div>
  );
}
