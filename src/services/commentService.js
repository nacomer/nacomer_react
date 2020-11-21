require("dotenv").config();

export class CommentService {
    constructor(){
    }

    getCommentByHobby = async (hobbyId) => {
        const detailCommentResponse = await fetch(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment").catch(err => {
            console.error("コメントの取得に失敗しました。");
        });;
        return detailCommentResponse.json();
    };

    addComment = async (hobbyId, comment) => {
        await fetch(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                content:comment
            })
        }).catch(err => {
            console.error("コメントの登録に失敗しました。");
        });
    };

    updateComment = async (hobbyId, commentId, commentText) => {
        await fetch(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment/" + commentId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                content:commentText
            })
        }).catch(err => {
            console.error("コメントの更新に失敗しました。");
        });;
    }

    deleteComment = async (hobbyId, commentId) => {
        await fetch(process.env.REACT_APP_URL + "/api/hobby/" + hobbyId + "/comment/" + commentId, {
            method: "DELETE"
        }).catch(err => {
            console.error("コメントの削除に失敗しました。");
        });;
    }
}