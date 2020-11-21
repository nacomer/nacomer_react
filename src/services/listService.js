import axios from 'axios';

export default class ListService {

    getHobby = async () => {
        const hobbyResponse = await axios.get(process.env.REACT_APP_URL + "/api/hobby")
            .catch("コメントの取得に失敗しました。"); 
        return hobbyResponse.data;
    };

}