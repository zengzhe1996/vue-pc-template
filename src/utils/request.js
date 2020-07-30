import axios from 'axios';
import qs from 'qs';
import {Message} from 'element-ui'
import { resolve, reject } from 'core-js/fn/promise';
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'; // application/json;chareset=UTF-8
axios.withCredentials = true;

// let promise = new Promise()
let instans = class request{
  post(url, params, headers = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}){
    return axios.post(url, params, headers).then(({data}) => {
      if(data.success){
        promise.resolve(data)
      }
      promise.reject(data)
    }).catch( err = {
      
    })
  }
}
export default new instans();