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
      .catch('イベント情報の取得に失敗しました。');
    return eventInfoRes;
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

  // イベント参加辞退APIへのリクエスト
  unparticipateEvent = async (userData, eventId) => {
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
      data: {
        eventId,
      },
    };
    const res = await axios
      .delete(`${process.env.REACT_APP_URL}/v1/participant`, content)
      .catch('イベントの参加辞退に失敗しました。');
    return res;
  };

  // イベントIDのランダム取得
  getRandomEvent = async (userData) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userData.tokenId,
        'x-googleid': userData.googleId,
      },
    };
    const body = {
      // eventId,
    };
    const res = await axios
      .get(`${process.env.REACT_APP_URL}/v1/events`, body, header)
      .catch('イベントIDの取得に失敗しました。');
    return res;
  };
}
