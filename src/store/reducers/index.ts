import { combineReducers } from 'redux'
import app from './app'
import counter from './counter'
import posts from './posts'

export default combineReducers({ app, counter, posts })
