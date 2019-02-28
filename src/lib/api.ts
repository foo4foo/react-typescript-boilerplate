import request from './request'

export const get = (
  path: string,
  query?: object,
  headers?: { [key: string]: string },
): Promise<any> => {
  return request({ path, query, method: 'GET', headers })
}

export const post = (
  path: string,
  data: object,
  headers?: { [key: string]: string },
): Promise<any> => {
  return request({ path, method: 'POST', data, headers })
}

export const put = (
  path: string,
  data: object,
  headers?: { [key: string]: string },
): Promise<any> => {
  return request({ path, method: 'PUT', data, headers })
}

export const patch = (
  path: string,
  data: object,
  headers?: { [key: string]: string },
): Promise<any> => {
  return request({ path, method: 'PATCH', data, headers })
}

export const del = (
  path: string,
  data?: object,
  headers?: { [key: string]: string },
): Promise<any> => {
  return request({ path, method: 'DELETE', data, headers })
}
