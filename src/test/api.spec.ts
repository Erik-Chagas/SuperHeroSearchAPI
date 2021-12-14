import { app } from "../app";
import request from 'supertest'
import crypto from 'crypto'


describe('Return heroes', () => {
    it('Should return all heroes', async () => {
        const response = await request(app).get('/')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    it('Should return none', async () => {
        const hash = crypto.randomBytes(8)
        const response = await request(app).get('/search').query({key: hash.toString('hex')})
        
        expect(response.status).toBe(204)
        expect(response.body).toEqual({})
    })

    it('should send the heroes filtered from the search', async () => {
        const response = await request(app).get('/search').query({key: 'strange'})
        const allHeroes = await request(app).get('/')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length <= allHeroes.body.length).toBe(true)
    })

})