import { ActionTypes } from '../actions/posts/constants'
import { Action } from '../actions/types'

type State = {
  loading: boolean
  error: string
  list: Array<any>
  post: object
}

const initialState: State = {
  error: '',
  loading: false,
  list: [],
  post: {},
}

export default function(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        list: action.payload,
      }
    case ActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || '',
      }
    default:
      return state
  }
}
