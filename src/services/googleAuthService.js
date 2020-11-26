import axios from 'axios';

export default class GoogleAuthService {
  // cookieTokenIdが有効化確認するメソッド
  checkGoogleLogin = async (cookieTokenId) => {
    const validatePath = 'https://oauth2.googleapis.com/tokeninfo?id_token=';
    const path = validatePath + cookieTokenId;
    const authRes = await axios.get(path).catch('ログインに失敗しました。');
    return authRes;
  };
}
