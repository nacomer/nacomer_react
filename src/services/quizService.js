import axios from 'axios';

export class QuizService {
  getQuiz = async (quizCategory) => {
    const quizResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/quiz`, {
        params: {
          // ここにクエリパラメータを指定する
          quizCategory,
        },
      })
      .catch('クイズの取得に失敗しました。');
    return quizResponse;
  };
}
