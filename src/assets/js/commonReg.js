export default {
  mobile: /^1[34578]\d{9}$/,
  loginCode: /^[0-9]{6}$/,
  Chinese: /^[\u2E80-\u9FFF]+$/,
  englishCode: /^[a-zA-Z]+$/,
  email:  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
  workPhoneCityCode: /^[0-9]{3,5}$/,
  workPhoneNo: /^[0-9]{7,8}$/,
  money:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  intMoney: /^\d{1,}$/,
  emoji: /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  idCard: idcard => {
      if (!idcard) {
        return false;
      }
      idcard = idcard.toString();
      idcard = idcard.toUpperCase();
      let area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
      };

      // 身份有效性检查，年份只允许1或2开头的
      if (!/^\d{6}[12]\d{10}[\dX]$/.test(idcard) ||
        !area[idcard.substr(0, 2)]) {
        return false;
      }

      let year = parseInt(idcard.substr(6, 4), 10);
      let month = parseInt(idcard.substr(10, 2), 10) - 1;
      let day = parseInt(idcard.substr(12, 2), 10);
      let now = new Date();
      let date = new Date();
      date.setFullYear(year);
      date.setMonth(month);
      date.setDate(day);

      // 年月日有效性简单检查
      if (year > now.getFullYear() || year < 1900 ||
        month < 0 || month > 11 ||
        day < 1 || day > 31 ||
        date.getMonth() !== month ||
        date.getDate() !== day) {
        return false;
      }

      // ⑤15-17 顺序码，同一地区同年、同月、同日出生人的编号，奇数是男性，偶数是女性
      // ⑥18 校验码，如果是0-9则用0-9表示，如果是10则用X（罗马数字10）表示

      // 18位的加权因子
    let Wi = [
          7, 9, 10, 5, 8, 4, 2, 1, 6,
        3, 7, 9, 10, 5, 8, 4, 2, 1];
      let sum = 0;
      for (let i = 0; i < 18; ++i) {
        let mul;
        let char = idcard.charAt(i);
        if (char === 'X') {
          mul = 10;
        } else {
          mul = parseInt(char, 10);
        }
        sum += mul * Wi[i];
      }
      //console.log(sum % 11);
      // 身份证校验位检查
      return sum % 11 === 1;
    },
  password(val) {
    let strArr = ['012345', '123456', '234567', '345678', '456789', '987654', '876543', '765432', '654321', '543210'];
    let sameReg = /^(?:([0-9])\1{5})$/;
    if(~strArr.indexOf(val) || sameReg.test(val)) {
      return false
    } else {
      return true
    }
  },
  idCardZX(idcard) {
    var area = {
      11 : "北京",
      12 : "天津",
      13 : "河北",
      14 : "山西",
      15 : "内蒙古",
      21 : "辽宁",
      22 : "吉林",
      23 : "黑龙江",
      31 : "上海",
      32 : "江苏",
      33 : "浙江",
      34 : "安徽",
      35 : "福建",
      36 : "江西",
      37 : "山东",
      41 : "河南",
      42 : "湖北",
      43 : "湖南",
      44 : "广东",
      45 : "广西",
      46 : "海南",
      50 : "重庆",
      51 : "四川",
      52 : "贵州",
      53 : "云南",
      54 : "西藏",
      61 : "陕西",
      62 : "甘肃",
      63 : "青海",
      64 : "宁夏",
      65 : "新疆",
      71 : "台湾",
      81 : "香港",
      82 : "澳门",
      91 : "国外"
    }
    var Y, JYM;
    var S, M;
    var idcard_array = new Array();
    var ereg;
    idcard = idcard.replace("x", "X");
    idcard_array = idcard.split("");
    if (idcard.length == 0)
      return false;
    if (area[parseInt(idcard.substr(0, 2))] == null)
      return false;
    switch (idcard.length) {
      case 15 :
        if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0
          || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard
            .substr(6, 2)) + 1900)
          % 4 == 0)) {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;// 测试出生日期的合法性
        } else {
          ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;// 测试出生日期的合法性
        }
        if (ereg.test(idcard))
          return true;
        else
          return false;
        break;
      case 18 :
        if (parseInt(idcard.substr(6, 4)) % 4 == 0
          || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard
            .substr(6, 4))
          % 4 == 0)) {
          ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;// 闰年出生日期的合法性正则表达式
        } else {
          ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;// 平年出生日期的合法性正则表达式
        }
        if (ereg.test(idcard)) {
          S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10]))
            * 7
            + (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
            * 9
            + (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
            * 10
            + (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
            * 5
            + (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
            * 8
            + (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
            * 4
            + (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
            * 2 + parseInt(idcard_array[7]) * 1
            + parseInt(idcard_array[8]) * 6
            + parseInt(idcard_array[9]) * 3;
          Y = S % 11;
          M = "F";
          JYM = "10X98765432";
          M = JYM.substr(Y, 1);
          if (M == idcard_array[17])
            return true;
          else
            return false;
        } else
          return false;
        break;
      default :
        return false;
        break;
    }
  }

}
