import React, { useRef, useState } from "react";
import "../../../styles/comment.css";
import { CommentService } from "../../../services/commentService";

export default function DetailCommentItem(props) {
	const commentTextArea = useRef(null);
	const [isEdit, setIsEdit] = useState(false);

	const commentService = new CommentService();

	function updateClick() {
		// TODO: 編集ボタンを押下したら白抜きにしたい
		//const comment = document.getElementById("comment");
		//comment.style.backgroundColor = "white";

		commentTextArea.current.focus();
		setIsEdit(true);
	}

	function sendClick(e) {
		const comment = document.getElementById("comment");
		commentService.updateComment(props.hobbyId, e.target.name, comment.value);

		setIsEdit(false);
		comment.style.backgroundColor = "transparent";
		props.addComment();

	}

	function deleteClick(e) {
		commentService.deleteComment(props.hobbyId, e.target.name);

		setIsEdit(false);
		const comment = document.getElementById("comment");
		comment.style.backgroundColor = "transparent";
		props.deleteComment();
	}

	return (
		<>
			<div className="comment">
				<textarea id="comment" key={props.key} className="commentBox" ref={commentTextArea}>{props.detailComment.content}</textarea>
				{(!isEdit) && <button name={props.key} className="editButton" onClick={updateClick}>編集</button>}
				{(!isEdit) && <button name={props.key} className="deleteButton" onClick={deleteClick}>削除</button>}
				{(isEdit) && <button className="sendButton" onClick={sendClick}>送信</button>}
			</div>
		</>
	)
}

DetailCommentItem.defaultProps = {
	comments: [
		{
			id: "1",
			comment: "私はこの方法で趣味にすることができました！！！！"
		},
		{
			id: "2",
			comment: "最高です！"
		},
	],
	updateComment: () => { },
	deleteComment: () => { }
}