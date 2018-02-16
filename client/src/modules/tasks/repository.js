import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/tasks/', {
    headers: new Headers({
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function add (task) {
  const response = await fetch('/tasks/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(task)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function remove (task) {
  await fetch('/tasks/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(task)),
    method: 'delete'
  })
}
