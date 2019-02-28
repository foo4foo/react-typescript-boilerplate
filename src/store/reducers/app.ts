type Action = {
  type: string,
  payload: Object
}

type State = {
  loading: boolean
}

const initialState: State = {
  loading: false
}

export default function(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state
  }
}