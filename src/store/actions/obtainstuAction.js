import { OBTAINSTUDENTLIST } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips.js';
/*
 * actionCreator
 */
export function setobtainStudentAction(newData) {
  return { type: OBTAINSTUDENTLIST, newData }
}
/*
 * 业务函数
 */
export async function obtainStudentList(store, url, data, loading) { //
  try {
    let newData = await http.get(url, data, loading);
    store.dispatch(setobtainStudentAction(newData))
  } catch(error) {
    console.log(error);
    Tips.error(error.message, 1000).then(() => {
      //跳转到首页
    })
  }
}