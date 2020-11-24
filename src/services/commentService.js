import axios from 'axios';

export class CommentService {
  getComment = async (hobbyId) => {
    const detailCommentResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/hobby/${hobbyId}/comment`)
      .catch('コメントの取得に失敗しました。');
    return detailCommentResponse.data;
  };

  addComment = async (hobbyId, comment) => {
    const addCommentResponse = await axios
      .post(`${process.env.REACT_APP_URL}/api/hobby/${hobbyId}/comment`, {
        content: comment,
      })
      .catch('コメントの登録に失敗しました。');
    return addCommentResponse.data[0];
  };

  addComment = async (hobbyId, comment, id) => {
    const addCommentResponse = await axios
      .post(`${process.env.REACT_APP_URL}/api/hobby/${hobbyId}/comment`, {
        content: comment,
        nacomerUserId: id,
      })
      .catch('コメントの登録に失敗しました。');
    return addCommentResponse.data[0];
  };

  deleteComment = async (commentId) => {
    await axios
      .delete(`${process.env.REACT_APP_URL}/api/comment/${commentId}`)
      .catch('コメントの削除に失敗しました。');
  };
}
