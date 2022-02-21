"use strict";
const server = require("../server")
const supertest = require("supertest")
const request = supertest(server.app)
describe('testing API server', () => {
    it('testing /', async () => {
        const response = await request.get('/');
        expect(response.text).toEqual('Hello in Home page..')
    })
    it('testing /data', async () => {
        const response = await request.get('/data');
        expect(typeof response.body).toEqual('object')
    })
}
)