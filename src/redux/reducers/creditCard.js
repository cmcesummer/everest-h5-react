import { SETMESSAGE, SETAJAXMESSAGE } from '../actions/creditCard.js';

const initState = {
  information: {}
};

export default function reducer(state = initState, action) {


  switch (action.type) {
    case SETMESSAGE:
      const key = action.key;
      console.log(state)
      return {
        ...state,
        information: {
          ...state.information,
          [key] : action.val
        }
         
      }
    case SETAJAXMESSAGE:
      return {
        ...state,
        information: action.obj
      }
    default:
      return state
  }
}

