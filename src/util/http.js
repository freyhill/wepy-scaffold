import wepy from 'wepy';
import configStore from '../store'
import config from '../config.js';
import auth from './auth';
const store = configStore();
// HTTP工具类
export default class http {
  static async request(method, url, data, loading = true) {
    if(loading) {
      wepy.showLoading();
    }
    //data.session_key = wepy.$instance.globalData.auth.session_key;
    let session_key = await auth.getConfig("session_key");
    data.session_key = session_key;
    const param = {
      url: `${config.api}${url}`,
      method: method,
      data: data
    };
    const res = await wepy.request(param);
    wepy.hideLoading();
    if(this.isSuccess(res)) {
      return res.data;
    } else {
      throw this.requestException(res);
    }
  }
  /**
   *  1.http请求错误
   *  2.请求成功 code == 0
   *  3.请求成功code!=0
   *  4.请求成功code!=0
   */
  static isOk(res) {
    const resCode = res.code;
    if(resCode === 0) {
      return true;
    } else {
      return false;
    }
  }
  static isSuccess(res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if(wxCode !== 200) {
      return false;
    }
    const wxData = res.data;
    if(wxData && (wxData.code === 0 || wxData.code === 20000)) {
      //数据请求成功
      return true;
    } else {
      if(wxData.code === 10005) {
        auth.gotoLoginPage();
      }
      return false;
    }
  }
  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    error.statusCode = res.statusCode;
    const serverData = res.data;
    if(serverData) {
      error.serverCode = serverData.code;
      if(res.statusCode === 404) {
        error.message = "网络错误请退出重试";
      } else {
        error.message = serverData.message ? serverData.message : serverData.msg;
      }
      error.serverData = serverData;
    }
    return error;
  }
  static get(url, data, loading = true) {
    return this.request('GET', url, data, loading);
  }
  static put(url, data, loading = true) {
    return this.request('PUT', url, data, loading);
  }
  static post(url, data, loading = true) {
    return this.request('POST', url, data, loading);
  }
  static patch(url, data, loading = true) {
    return this.request('PATCH', url, data, loading);
  }
  static delete(url, data, loading = true) {
    return this.request('DELETE', url, data, loading);
  }
}