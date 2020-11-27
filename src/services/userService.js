import axios from 'axios';

export class UserService {
  getUser = async (userData) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };

    const userResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/user`, header)
      .catch('ユーザの取得に失敗しました。');
    return userResponse;
  };

  postPersonality = async (userData, personalityId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };

    const body = {
      personalityId,
    };

    const postPersonalityRes = await axios
      .patch(`${process.env.REACT_APP_URL}/api/user/login`, body, header)
      .catch('ユーザ登録に失敗しました。');
    return postPersonalityRes;
  };
}
