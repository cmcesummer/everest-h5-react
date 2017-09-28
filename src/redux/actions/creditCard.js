
export const SETMESSAGE = 'creditCard/SETMESSAGE';
export const SETAJAXMESSAGE = 'creditCard/SETAJAXMESSAGE';

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