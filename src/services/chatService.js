import axios from 'axios';

export default class ChatService {
  // チャット一覧を取得するAPI
  getChatList = async (userData, eventId) => {
    const param = {
      params: {
        eventId,
      },
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const content = {};
    const chatListRes = await axios
      .get(`${process.env.REACT_APP_URL}/v1/chatComments`, param)
      .catch('チャットの取得に失敗しました。');
    return chatListRes;
  };

  // チャット投稿API
  postChat = async (userData, eventId, comment) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const body = {
      eventId,
      comment,
    };

    const chatPostRes = await axios
      .post(`${process.env.REACT_APP_URL}/v1/chatComments`, body, header)
      .catch('チャットの投稿に失敗しました。');
    return chatPostRes;
  };
}
