import { toast } from "react-toastify";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../async/asyncReducer";
import { delay } from "../../common/util/util";

export const INCREMENT_NUMBER = "INCREMENT_NUMBER";
export const DECREMENT_NUMBER = "DECREMENT_NUMBER";
// INCREMENT ACTION METHOD USING THUNK MIDDLEWARE
export function increment(count) {
  return async function(dispatch) {
      dispatch(asyncActionStart())
      try {
        await delay(1000);
        throw 'oops';
        dispatch({type: INCREMENT_NUMBER, payload: count});
        dispatch(asyncActionFinish());

      }
      catch(error){
          dispatch(asyncActionError(error));
          toast.error(error);
      }

  }  
};



// INCREMENT ACTION METHOD USING THUNK MIDDLEWARE
export function decrement(count) {
    return async function(dispatch) {
        dispatch(asyncActionStart())
        try {
          await delay(1000);
          dispatch({type: DECREMENT_NUMBER, payload: count});
          dispatch(asyncActionFinish());
        }
        catch(error){
            dispatch(asyncActionError(error));
        }
  
    }  
  };
  


// ACTION CREATOR FOR  incrementAction
export function incrementAction(count) {
 return {type: INCREMENT_NUMBER, payload: count};
};

// Action CREATOR FRO decrementAction

export function decrementAction(count) {
    return {type: DECREMENT_NUMBER, payload: count};
}


const initialState = {
    data:10
};

export default function testReducer(state=initialState,action) {
  switch(action.type) {
      case INCREMENT_NUMBER:
          return  {...state, data: state.data + action.payload};
    case DECREMENT_NUMBER:
        return {...state, data: state.data - action.payload};
    default:
        return state;
  }
};
