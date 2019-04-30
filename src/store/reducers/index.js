import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from './auth-reducer';
import userList from './user-reducer';

export default combineReducers({
  form: reduxFormReducer,
  toastr: toastrReducer,
  auth,
  userList
});
