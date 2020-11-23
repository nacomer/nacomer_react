import React, { useEffect, useState } from "react";
import { CommentService } from "../../../services/commentService";
import DetailCommentItem from "./DetailCommentItem";
import DetailCommentSend from "./DetailCommentSend";

export default function DetailComment(props) {
  const [detailCommentJson, setDetailCommentJson] = useState([]);
  const [addCommentFlg, setAddCommentFlg] = useState(false);
  const [deleteCommentFlg, setDeleteCommentFlg] = useState(false);

  useEffect(() => {
    const getDetailComments = async () => {

      const commentService = new CommentService();
      const detailComment = await commentService.getComment(props.hobbyId)

      setDetailCommentJson(detailComment);
    };

    getDetailComments();
    setAddCommentFlg(false);
  }, [addCommentFlg, deleteCommentFlg]);

  function addComment() {
    setAddCommentFlg(true);
  }

  function deleteComment() {
    setDeleteCommentFlg(true);
  }

  return (
    <div className="detailComment">
      <DetailCommentSend hobbyId={props.hobbyId} addComment={addComment} />
      <hr />
      <h3>　口コミ一覧</h3>
      {detailCommentJson.map((comment, index) => {
        return (
          <DetailCommentItem hobbyId={props.hobbyId} comment={comment.content} id={comment.id} key={index} addComment={addComment} deleteComment={deleteComment} />
        )
      })}
    </div>
  );
}