import axios from 'axios';

export default class GoogleAuthService {
  // cookieTokenIdが有効化確認するメソッド
  checkGoogleLogin = async (cookieTokenId) => {
    const validatePath = 'https://oauth2.googleapis.com/tokeninfo?id_token=';
    const path = validatePath + cookieTokenId;
    const authRes = await axios.get(path).catch('ログインに失敗しました。');
    return authRes;
  };

  login = async (userData) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const body = {
      userName: userData.userName,
      picture: userData.imageUrl,
    };

    const authRes = await axios
      .post(`${process.env.REACT_APP_URL}/v1/login`, body, header)
      .catch('ユーザ登録に失敗しました。');
    return authRes;
  };
}
