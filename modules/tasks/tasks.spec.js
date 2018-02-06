import request from 'supertest'

import app from '../../app'
import Task from './Task'

describe('tasks', () => {
  beforeEach(async () => {
    await Task.query().delete()
  })

  it('gets all the tasks', async () => {
    await Task.query().insert({ 'name': 'Some Task', 'category': 'Some Category' })

    const response = await request(app).get('/tasks/')

    expect(response.statusCode).toBe(200)
    const tasks = response.body
    expect(tasks[0]).toEqual(expect.objectContaining({ 'name': 'Some Task' }))
  })

  it('adds a new task', async () => {
    const task = { 'name': 'Some Task', 'category': 'Some Category' }

    const response = await request(app)
      .post('/tasks/')
      .set('Content-Type', 'application/json')
      .send(task)

    expect(response.statusCode).toBe(200)
    const tasks = await Task.query()
    expect(tasks[0]).toEqual(expect.objectContaining({
      'name': 'Some Task',
      'category': 'Some Category'
    }))
  })

  it('removes an existing task', async () => {
    await Task.query().insert({ 'id': 999, 'name': 'XXXXX', 'category': 'XXXXX' })
    const task = { 'id': 999 }

    const response = await request(app)
      .delete('/tasks/')
      .set('Content-Type', 'application/json')
      .send(task)

    expect(response.statusCode).toBe(200)
    const results = await Task.query().count()
    expect(results[0]['count']).toEqual('0')
  })
})
