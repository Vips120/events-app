import {combineReducers} from 'redux';
import asyncReducer from '../async/asyncReducer';
import eventReducer from '../features/events/eventReducer';
import testReducer from '../features/sandbox/testReducer';
import authReducer from '../features/auth/authReducer';
import  modalReducer, {} from '../common/modals/modalReducer';
const rootReducer = combineReducers({test: testReducer, event: eventReducer,
 async: asyncReducer,
 auth: authReducer,
 modals: modalReducer
});

export default rootReducer;