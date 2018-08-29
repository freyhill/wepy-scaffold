import { EXAM_DETAIL_DATA } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips.js';
/*
 * actionCreator
 */
export function setExamdetailAction(newData) {
  return { type: EXAM_DETAIL_DATA, newData }
}
/*
 * 业务函数
 */
export async function getExamdetailData(store, url, data, loading) { //
  try {
    let newData = await http.get(url, data, loading);
    store.dispatch(setExamdetailAction(newData));
    return newData;
  } catch(error) {
    Tips.error(error.message, 1000).then(() => {
      //跳转到首页
    })
  }
}