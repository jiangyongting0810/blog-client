import request from "../helpers/request";

const URL = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  GET_INFO: "/auth"
};

// auth.login({username:'adssdmin',password:'123456'}).then(res=>console.log(res))
export default {
  register({ username, passward }) {
    return request(URL.REGISTER, "POST", { username, passward });
  },
  login({ username, passward }) {
    return request(URL.LOGIN, "POST", { username, passward });
  },
  logout() {
    return request(URL.LOGOUT);
  },
  getInfo() {
    return request(URL.GET_INFO);
  }
};
