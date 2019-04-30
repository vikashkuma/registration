import types from '../action-types';

const defaultState = {
  title: 'Auth',
  isChangePwd: false,
  user: {},
  sessionRestored: false,
  notFoundError: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_PWD_SHOW_TOASTER:
      return { ...state, data: action.payload, isChangePwd: true };
    case types.CHANGE_PWD_HIDE_TOASTER:
      return { ...state, data: action.payload, isChangePwd: false };
    case types.MFA_SUCCESS:
      return { ...state };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case types.SELECT_ORGANIZATION_SUCCESS:
      return { ...state, user: action.payload };
    case types.LOGIN_ERROR:
      return { ...state, error: { error: action.err } };
    case types.LOGOUT:
      return { user: null, error: null };
    case types.SESSION_RESTORED:
      return { ...state, sessionRestored: true };
    case types.NOTFOUND_ERROR_UPDATE:
      return { ...state, notFoundError: action.payload };
  }
  return state;
};
