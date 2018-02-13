import * as actionCreators from './action-creators'
import reducer from './reducer'

require('jest-localstorage-mock')

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    })
  })
})

describe('when handling logging in', () => {
  it('starts logging in', () => {
    const loginRequestStartedAction = actionCreators.loginRequestStarted()

    const nextState = reducer(undefined, loginRequestStartedAction)

    expect(nextState).toEqual({
      isAuthenticated: false,
      isFetching: true,
      profile: {},
      error: null
    })
  })

  it('succeeds logging in', () => {
    const profile = { fakeProperty: 'fakeValue' }
    const loginRequestSucceededAction = actionCreators.loginRequestSucceeded(profile)

    const nextState = reducer(undefined, loginRequestSucceededAction)

    expect(nextState).toEqual({
      isAuthenticated: true,
      isFetching: false,
      profile: { fakeProperty: 'fakeValue' },
      error: null
    })
  })
})

describe('when handling login errors', () => {
  it('sets error message', () => {
    const error = 'fake error'
    const loginRequestErrored = actionCreators.loginRequestErrored(error)

    const nextState = reducer(undefined, loginRequestErrored)

    expect(nextState).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: 'fake error'
    })
  })
})

describe('when handling logging out', () => {
  it('succeeds logging out', () => {
    const logoutRequestSucceededAction = actionCreators.logoutRequestSucceeded()

    const nextState = reducer(undefined, logoutRequestSucceededAction)

    expect(nextState).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    })
  })
})
