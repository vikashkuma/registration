import store from '..';
import types from '../action-types';
import {
  loadUserList
} from 'src/services/userList';

export function fetchUserList() {
  return loadUserList()
    .then(resp => resp.data)
    .then(userList => {
      store.dispatch({
        type: types.FETCH_USERLIST_SUCCESS,
        payload: userList
      });
    })
    .catch(err => {
      store.dispatch({
        type: types.FETCH_USERLIST_ERROR,
        payload: err,
        err: true
      });
      return null;
    });
}

