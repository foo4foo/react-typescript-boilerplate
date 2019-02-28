export const qs = (params: { [key: string]: any }) => {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
