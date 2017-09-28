import { SETMESSAGE, SETAJAXMESSAGE, CHANGECARDTYPE } from '../actions/creditCard.js';

const initState = {
  information: {},
  cardType: 0
};

export default function reducer(state = initState, action) {

  switch (action.type) {
    //对信息单个赋值
    case SETMESSAGE:
      const key = action.key;
      return {
        ...state,
        information: {
          ...state.information,
          [key]: action.val
        }

      }
    //对信息整体赋值  
    case SETAJAXMESSAGE:
      return {
        ...state,
        information: action.obj
      }
    //改变swipe卡种类型  
    case CHANGECARDTYPE:
      return {
        ...state,
        cardType: action.cardType
      }
    default:
      return state
  }
}

