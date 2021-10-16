import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const configureStore = (preloadedState: any) => createStore(
  createRootReducer(history), // root reducer with router state
  preloadedState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)

export default configureStore
