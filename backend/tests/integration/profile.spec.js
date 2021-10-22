const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection.js')

describe('Profiles', () => {
    beforeAll( async () => {
        connection.migrate.latest()
    })

    it('Should be able to list all incidents for this profile', async () => {
        const res = await request(app)
        .get('/profiles')

        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('title')
        expect(res.body[0]).toHaveProperty('description')
        expect(res.body[0]).toHaveProperty('value')
        expect(res.body[0]).toHaveProperty('ong_id')
    })

    afterAll(async () => {
        await connection.migrate.rollback()
        await connection.destroy()
    })
})