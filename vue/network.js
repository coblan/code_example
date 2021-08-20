/* eslint-disable */
import axios from 'axios';
import {getToken,removeToken,setToken,setUuid,getUuid} from '@/utils/auth'
import router from "../router";
import { Toast } from 'vant';
import store from '@/store';


let flage = false
function guid() {
  function S4() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

let uuid = null
if(!getUuid()){
  uuid = guid()
  setUuid(uuid)
}else{
  uuid = getUuid()
}

axios.defaults.baseURL = gb.baseurl;

// https://urlplus.rrystv.com/url
// axios.defaults.baseURL = 'http://192.168.40.147:9100';
// axios.defaults.baseURL = 'http://appplus.rrystv.com'; 

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers['Content-Type'] = 'application/josn;charset=UTF-8';

axios.defaults.headers = {
  'x-api-version':'2.2',
  'x-device':JSON.stringify({
    "DeviceCode":uuid,
    "DeviceName":'',
    "Terminal":'H5'})
}
axios.defaults.timeout = 30000; // 请求超时时间s
axios.defaults.withCredentials= false;

//请求拦截
axios.interceptors.request.use(
 
  config =>{
    config.headers['x-ts'] = window._gb_ts
    config.headers['x-id'] = 'web5a555c549f69d6701c0947640e0'

    config.headers['x-ns'] = window._gb_ns
    config.headers['x-sign'] = window._gb_k
    if(getToken()){
      
      config.headers['Authorization']  = `${getToken().tokenType} ${getToken().accessToken}`;
    }
    // console.log(config.url)
    // if(config.url == '/odd/bufmatchodds'){
    //   console.log('1111111')
    //   config.responseType = "arraybuffer"
    // }
    return config;
  },
  err =>{
    return Promise.reject(err);
  }
)


let ToastFlage = true
// Axios错误数据拦截s
axios.interceptors.response.use(
  response => {
    if(!response.data.success&&response.data.error){
      Toast(response.data.error)
    }
    return response
  },
  error => {
    if (error.response.status == 403) {
      if(ToastFlage){
        Toast('账号不可用')
        removeToken()
        ToastFlage = false
        router.openPage('login')
        setTimeout(()=>{
          ToastFlage = true
        },3500)
        return;
      }
      return;
    }
    if (error.response.status !== 401) {
      alert(error)
    }
    // let originalRequest = error.config
    // if (error.request.readyState == 4 && error.request.status == 0) {
    //   return axios.request(originalRequest)
    // }
    
    if (error.response.status === 401) {
    
      if (!flage) {
        flage = true
        if (getToken()) {
          axios.post(`/home/token/refresh/${getToken().refreshToken}`, {}).then((res) => {
            flage=false
            if (res.data.success) {
              setToken(res.data.data);
              axios.defaults.headers['Authorization'] = `${getToken().tokenType} ${getToken().accessToken}`
            } else {
              removeToken()
            }
          }).catch(err => {
            router.openPage('login')
            removeToken()
          })
        }else{
        }
      }

      return error
    }
    Promise.reject(error);
  });

const request = (method, url, data, config = {}) => {
  
  const options = Object.assign({}, config, {
    url,
    method,
    data
  });
  
  options.headers = options.headers || {};

  return new Promise((resolve, reject) => {
    axios.request(options)
      .then((res) => {
        if(res.response && res.response.status==401){
           var count =0
           var index =  setInterval(()=>{
             count += 200
             if(count > 10*1000){
               clearInterval(index)
               flage=false
               reject("wait for token time out")
             }

              if(!flage){
                  axios.request(options).then((res)=>{
                    clearInterval(index)
                        if (res) {
                          const data = {
                            data: res.data
                          };
                          if(!res.data.success){
                            gb.toast(res.data.error)
                          }
                          resolve(data);
                        }

                  })
              }
            },200)
        }else{
          if (res) {
            const data = {
              data: res.data
            };
            if(!res.data.success && res.data.error){
              
              gb.toast(res.data.error)
            }
            resolve(data);
          }
        }
      }).catch((error) => { 
        // 在这里做错误处理
        reject(error);
      });
  });
};

export const fetch = {
  get(url,data, config) {
    return new Promise((resolve, reject)=>{
      axios.get(url,{params:data})
      .then((res) => {
        if(res.response && res.response.status==401){
          var count =0
          var index =  setInterval(()=>{
            count += 200
            if(count > 10*1000){
              reject("wait for token time out")
            }
            if(!flage){
              fetch.get(url,data, config).then((res)=>{
                clearInterval(index)
                if (res) {
                  resolve(res);
                }
              })
            }
          },200)
        }else if (res) {
          resolve(res);
        }
      }).catch((error) => { 
        // 在这里做错误处理
        reject(error);
      });
    })
  },
  post(url, data, config) {
    return request('post', url, data, config);
  },
  put(url, data, config) {
    return request('put', url, data, config);
  },
  delete(url, data, config) {
    return new Promise((resolve, reject)=>{
      axios.delete(url,{params:data})
      .then((res) => {
        if (res) {
          resolve(res);
        }
      }).catch((error) => { 
        // 在这里做错误处理
        reject(error);
      });
    })
    // return request('delete', url, data, config);
  },
  head(url, config) {
    return request('head', url, null, config);
  },
  patch(url, data, config) {
    return request('patch', url, data, config);
  }
};
