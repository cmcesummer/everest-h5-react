import commonReg from './commonReg.js'

export function testChineseNum(str, num) {
  let arr = str.split(''),
  cheArr = [];

  for (let item of arr) {
    if (commonReg.Chinese.test(item)) {
      cheArr.push(item);
    }
  }
  return cheArr.length > num - 1;
}