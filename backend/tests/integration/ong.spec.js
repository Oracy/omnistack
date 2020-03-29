const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeAll( async () => {
        await connection.migrate.latest()
    })

    it('Should be able to create a new ONG', async () => {
        const res = await request(app)
        .post('/ongs')
        .send({
                "name": "unipa2",
                "email": "unipa@unipa.com",
                "whatsapp": "1234567890",
                "city": "Itarare",
                "uf": "SP"
            }
        )
        expect(res.body).toHaveProperty('id')
        expect(res.body.id).toHaveLength(8)
    })

    it('Should be able to list all ONGs', async () => {
        const res = await request(app)
        .get('/ongs')

        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('name')
        expect(res.body[0]).toHaveProperty('email')
        expect(res.body[0]).toHaveProperty('whatsapp')
        expect(res.body[0]).toHaveProperty('city')
        expect(res.body[0]).toHaveProperty('uf')
    })

    afterAll( async () => {
        await connection.destroy()
        await connection.migrate.rollback()
    })
})