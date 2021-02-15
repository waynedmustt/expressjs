const request = require('supertest');
const app = require('../../index');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('index.js', () => {
    it('GET / : should return 200 response code', (done) => {
        request(app)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200);
                expect(response.text).toBe('Hello Glints!');
                done();
            })
    })
})