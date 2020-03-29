const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Session', () => {
    beforeAll( async () => {
        await connection.migrate.latest()
    })

    it('Should be able to Login', async () => {
        const res = await request(app)
        .post('/sessions')
        .send("")
    })

    afterAll(async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })
})