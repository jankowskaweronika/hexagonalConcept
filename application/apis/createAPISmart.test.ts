import { describe, it } from 'node:test'
import assert from 'node:assert'

import type { TClientHTTP } from '../clients/createClientHTTP'

import { createAPISmart } from './createAPISmart'

const getParams: unknown[] = []
const postParams: unknown[] = []

const mockedClientHTTP = {
  get: (...params: unknown[]) => {
    getParams.push(params)

    return Promise.resolve({ data: [] })
  },
  post: (...params: unknown[]) => {
    postParams.push(params)

    return Promise.resolve({ data: [] })
  },
} as TClientHTTP

const apiSmart = createAPISmart({
  clientHTTP: mockedClientHTTP,
})

const MOCKED_EMAIL = 'mocked-email'
const MOCKED_PASSWORD = 'mocked-password'
const MOCKED_COMPANY_ID = 1

describe('createAPISmart', () => {
  describe('login', () => {
    it('call client HTTP POST function with right params', async () => {

      await apiSmart.login({
        email: MOCKED_EMAIL,
        password: MOCKED_PASSWORD,
      })

      assert.strictEqual(postParams.length, 1)
      assert.deepStrictEqual(postParams[0], ['/api/login', {
        email: MOCKED_EMAIL,
        password: MOCKED_PASSWORD,
      }])
    })
  })

  describe('getPlants', () => {
    it('call client HTTP GET function with right params', async () => {
      await apiSmart.getPlants({
        companyId: MOCKED_COMPANY_ID,
      })

      assert.strictEqual(getParams.length, 1)
      assert.deepStrictEqual(getParams[0], ['/api/plants?companyId=' + MOCKED_COMPANY_ID])
    })
  })
})
