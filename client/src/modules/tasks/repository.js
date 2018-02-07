import { camelizeKeys } from 'humps'

import { request } from '../common'

export async function getAll () {
  const response = await fetch('/tasks/')
  return camelizeKeys(await response.json())
}

export async function add (task) {
  const response = await request('/tasks/', task, {
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function remove (task) {
  await request('/tasks/', task, {
    method: 'delete'
  })
}
