import React from 'react';
import { CommentService } from '../../../services/commentService';

export default function DetailCommentSend(props) {
  async function addComment(e) {
    e.preventDefault();
    const commentService = new CommentService();

    const textbox = document.getElementById('commentText');
    await commentService.addComment(
      props.loginUser.googleId,
      props.hobbyId,
      textbox.value,
      props.loginUser.id,
    );
    textbox.value = '';

    props.addComment();
  }

  return (
    <>
      <h3>　口コミ登録</h3>
      <form>
        <textarea
          id="commentText"
          className="commentRegisterBox"
          defaultValue=""
          placeholder="口コミを入力してください"
        />
        <button onClick={addComment} className="commentRegisterButton">
          登録
        </button>
      </form>
    </>
  );
}
