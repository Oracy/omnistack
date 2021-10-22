const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection.js')

describe('Incidents', () => {
    beforeAll(async () => {
        connection.migrate.latest()
    })

    it('Should be able to create a new Incident', async () => {
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
})