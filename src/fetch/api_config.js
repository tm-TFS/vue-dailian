import axios from 'axios'
import qs from 'qs'
import router from '../main';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.baseURL = 'http://192.168.0.103:9001/public/index';
//axios.defaults.baseURL = 'http://www.tp5.bd/public/index';
axios.defaults.baseURL = 'http://139.196.90.218:9001/public/index';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  console.log("错误的传参");
  return Promise.reject(error);
});

//code状态码200判断
axios.interceptors.response.use((res) =>{
  return res;
}, (error) => {
  console.log("网络异常");
  console.log(error.response);
  if (error.response) {
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/login',
          params: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error);
});

export default axios;
