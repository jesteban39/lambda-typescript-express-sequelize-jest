import {handler} from '@src/lambda'
import agent from './agent'

const modelName = 'User'
const path = `/api/${modelName}`
const lamda = agent(handler)

describe(`Route All ${modelName} GET ${path}`, () => {
  const config = {
    method: 'GET',
    path,
    params: {},
    cerys: {},
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: null
  }

  test('Should get 200 and respond for a array', async () => {
    const {statusCode, headers, body} = await lamda(config)
    expect(statusCode).toBe(200)
    expect(headers?.['content-type']).toMatch(/application\/json/)
    expect(Array.isArray(JSON.parse(body))).toBe(true)
  })
})
