import React, { useEffect, useState } from 'react';
import { CommentService } from '../../../services/commentService';
import DetailCommentItem from './DetailCommentItem';
import DetailCommentSend from './DetailCommentSend';

export default function DetailComment(props) {
  const [detailCommentJson, setDetailCommentJson] = useState([]);
  const [addCommentFlg, setAddCommentFlg] = useState(0);
  const [deleteCommentFlg, setDeleteCommentFlg] = useState(0);
  const CLIENT_ID = '535477566115-nk6dj1hrk0gvsfrmhimmbqgts7f3puqt.apps.googleusercontent.com';

  useEffect(() => {
    const getDetailComments = async () => {
      const commentService = new CommentService();
      const detailComment = await commentService.getComment(props.hobbyId);
      console.log('口コミでもらう内容');
      console.log(detailComment);
      setDetailCommentJson(detailComment);
    };

    getDetailComments();
  }, [addCommentFlg, deleteCommentFlg]);

  function addComment() {
    setAddCommentFlg(addCommentFlg + 1);
  }

  function deleteComment() {
    setDeleteCommentFlg(deleteCommentFlg + 1);
  }

  const guestFlg = props.loginUser.id !== 0;

  return (
    <div className="detailComment">
      {guestFlg && (
        <DetailCommentSend
          hobbyId={props.hobbyId}
          addComment={addComment}
          loginUser={props.loginUser}
        />
      )}
      <hr />
      <h3>　口コミ一覧</h3>
      {detailCommentJson.map((comment, index) => (
        <DetailCommentItem
          hobbyId={props.hobbyId}
          comment={comment.content}
          bool={
            parseInt(props.loginUser.id, []) === comment.NacomerUser.id
            && guestFlg
          }
          id={comment.id}
          key={index}
          loginUser={props.loginUser}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}
