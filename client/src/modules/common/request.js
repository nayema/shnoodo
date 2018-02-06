import { decamelizeKeys } from 'humps'

async function request (url, body, options) {
  return fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(decamelizeKeys(body)),
    ...options
  })
}

export default request
