import { expect, describe, it } from '@jest/globals'
import request from 'supertest'
import { app } from '../server'

describe('Test List Car Server', () => {
    it('should get test ListCarController route', async() => {
        const res = await request(app).get('/cars')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Array)
    })
})