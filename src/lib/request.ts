import { qs } from './utils'

interface Props {
  path: string
  method?: string
  data?: string | object
  query?: object
  headers?: {
    [key: string]: string
  }
}

const SERVER_URL = 'https://jsonplaceholder.typicode.com'

export default async ({ path, method = 'GET', data, query, headers = {} }: Props) => {
  const requestHeaders = {
    'Content-Type': headers['Content-Type'] || 'application/json',
    Accept: headers['Accept'] || 'application/json',
    ...headers,
  }

  let body

  try {
    body = data ? JSON.stringify(data) : data
  } catch (err) {
    console.error(err)
  }

  let url = `${SERVER_URL}${path}`

  if (query && Object.keys(query).length) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + qs(query)
  }

  try {
    const response = await fetch(url, {
      body: body,
      method,
      headers: requestHeaders,
    })

    if (response.status >= 200 && response.status < 300) {
      return { status: response.status, ...(await response.json()) }
    }

    const error = await response.json()
    throw Error(error.message || response.statusText)
  } catch (err) {
    throw err
  }
}
