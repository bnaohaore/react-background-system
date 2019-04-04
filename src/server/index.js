
import axios from "axios";

// axios 配置
// axios.defaults.timeout = 5 * 1000;
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
axios.defaults.headers.post["Content-Type"] = "application/json";
//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.cancelToken = new cancelToken(c => {
      //存储请求信息  f 用于取消请求
      pending.push({
        u: config.url + "&" + config.method,
        d: JSON.stringify(config.data),
        f: c
      });
    });

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } /*else if (response.status === 200 && response.data.status == "ERROR") {
        return Promise.reject(response.data);
    }*/
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
