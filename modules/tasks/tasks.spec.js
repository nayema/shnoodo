import request from 'supertest'

const jwt = require('jsonwebtoken')
const pem2jwk = require('pem-jwk').pem2jwk
const keypair = require('keypair')
const nock = require('nock')

import app from '../../app'
import Task from './Task'

const pair = keypair()

const publicJWK = pem2jwk(pair.public)
publicJWK.use = 'sig'
publicJWK.kid = 'kid'

nock(process.env.JWKS_URI)
  .get('')
  .reply(200, {
    keys: [publicJWK]
  })

const token = jwt.sign({ sub: 'test-user' }, pair.private, {
  algorithm: 'RS256',
  header: { kid: 'kid' },
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER
})

describe('tasks', () => {
  beforeEach(async () => {
    await Task.query().delete()
  })

  it('gets all the tasks', async () => {
    await Task.query().insert({ 'name': 'Some Task', 'category': 'Some Category' })

    const response = await request(app)
      .get('/tasks/')
      .set('Authorization', 'Bearer ' + token)

    expect(response.statusCode).toBe(200)
    const tasks = response.body
    expect(tasks[0]).toHaveProperty('id')
    expect(tasks[0]).toEqual(expect.objectContaining({ 'name': 'Some Task', 'category': 'Some Category' }))
  })

  xit('adds a new task', async () => {
    const task = { 'name': 'Some Task', 'category': 'Some Category' }

    const response = await request(app)
      .post('/tasks/')
      .set('Content-Type', 'application/json')
      .send(task)

    expect(response.statusCode).toBe(200)
    const taskResponse = response.body
    expect(taskResponse).toHaveProperty('id')
    expect(taskResponse).toEqual(expect.objectContaining({
      'name': 'Some Task',
      'category': 'Some Category'
    }))
  })

  xit('removes an existing task', async () => {
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
