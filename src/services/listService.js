require("dotenv").config();

export default class ListService {
    constructor() {
    }

    getHobby = async () => {
        const hobbyResponse =
            // await fetch(process.env.URL + "/api/hobby")
            await fetch("http://localhost:5000" + "/api/hobby")
                .catch(err => {
                    console.error("コメントの取得に失敗しました。");
                });;
        //        const ans = await hobbyResponse.body.getReader().read();
        const ans = await hobbyResponse.json()


        return ans;
    };

}