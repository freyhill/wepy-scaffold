import { DETAIL_DATA } from '../types/index';
import http from '../../util/http.js';
import Tips from '../../util/tips';
import util from '../../util/util';
//写入学生
export function setDetailAction(newData) {
  return { type: DETAIL_DATA, newData }
}
/*
 * 业务函数
 */
export async function getDetailData(store, url, data, loading) { //

    let newData = await http.get(url, data, loading);

    store.dispatch(setDetailAction(newData));
    return newData;
  } catch(error) {

    Tips.error(error.message, 1000).then(() => {
      // 跳转到首页
    })
  }
}
