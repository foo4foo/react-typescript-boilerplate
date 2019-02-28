import { get } from '../../lib/api'

const URL_PREFIX = '/posts'

export const getAll = (): Promise<any> => {
  return get(`${URL_PREFIX}/`)
}

export const getPost = (postId: string | number): Promise<any> => {
  return get(`${URL_PREFIX}/${postId}`)
}
