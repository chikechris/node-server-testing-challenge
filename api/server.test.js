const request = require('supertest')
const server = require('./server.js')

describe('server.js root route', () => {
  it('should return an ok status code from the index route', async () => {
    const response = await request(server).get('/')
    console.log(response.text)
    expect(response.status).toEqual(201)
    expect(response.body).toEqual({ message: 'server is up' })
  })
  it('should return a response object of {message: "server is up"}', async () => {
    const response = await request(server).get('/')
    expect(response.body).toEqual({ message: 'server is up' })
  })
})

describe('authRoute.js', () => {
  describe('POST /auth/register', () => {
    it('should return id number of newly created user', async () => {
      const response = await request(server).post({
        username: 'chris',
        password: 'chris'
      })
      expect(response.body).toEqual({ id: 1 })
    })
  })
})

