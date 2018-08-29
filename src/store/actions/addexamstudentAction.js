import { ADD_EXAMSTUDENT_DATA } from '../types/index';
import http from '../../util/http.js';
//写入学生
export function setaddExamStudentAction(newData) {
  return { type: ADD_EXAMSTUDENT_DATA, newData }
}
/*
 * 业务函数
 */
export async function getAddExamStudentData(store, url, data, loading) { //
  try {
    let newData = await http.get(url, data, loading);
    store.dispatch(setaddExamStudentAction(newData));
    return newData;
  } catch(error) {
    Tips.error(error.message, 1000).then(() => {
      //跳转到首页
    })
  }
}