import * as ActionTypes from '../actions/counter/constants'

type Action = {
  type: string
  payload: Object
}

type State = {
  value: number
}

const initialState: State = {
  value: 0,
}

export default function(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {
        ...state,
        value: state.value + 1,
      }
    case ActionTypes.RESET:
      return initialState
    default:
      return state
  }
}
