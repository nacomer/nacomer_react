import axios from 'axios';

const crypto = require('crypto');

export default class AuthService {
  login = async (userName, password) => {
    const loginResponse = await axios
      .post(`${process.env.REACT_APP_URL}/api/user/login`, {
        name: userName,
        password: crypto.createHash('sha256').update(password).digest('hex'),
      })
      .catch('ログインに失敗しました。');
    return loginResponse.data;
  };

  register = async (userName, password) => {
    const registerResponse = await axios
      .post(`${process.env.REACT_APP_URL}/api/user/register`, {
        name: userName,
        password: crypto.createHash('sha256').update(password).digest('hex'),
      })
      .catch('ユーザ登録に失敗しました。');
    return registerResponse.data;
  };

  confirm = async (token, name) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const confirmResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/user/login`, config).catch(() => {
        return false;
      });

    if (confirmResponse && confirmResponse.data.name === name) {
      return true;
    }

    return false;
  };
}
