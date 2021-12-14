"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('../app');
var _supertest = require('supertest'); var _supertest2 = _interopRequireDefault(_supertest);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);


describe('Return heroes', () => {
    it('Should return all heroes', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).get('/')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    it('Should return none', async () => {
        const hash = _crypto2.default.randomBytes(8)
        const response = await _supertest2.default.call(void 0, _app.app).get('/search').query({key: hash.toString('hex')})
        
        expect(response.status).toBe(204)
        expect(response.body).toEqual({})
    })

    it('should send the heroes filtered from the search', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).get('/search').query({key: 'strange'})
        const allHeroes = await _supertest2.default.call(void 0, _app.app).get('/')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length <= allHeroes.body.length).toBe(true)
    })

})