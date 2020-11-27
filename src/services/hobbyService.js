import axios from 'axios';

export default class HobbyService {
  getHobby = async () => {
    const hobbyResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/hobby`)
      .catch('趣味の取得に失敗しました。');
    return hobbyResponse.data;
  };

  getHobbyDetail = async (hobbyId) => {
    const hobbyDetailResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/hobby/${hobbyId}`)
      .catch('趣味詳細の取得に失敗しました。');
    return hobbyDetailResponse.data[0];
  };

  getHobbySuggest = async (personalityId, count) => {
    const hobbySuggestResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/hobby/${personalityId}`, {
        params: {
          limit: count,
        },
      })
      .catch('趣味の取得に失敗しました。');
    return hobbySuggestResponse;
  };
}
