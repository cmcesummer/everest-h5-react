
export const SETMESSAGE = 'creditCard/SETMESSAGE';
export const SETAJAXMESSAGE = 'creditCard/SETAJAXMESSAGE';
export const CHANGECARDTYPE = 'creditCard/CHANGECARDTYPE'

export function setmessage(key, val) {
  return {
    type: SETMESSAGE,
    key,
    val
  }
}

export const setAjaxMessage = (obj) => {
  return {
    type: SETAJAXMESSAGE,
    obj
  }
}

export const changeCardType = (cardType) => {
  return {
    type: CHANGECARDTYPE,
    cardType
  }
}

export function setAjaxMessageFnc() {
  return function (dispatch, getState) {
    var num = parseInt(Math.random() * 100);
    var obj = {
      occupation: '大撒旦撒aa'
    }
    setTimeout(() => {
      console.log(222)
      dispatch(setAjaxMessage(obj));
    }, 5000 )
    // fetch('/api/util/getSmsCode', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: 'mobile=185123429' + num
    // }).then(res => {
    //   return res.json()
    // }).then(data => {
    //   console.log(data);
    //   dispatch(setAjaxMessage(obj));
    // })
  }
}