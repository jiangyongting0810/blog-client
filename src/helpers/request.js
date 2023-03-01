import Axios from "axios";
import { Message } from "element-ui";

// 全局配置，这样下次发请求的请求头都是一样的
Axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Axios.defaults.baseURL = "//blog-server.hunger-valley.com";
// Axios.defaults.baseURL = "//localhost:8080";

window.request = request;

export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    };
    if (type.toLocaleLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }
    //带上token验证
    if (localStorage.token) {
      Axios.defaults.headers.common["Authorization"] = localStorage.token;
    }

    Axios(option)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "ok") {
          if (res.data.token) {
            localStorage.token = res.data.token;
          }
          resolve(res.data);
        } else {
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch(err => {
        Message.error("网络异常");
        reject({ msg: "网络异常" });
      });
  });
}
