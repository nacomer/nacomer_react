//require("dotenv").config();

export default class ListService {

    getHobby = async () => {
        const hobbyResponse =
            await fetch(process.env.NACOMER_EXPRESS_URL + "/api/hobby")
                .catch(err => {
                    console.error("コメントの取得に失敗しました。");
                });;
        const ans = await hobbyResponse.json()
        return ans;
    };

}