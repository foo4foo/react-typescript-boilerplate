import * as ActionTypes from './constants'
import Action from './types'

export const updateCounter = (): Action => ({
  type: ActionTypes.UPDATE
})

export const resetCounter = (): Action => ({
  type: ActionTypes.RESET
})
