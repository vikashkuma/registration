import store from '../';
import types from '../action-types';
import { keepAlive, getTokenJson } from 'src/utils/user';
import { doLogin, doLogout, checkMFA, checkAuthMfa } from 'src/services/user';
import { clearToken, storeDeviceId, getCurrentOrganization } from 'src/utils/token';
import { pushHistory } from 'src/utils/route';
// Place here all the logic before applying changes to the store and not related to the presentation,
// Such as ajax calls, some calculations, data modifications and so on.
export function restoreSession() {
  const { auth } = store.getState();
  if (!auth.session) {
    const session = getTokenJson();
    if (session) {
      store.dispatch({
        type: types.LOGIN_SUCCESS,
        payload: session
      });
      keepAlive.start();
    } else {
      keepAlive.stop();
    }
  }
  store.dispatch({
    type: types.SESSION_RESTORED
  });
}

export function login(payload) {
  if (payload.username === 'hruday@gmail.com' && payload.password === 'hruday123') {
    return store.dispatch({
      type: types.LOGIN_SUCCESS,
      payload: payload
    });
  }
}

export function logout() {
  clearToken();
  keepAlive.stop();
  store.dispatch({
    type: types.LOGOUT,
  });
  doLogout();
  pushHistory('/sign-in');
}

export function changePassword() {
  store.dispatch({
    type: types.CHANGE_PWD_SHOW_TOASTER,
    payload: true
  });
}
export function changePasswordDone() {
  store.dispatch({
    type: types.CHANGE_PWD_HIDE_TOASTER,
    payload: false
  });
}

export function updateNotFound(notFound = false) {
  return store.dispatch({
    type: types.NOTFOUND_ERROR_UPDATE,
    payload: notFound
  });
}

export default {
  changePassword,
  changePasswordDone
};
