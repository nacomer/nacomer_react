import React, { useRef, useState } from 'react';
import {
  Card, CardHeader, CardContent, Avatar,
} from '@material-ui/core';
import '../../../styles/comment.css';
import { CommentService } from '../../../services/commentService';

export default function DetailCommentItem(props) {
  const commentTextArea = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  const commentService = new CommentService();
  function updateClick() {
    const comment = document.getElementById(props.id);
    comment.style.backgroundColor = 'white';

    comment.disabled = false;
    commentTextArea.current.focus();
    setIsEdit(true);
  }

  async function sendClick(e) {
    const comment = document.getElementById(props.id);
    await commentService.updateComment(props.id, comment.value);
    comment.disabled = true;
    setIsEdit(false);
    comment.style.backgroundColor = 'transparent';
    props.addComment();
  }

  async function deleteClick(e) {
    await commentService.deleteComment(props.id);
    props.deleteComment();
  }

  return (
    <>
      <div className="comment">
        <Card>
          <CardHeader
            avatar={
              <Avatar alt="googleUserImg" src={props.com.NacomerUser.picture} />
            }
            title={props.com.NacomerUser.name}
          />
          <CardContent>
            <textarea
              id={props.id}
              key={props.id}
              className="commentBox"
              defaultValue={props.comment}
              ref={commentTextArea}
              disabled
            />
          </CardContent>
        </Card>
        {!isEdit && props.bool && (
          <button name={props.id} className="editButton" onClick={updateClick}>
            編集
          </button>
        )}
        {!isEdit && props.bool && (
          <button
            name={props.id}
            className="deleteButton"
            onClick={deleteClick}
          >
            削除
          </button>
        )}
        {isEdit && props.bool && (
          <button className="sendButton" onClick={sendClick}>
            送信
          </button>
        )}
      </div>
    </>
  );
}

DetailCommentItem.defaultProps = {
  updateComment: () => {},
  deleteComment: () => {},
};
