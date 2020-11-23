import React from "react";
import { CommentService } from "../../../services/commentService";

export default function DetailCommentItemSend(props) {

	async function addComment(e) {
		e.preventDefault();
		const commentService = new CommentService();

		const comment = document.getElementById("commentText").value;
		commentService.addComment(props.hobbyId, comment);
		props.addComment();
	}

	return (
		<>
			<h3>　口コミ登録</h3>
			<form>
				<textarea id="commentText" className="commentRegisterBox" defaultValue="" placeholder="口コミを入力してください"></textarea>
				<button onClick={addComment} className="commentRegisterButton">登録</button>
			</form>
		</>
	)
}