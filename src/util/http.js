import wepy from 'wepy';
import config from '../config.js';
import auth from './auth';

/**
* http请求
*/
export default class http {
  //re quest封装
  static async request(method, url, data, loading = true) {
    if(loading) {
      wepy.showLoading();
    }
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
      //抛出异常
      throw this.requestException(res);
    }
  }

  /**
   * 是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if(wxCode !== 200) {
      return false;
    }
    //请求成功
    const wxData = res.data;
    if(wxData && (wxData.code === 0 || wxData.code === 200)) {
      //数据请求成功
      return true;
    } else {
      //过期进入登录页面
      if(wxData.code === 10005) {
        auth.gotoLoginPage();// 这跳登录页面的情况，还有通过wxcode登录的方式
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
