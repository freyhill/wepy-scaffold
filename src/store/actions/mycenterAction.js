import { MY_CENTER_DATA } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips.js';
/*
 * actionCreator
 */
export function setMycenterAction(newData) {
  return { type: MY_CENTER_DATA, newData }
}
/*
 * 业务函数
 */
export async function getMycenterData(store, url, data, loading) { //
  try {
    let newData = await http.get(url, data, loading);
    store.dispatch(setMycenterAction(newData))
  } catch(error) {
    console.log(error);
    Tips.error(error.message, 1000).then(() => {
      //跳转到首页
    })
  }
}