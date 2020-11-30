import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
import {
  Alert,
  CardContent,
  IconButton,
  CardHeader,
  CardAction,
  CardMedia,
  Subtitle1,
  Subtitle2,
  Divider,
  Spacer,
  Button,
  Body2,
  Card,
  Fab,
  H6,
  H5,
  H4,
} from 'ui-neumorphism';
// import { Card, Divider } from 'ui-neumorphism';
import QueryString from 'query-string';
import Header from './Header';
import Footer from './Footer';
import Event from './events/Event';
import List from './list/List';
import Detail from './detail/Detail';
import Top from './Top/Top';
import '../styles/app.css';

import GoogleAuthService from '../services/googleAuthService';

export default function App() {
  const [viewMode, setViewMode] = useState('List');
  const [hobbyId, setHobbyId] = useState();
  const [loginUser, setLoginUser] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['loginUser']);
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  useEffect(() => {
    // sessionストレージにqueryパラメータを保存
    const parsedQuery = QueryString.parse(window.location.search);
    if (parsedQuery.eventid) {
      sessionStorage.setItem('eventid', parsedQuery.eventid);
    }

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
    <Card className="app">
      <Header
        CLIENT_ID={CLIENT_ID}
        loginUser={loginUser}
        setViewMode={setViewMode}
        setLoginUser={setLoginUser}
        setLoginSuccess={setLoginSuccess}
        removeCookie={removeCookie}
      />
      <Divider elavated />
      {loginSuccess ? (
        <>
          <Event loginUser={loginUser} />
          <br />
        </>
      ) : (
        <>
          <Top
            CLIENT_ID={CLIENT_ID}
            setLoginUser={setLoginUser}
            setCookie={setCookie}
            setLoginSuccess={setLoginSuccess}
          />
        </>
      )}
      <Footer />
    </Card>
  );
}
