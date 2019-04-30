import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { IS_DEBUG } from 'src/config';
import reducers from './reducers';
const showActions = true;
const store = createStore(reducers, showActions && applyMiddleware(logger));

if (IS_DEBUG) {
  window.__store = store;
}
export default store;

