import { combineReducers } from 'redux';
import registerWithCodeReducer from '../../Slices/LoginWithCodeSlice';

const rootReducer = combineReducers({
    registerWithCode:registerWithCodeReducer,
  });
  export default rootReducer;