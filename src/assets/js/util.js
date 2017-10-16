import commonReg from './commonReg.js'

export function testChineseNum(str, num) {
  const reg = /[\u4e00-\u9fa5]/g;
  const arr = str.match(reg)
  
  return arr.length > num - 1;
}