import request from 'supertest'

import app from '../../app'
import Task from './Task'
import testJwt from './test-jwt'

describe('tasks', () => {
  beforeEach(async () => {
    await Task.query().delete()
  })

  describe('when getting all tasks', () => {
    it('gets all', async () => {
      await Task.query().insert({ 'name': 'Some Task', 'category': 'Some Category', 'user_id': 'test-user' })

      const response = await request(app)
        .get('/tasks/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const tasks = response.body
      expect(tasks[0]).toHaveProperty('id')
      expect(tasks[0]).toEqual(expect.objectContaining({
        'name': 'Some Task',
        'category': 'Some Category',
        'user_id': 'test-user'
      }))
    })

    it('does not get another user task', async () => {
      await Task.query().insert({ 'name': 'Some Task', 'category': 'Some Category', 'user_id': 'another-user' })

      const response = await request(app)
        .get('/tasks/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const tasks = response.body
      expect(tasks.length).toEqual(0)
    })
  })

  describe('when adding a new task', () => {
    it('adds', async () => {
      const task = { 'name': 'Some Task', 'category': 'Some Category' }

      const response = await request(app)
        .post('/tasks/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(task)

      expect(response.statusCode).toBe(200)
      const taskResponse = response.body
      expect(taskResponse).toHaveProperty('id')
      expect(taskResponse).toEqual(expect.objectContaining({
        'name': 'Some Task',
        'category': 'Some Category',
        'user_id': 'test-user'
      }))
    })
  })

  describe('when removing an existing task', () => {
    it('removes', async () => {
      await Task.query().insert({ 'id': 999, 'name': 'XXXXX', 'category': 'XXXXX', 'user_id': 'test-user' })
      const task = { 'id': 999 }

      const response = await request(app)
        .delete('/tasks/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(task)

      expect(response.statusCode).toBe(200)
      const results = await Task.query().count()
      expect(results[0]['count']).toEqual('0')
    })

    it('does not remove another user task', async () => {
      await Task.query().insert({ 'id': 999, 'name': 'XXXXX', 'category': 'XXXXX', 'user_id': 'another-user' })
      const task = { 'id': 999 }

      const response = await request(app)
        .delete('/tasks/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(task)

      expect(response.statusCode).toBe(200)
      const results = await Task.query().count()
      expect(results[0]['count']).toEqual('1')
    })
  })
})
