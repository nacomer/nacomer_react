import axios from 'axios';

export default class EventService {
  // イベント情報を取得するAPI
  getEventInfo = async (userData, eventId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };

    const eventInfoRes = await axios
      .get(`${process.env.REACT_APP_URL}/v1/events/${eventId}`, header)
      .catch('ユーザ登録に失敗しました。');
    return eventInfoRes;
  };
}
