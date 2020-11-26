import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Header from './Header';
import Footer from './Footer';
import List from './list/List';
import Detail from './detail/Detail';
import Top from './Top/Top';
import '../styles/app.css';
import AuthService from '../services/authService';

export default function App() {
  const [viewMode, setViewMode] = useState('List');
  const [hobbyId, setHobbyId] = useState();
  const [loginUser, setLoginUser] = useState();

  useEffect(() => {
    const confirmLogin = async () => {
      const authService = new AuthService();
      const token = window.localStorage.getItem('token');
      const id = window.localStorage.getItem('id');
      const name = window.localStorage.getItem('name');

      let isLogin = false;
      if (token) {
        isLogin = await authService.confirm(token, name);
      }

      if (isLogin) {
        setLoginUser({
          id,
          name,
          token,
        });
      }
    };

    confirmLogin();
  }, []);

  return (
    <div className="app">
      {loginUser && <Header setViewMode={setViewMode} loginUser={loginUser} />}

      {!loginUser && <Top setLoginUser={setLoginUser} />}
      {loginUser && viewMode === 'List' && (
        <List setViewMode={setViewMode} setHobbyId={setHobbyId} />
      )}
      {loginUser && viewMode === 'Detail' && (
        <Detail hobbyId={hobbyId} loginUser={loginUser} />
      )}
      <br />
      {loginUser && <Footer />}
    </div>
  );
}
