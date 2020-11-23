import React, { useState } from "react";
import "../../styles/top.css";

export default function Top(props) {
  
  const clickLogin = (e)=>{
    const userName = document.getElementById("userName").value
    const passwoord = document.getElementById("password").value
    
  }
  
  return (
    <div>
      <img className="topImage" src="./image/friends.jpg" />
      <p className="topCatchCopy">仲間との出会いへ</p>
      <div class="log-form">
        <input type="text" placeholder="username" id="userName" className="topInput" />
        <br></br>
        <input type="password" placeholder="password" id="password" className="topInput" />
        <br></br>
        <button type="submit" className="topBtn" onClick={clickLogin}>
          Login
        </button>
        <br></br>
        <button type="submit" className="topBtn">
          SIGN IN
        </button>
      </div>
    </div>
  );
}
