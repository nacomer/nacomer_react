import axios from 'axios';

export default class AuthService {

	login = async (userName,password) => {
		const loginResponse = await axios.post(process.env.REACT_APP_URL + "/api/user/login",{
      name:userName,
      password:password
    })
			.catch("ログインに失敗しました。");
		return loginResponse.data[0];
  };
  
  register = async (userName,pass) => {
		const registerResponse = await axios.post(process.env.REACT_APP_URL + "/api/user/",{
      name:userName,
      password:pass
    })
			.catch("ユーザ登録に失敗しました。");
		return registerResponse.data;
	};

}