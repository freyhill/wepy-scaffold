/********************************
 * 常用公共函数
 * author:leinov
 * use: import util from './util'
 *      util.getDate('/');
 *********************************/
export default class util {
  /**
   * 获取当前的日期
   *
   * @param {string} '-'
   * @returns {string}  '2018-08-16'
   */
  static getDate(type = '-') {
    const date = new Date();
    const year = date.getFullYear();
    const month = this.datePlus0(new Date().getMonth() + 1);
    const currentDate = this.datePlus0(new Date().getDate());
    return `${year}${type}${month}${type}${currentDate}`;
  }
  /**
   * 获取本周
   *
   * @param {string} '-,/'
   * @returns {Array}  '['2018-08-09','2018-08-16']'
   */
  static getOneWeek(type = '-') {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const currentdate = date.getDate();
    const nowDate = this.getDate(type);
    let beforeDate = ``;
    //当前日期减去7日
    const datebefore7 = currentdate - 7;
    let lastMonthDays = this.howManyDaysOneMonth(month - 1); //上一个月的天数
    //当前日期减去7天大于0
    if(datebefore7 > 0) {
      beforeDate = `${year}${type}${this.datePlus0(month)}${type}${this.datePlus0(datebefore7)}`
    }
    //当前日期减去7天等于0
    if(datebefore7 === 0) {
      if(month > 1) { //如果当前不是1月就减1
        beforeDate = `${year}${type}${this.datePlus0(month - 1)}${type}${this.datePlus0(lastMonthDays)}`;
      } else if(month === 1) {
        let lastYear = year - 1;
        let lastMonth = 12;
        beforeDate = `${lastYear}${type}${this.datePlus0(lastMonth)}${type}${this.datePlus0(lastMonthDays)}`;
      }
    }
    //当前日期减去7天小于0
    if(nowDate < 0) {
      let lastmonthdate = lastMonthDays - Math.abs(datebefore7);
      if(month > 1) {
        let lastMonth = month - 1;
        beforeDate = `${year}${type}${this.datePlus0(lastMonth)}${type}${this.datePlus0(lastmonthdate)}`;
      } else if(month === 1) {
        let lastYear = year - 1;
        let lastMonth = 12;
        beforeDate = `${lastYear}${type}${this.datePlus0(lastMonth)}${type}${this.datePlus0(lastmonthdate)}`;
      }
    }
    return [beforeDate, nowDate];
  }
  /**
   * 一个月有几天
   *
   * @param {Number} //8
   * @returns {Number} // 31
   */
  static howManyDaysOneMonth(month) {
    let date = new Date();
    date.setMonth(month);
    date.setDate(0);
    return date.getDate();
  }
  /**
   * 补0
   *
   * @param {Number} //8
   * @returns {String} // 08
   */
  static datePlus0(x) {
    if(x < 10) {
      return `0${x}`;
    } else {
      return x
    }
  }
  /**
   * 检查是否为电话号码
   *
   * @param {Number} //8
   * @returns {Boolean} // true
   */
  static isPhoneNum(phone) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(!reg.test(phone)) {
      return false;
    }
    return true;
  }
  /**
   * 检查数组，如果包含这项就删除，如果不包含就push进数组
   *
   * @param {Array} //[1,2,3,4,5]
   * @param {String,Number,Object} //4
   * @returns {Array} // [1,2,3,5]
   */
  static checkArray(arr, hasit) {
    if(arr.includes(hasit)) {
      arr.splice(arr.findIndex(item => item === hasit), 1);
      return arr;
    } else {
      arr.push(hasit);
      return arr;
    }
  }
  /**
   * 获取两个数组的交集
   *
   * @param {Array} //[1,2,3,4,5,8,9]
   * @param {Array} //[1,11,9]
   * @returns {Array} // [1,9]
   */
  static commonArray(arr1, arr2, key) {
    let commonarr = arr1.filter((x) => {
      if(key) {
        return arr2.includes(x[key])
      } else {
        return arr2.includes(x)
      }
    })
    return commonarr;
  }
  /**
   * 获取两个数组的交集 by dujiawei
   *
   * @param {obj} //[1,2,3,4,5,8,9]
   * @returns {obj} // [1,9]
   */
  static deepCopy(data) {
    if(Object.prototype.toString.call(data) === '[object Array]') {
      return data.map((item, i) => {
        if(Object.prototype.toString.call(item) === '[object Array]' || Object.prototype.toString.call(item) === '[object Object]') {
          return this.deepCopy(item);
        }
        return item;
      });
    } else if(Object.prototype.toString.call(data) === '[object Object]') {
      let newData = {};
      for(let i in data) {
        if(Object.prototype.toString.call(data[i]) === '[object Array]' || Object.prototype.toString.call(data[i]) === '[object Object]') {
          newData[i] = this.deepCopy(data[i]);
        } else {
          newData[i] = data[i];
        }
      }
      return newData;
    }
  }
}