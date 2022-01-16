import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from "./eventConstants";
 import {asyncActionStart, asyncActionFinish,asyncActionError} from '../../../app/async/asyncReducer';
import { fetchSampleData } from "../../api/mockapi";
export function loadEvents() {
 return async function(dispatch) {
  dispatch(asyncActionStart());
  try {
      const events = await fetchSampleData();
      dispatch({type: FETCH_EVENT, payload: events});
      dispatch(asyncActionFinish());
  }
  catch(error){
     dispatch(asyncActionError(error));
  }
 }
};
export function listenToEvents(events) {
    return {
        type: FETCH_EVENT,
        payload: events
    }
}




export function createEvent(event) {
    return {type: CREATE_EVENT, payload:event};
};
export function updateEvent(event) {
    return {type: UPDATE_EVENT, payload:event};
}
export function deleteEvent(event) {
    return {type: DELETE_EVENT, payload:event};
}