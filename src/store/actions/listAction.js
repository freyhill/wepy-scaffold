import { LIST_DATA } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips';
import util from '../../util/util';
//写入学生
export function setListAction(newData) {
  return { type: LIST_DATA, newData }
}
/*
 * 业务函数
 */
export async function getListData(store, url, data, loading) { //
try{
    let newData = await http.get(url, data, loading);

    store.dispatch(setListAction(newData.data));
    return newData;
  } catch(error) {

    Tips.error(error.message, 1000).then(() => {
      // 跳转到首页
    })
  }
}
