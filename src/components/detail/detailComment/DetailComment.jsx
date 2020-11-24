import React, { useEffect, useState } from 'react';
import { CommentService } from '../../../services/commentService';
import DetailCommentItem from './DetailCommentItem';
import DetailCommentSend from './DetailCommentSend';

export default function DetailComment(props) {
  const [detailCommentJson, setDetailCommentJson] = useState([]);
  const [addCommentFlg, setAddCommentFlg] = useState(0);
  const [deleteCommentFlg, setDeleteCommentFlg] = useState(0);

  useEffect(() => {
    console.log('useeffect');
    const getDetailComments = async () => {
      const commentService = new CommentService();
      const detailComment = await commentService.getComment(props.hobbyId);

      setDetailCommentJson(detailComment);
    };

    getDetailComments();
    // setAddCommentFlg(false);
  }, [addCommentFlg, deleteCommentFlg]);

  function addComment() {
    setAddCommentFlg(addCommentFlg + 1);
  }

  function deleteComment() {
    setDeleteCommentFlg(deleteCommentFlg + 1);
  }

  return (
    <div className="detailComment">
      <DetailCommentSend hobbyId={props.hobbyId} addComment={addComment} />
      <hr />
      <h3>　口コミ一覧</h3>
      {detailCommentJson.map((comment, index) => (
        <DetailCommentItem hobbyId={props.hobbyId} comment={comment.content} id={comment.id} key={index} addComment={addComment} deleteComment={deleteComment} />
      ))}
    </div>
  );
}
