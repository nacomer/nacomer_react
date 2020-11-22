import axios from 'axios';

export class CommentService {

	getComment = async (hobbyId) => {
		const detailCommentResponse = await axios.get(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment")
			.catch("コメントの取得に失敗しました。");
		return detailCommentResponse.data;
	};

	addComment = async (hobbyId, comment) => {
		await axios.post(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment", {
			content: comment
		}).catch("コメントの登録に失敗しました。");
	};

	updateComment = async (hobbyId, commentId, comment) => {
		await axios.put(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment/" + commentId, {
			content: comment
		}).catch("コメントの更新に失敗しました。");
	}

	deleteComment = async (hobbyId, commentId) => {
		await axios.post(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment/" + commentId)
			.catch("コメントの削除に失敗しました。");
	}
}