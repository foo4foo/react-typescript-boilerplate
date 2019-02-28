import { reduce } from 'ramda'
import { ActionTypes } from './constants'
import * as service from '../../../services/posts'

export const getAll = () => {
  return async (dispatch: any) => {
    dispatch({ type: ActionTypes.FETCH_POSTS })

    try {
      const response = await service.getAll()

      const payload = reduce(
        (acc: [], key: string) => {
          return [...acc, response[key]] as []
        },
        [],
        Object.keys(response),
      )

      dispatch({ type: ActionTypes.FETCH_POSTS_SUCCESS, payload })
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_POSTS_FAILURE, error: error.message })
    }
  }
}

export const getPost = (postId: string | number) => {
  return async (dispatch: any) => {
    dispatch({ type: ActionTypes.FETCH_POST })

    try {
      const response = await service.getPost(postId)

      dispatch({ type: ActionTypes.FETCH_POST_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_POSTS_FAILURE, error: error.message })
    }
  }
}
