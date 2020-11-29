import axios from 'axios';

export default class ChatService {
  // チャット一覧を取得するAPI
  getChatList = async (userData, eventId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const param = {
      params: {
        eventId,
      },
    };
    const chatListRes = await axios
      .get(`${process.env.REACT_APP_URL}/v1/chatComments`, param, header)
      .catch('チャットの取得に失敗しました。');
    return chatListRes;
  };

  // イベントへの参加登録API
  participateEvent = async (userData, eventId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const body = {
      eventId,
    };

    const participantsRes = await axios
      .post(`${process.env.REACT_APP_URL}/v1/participant`, body, header)
      .catch('イベントの参加登録に失敗しました。');
    return participantsRes;
  };
}
