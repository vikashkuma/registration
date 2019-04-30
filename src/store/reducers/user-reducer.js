import types from '../action-types';

const defaultState = {
  userlist: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_USERLIST_SUCCESS:
      return { ...state, userList: action.payload };
    case types.FETCH_USERLIST_ERROR: // return error
      return { ...state, error: { error: action.err } };
  }
  return state;
};
