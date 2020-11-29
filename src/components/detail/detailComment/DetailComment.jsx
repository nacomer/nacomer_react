import React, { useEffect, useState } from 'react';
import { CommentService } from '../../../services/commentService';
import DetailCommentItem from './DetailCommentItem';
import DetailCommentSend from './DetailCommentSend';

export default function DetailComment(props) {
  const [detailCommentJson, setDetailCommentJson] = useState([]);
  const [addCommentFlg, setAddCommentFlg] = useState(0);
  const [deleteCommentFlg, setDeleteCommentFlg] = useState(0);

  useEffect(() => {
    const getDetailComments = async () => {
      const commentService = new CommentService();
      const detailComment = await commentService.getComment(props.hobbyId);
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

  const guestFlg = props.loginUser.googleId !== 0;

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
          com={comment}
          comment={comment.content}
          bool={
            props.loginUser.googleId === comment.NacomerUser.googleId && {
              guestFlg,
            }
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
