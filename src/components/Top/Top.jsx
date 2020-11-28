import React from 'react';
import { Card, Divider } from 'ui-neumorphism';
import { GoogleLogin } from 'react-google-login';
import GoogleAuthService from '../../services/googleAuthService';
import '../../styles/top.css';
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
    <Card>
      <Card style={{ backgroundColor: 'white' }}>
        <GoogleLogin
          className="login"
          clientId={props.CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy="single_host_origin"
          responseType="code,token"
        />
      </Card>
    </Card>
  );
}
