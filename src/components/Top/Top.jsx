import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../../styles/top.css';

export default function Top(props) {
  const login = async (response) => {
    if (response.tokenId && response.profileObj) {
      const resLoginUser = {
        googleId: response.profileObj.googleId,
        userName: response.profileObj.name,
        imageUrl: response.profileObj.imageUrl,
        tokenId: response.tokenId,
      };
      props.setLoginUser(resLoginUser);
      props.setLoginSuccess(true);
      // save cookie
      props.setCookie('loginUser', JSON.stringify(resLoginUser));
    }
  };

  const handleLoginFailure = (response) => {};

  return (
    <div>
      <img className="topImage" src="./image/friends.jpg" />
      <p className="topCatchCopy">自分らしくいられる趣味を見つけよう</p>
      <p className="topCatchCopySub">〜 be NAtural, as a newCOMER 〜</p>
      <div className="log-form">
        <GoogleLogin
          clientId={props.CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy="single_host_origin"
          responseType="code,token"
        />
      </div>
    </div>
  );
}
