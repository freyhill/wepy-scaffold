import wepy from 'wepy';
import http from './/http'
import config from '../config.js';
export default class auth {
  /**
   * 一键登录
   */
  static async login() {
    let session_key;
    try {
      console.log("ssss");
      session_key = await this.getConfig('session_key');
    } catch(error) {
      session_key = "";
    }
    if(session_key != null && session_key != '') {
      try {
        console.log("有session_key");
        await this.checkUserLoginCode(session_key); //这个等有后端接口了加上检查登录用
      } catch(e) {
        //过期session_key 调登录
        console.log("有过期session_key");
        await this.gotoLoginPage();
      }
    } else {
      //没有session_key 调登录
      console.log("没有session_key");
      await this.gotoLoginPage();
    }
  }
  /**
   * 执行登录操作
   */
  static async doLogin() {
    const sessionkeyData = await this.getSessionKey();
    console.log("sessionkey", sessionkeyData.data.data.session_key);
    await this.setConfig('session_key', sessionkeyData.data.data.session_key);
    await this.login();
    wepy.hideLoading();
  }
  /**
   * 跳到登录页使用用户名密码登录
   */
  static async gotoLoginPage() {
    wepy.navigateTo({ url: 'login' });
    throw { msg: "没有登录" }
  }
  /**
   * 使用微信登录的方式获取session_key
   */
  static async getSessionKey() {
    wepy.showLoading();
    const wxcode = await wepy.login();
    return await wepy.request({
      url: `${config.api}login`,
      data: { code: wxcode.code }
    })
  }
  /**
   *使用用户名的方式检查登录
   */
  static async checkUserLoginCode(loginCode) {
    const url = `${config.api}coach/check_login`;
    let islogin = await wepy.request({
      url: url,
      data: { session_key: loginCode }
    })
    if(islogin.data.success === 'false') {
      throw { islogin: "session_key过期" }
    }
  }
  /**
   * 使用微信登录的方式检查登录情况
   */
  static async checkLoginCode(loginCode) {
    const url = `${this.baseUrl}/auth/check_session?login_code=${loginCode}`;
    const data = await http.get(url);
    return data.result;
  }
  /**
   * 设置权限值
   */
  static getConfig(key) {
    //return wepy.$instance.globalData.auth[key];
    return new Promise(function(resolve, reject) {
      wx.getStorage({ //不能使用wepy.getStorage
        key: 'session_key',
        success: function(res) {
          console.log("storage", res);
          resolve(res.data);
        },
        fail: function(error) {
          console.log("storagerr", error);
          reject(error);
        }
      })
    })
  }
  /**
   * 读取权限值
   */
  static setConfig(key, value) {
    //  wepy.$instance.globalData.auth[key] = value;
    return new Promise((resolve,reject)=>{
      wx.setStorage({
        key: key,
        data: value,
        success:function(){
          resolve();
        },
        fail:function(){
          reject("登录失败，请重试");
        }
      })
    })

  }
}
