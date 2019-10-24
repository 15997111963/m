import { combineReducers,createStore, compose } from 'redux'
import user from './user'

const reducer = combineReducers({
  user
})

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose

export default createStore(
  reducer,
  composeEnhancers
)