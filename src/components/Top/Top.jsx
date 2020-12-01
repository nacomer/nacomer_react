import React from 'react';
import { Card, Button } from 'ui-neumorphism';
import { GoogleLogin } from 'react-google-login';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import GoogleAuthService from '../../services/googleAuthService';
import '../../styles/top.css';
import logo from '../../image/logo.png';
import Footer from '../Footer';

export default function Top(props) {
  const login = async (response) => {
    if (response.tokenId && response.profileObj) {
      const resLoginUser = {
        googleId: response.profileObj.googleId,
        userName: response.profileObj.name,
        imageUrl: response.profileObj.imageUrl,
        tokenId: response.tokenId,
      };
      /// /login api send
      const googleOAuth = new GoogleAuthService();
      const authRes = await googleOAuth.login(resLoginUser);
      if (authRes.status === 200 || authRes.status === 201) {
        props.setLoginUser(resLoginUser);
        props.setLoginSuccess(true);
        // save cookie
        props.setCookie('loginUser', JSON.stringify(resLoginUser));
      }
    }
  };

  const handleLoginFailure = (response) => {};

  return (
    <Card elevation={3} className="topPage">
      <div className="topContent">
        <img src={logo} alt="logo" className="topLogo" />
        <div className="topText">be NAtural as a newCOMER!</div>
        <GoogleLogin
          clientId={props.CLIENT_ID}
          render={(renderProps) => (
            <Button
              rounded
              elevation={4}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div className="googleLogin">
                <div className="topButton">
                  <Icon path={mdiGoogle} size={1.0} />
                  <p className="topButtonText">ログイン</p>
                </div>
              </div>
            </Button>
          )}
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy="single_host_origin"
          responseType="code,token"
        />
      </div>
    </Card>
  );
}
