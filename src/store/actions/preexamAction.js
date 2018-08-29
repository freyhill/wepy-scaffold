import { PRE_EXAM_DATA } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips.js';
/*
 * actionCreator
 */
export function setPreExamAction(newData) {
  return { type: PRE_EXAM_DATA, newData }
}
/*
 * 业务函数
 */
export async function getPreExamData(store, url, data, loading) { //
  try {
    let newData = await http.get(url, data, loading);
    store.dispatch(setPreExamAction(newData));
    return newData;
  } catch(error) {
    Tips.error(error.message, 1000).then(() => {
      //跳转到首页
    })
  }
}