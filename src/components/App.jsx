import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Header from './Header';
import Footer from './Footer';
import List from './list/List';
import Detail from './detail/Detail';
import Top from './Top/Top';
import '../styles/app.css';
import AuthService from '../services/authService';
import GoogleAuthService from '../services/googleAuthService';

export default function App() {
  const [viewMode, setViewMode] = useState('List');
  const [hobbyId, setHobbyId] = useState();
  const [loginUser, setLoginUser] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['loginUser']);
  const CLIENT_ID =
    '1043624097371-gg3s33ujpdf3a2jlqvh8cfg9j8v6132r.apps.googleusercontent.com';

  useEffect(() => {
    // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
    const checkLogin = async () => {
      const googleOAuth = new GoogleAuthService();
      if (cookies.loginUser) {
        const cookieLoginUser = cookies.loginUser;
        const authRes = await googleOAuth.checkGoogleLogin(
          cookieLoginUser.tokenId,
        );
        if (authRes.status === 200) {
          setLoginUser(cookieLoginUser);
          setLoginSuccess(true);
        }
      }
    };
    checkLogin();
  }, []);

  return (
    <div className="app">
      {loginSuccess ? (
        <>
          <Header
            CLIENT_ID={CLIENT_ID}
            loginUser={loginUser}
            setViewMode={setViewMode}
            setLoginUser={setLoginUser}
            setLoginSuccess={setLoginSuccess}
            removeCookie={removeCookie}
          />
          {viewMode === 'List' && (
            <List setViewMode={setViewMode} setHobbyId={setHobbyId} />
          )}
          {viewMode === 'Detail' && (
            <Detail hobbyId={hobbyId} loginUser={loginUser} />
          )}
          <br />
          <Footer />
        </>
      ) : (
        <Top
          CLIENT_ID={CLIENT_ID}
          setLoginUser={setLoginUser}
          setCookie={setCookie}
          setLoginSuccess={setLoginSuccess}
        />
      )}
    </div>
  );
}
