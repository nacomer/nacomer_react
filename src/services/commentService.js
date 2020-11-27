import axios from 'axios';

export class CommentService {
  getComment = async (hobbyId) => {
    const detailCommentResponse = await axios
      .get(`${process.env.REACT_APP_URL}/api/hobby/${hobbyId}/comment`)
      .catch('コメントの取得に失敗しました。');
    return detailCommentResponse.data;
  };

  updateComment = async (commentId, comment) => {
    const addCommentResponse = await axios
      .put(`${process.env.REACT_APP_URL}/api/comment/${commentId}`, {
        content: comment,
      })
      .catch('コメントの更新に失敗しました。');
    return addCommentResponse.data[0];
  };

  addComment = async (googleId, tokenId, hobbyId, comment, userId) => {
    const config = {
      headers: {
        'x-googleid': `${googleId}`,
        'x-auth-token': tokenId,
      },
    };

    const addCommentResponse = await axios
      .post(
        `${process.env.REACT_APP_URL}/api/hobby/${hobbyId}/comment`,
        {
          content: comment,
          nacomerUserId: userId,
        },
        config,
      )
      .catch('コメントの登録に失敗しました。');
    return addCommentResponse.data[0];
  };

  deleteComment = async (commentId) => {
    await axios
      .delete(`${process.env.REACT_APP_URL}/api/comment/${commentId}`)
      .catch('コメントの削除に失敗しました。');
  };
}
