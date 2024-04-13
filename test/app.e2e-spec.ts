import request from 'supertest';

describe('AppController (e2e)', () => {
  const app = 'http://localhost:3000';
  it('should return a hello world message', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});
