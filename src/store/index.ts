import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const middlewares: Array<any> = [thunkMiddleware, composeWithDevTools]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const enhancers = compose(applyMiddleware(...middlewares))

const store = createStore(rootReducer, enhancers)

export interface Store {
  app: {
    loading: boolean
  }
  counter: {
    value: number
    something: {
      value: number
    }
  }
}

export default store
