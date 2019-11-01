import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
});
export default createRootReducer