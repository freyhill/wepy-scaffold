import { STUDENTLIST } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips';
import util from '../../util/util';
//写入学生
export function setStudentAction(newData) {
  return { type: STUDENTLIST, newData }
}
/*
 * 业务函数
 */
export async function getStudentData(store, url, data, loading) { //
  let copy_requestdata = {};
  try {
    let newData = await http.get(url, data, loading);
    copy_requestdata = util.deepCopy(newData); //拷贝一份请求的原生数据返回使用

    let storeStudentData = store.getState().studentReducer.studentdata; //获取redux里的数据
    let totalData;
    if(storeStudentData.data) {
      totalData = storeStudentData.data.content.concat(newData.data.content); //合并数据
      newData.data.content = totalData;
    }
    
    store.dispatch(setStudentAction(newData));
    return copy_requestdata;
  } catch(error) {
    console.log(error);
    Tips.error(error.message, 1000).then(() => {
      // 跳转到首页
    })
  }
}
