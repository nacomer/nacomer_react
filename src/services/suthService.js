import axios from 'axios';

export default class AuthService {

	login = async (userName,pass) => {
		const loginResponse = await axios.get(process.env.REACT_APP_URL + "/user",{
      name:userName,
      password:pass
    })
			.catch("ログインに失敗しました。");
		return loginResponse.data;
	};

}