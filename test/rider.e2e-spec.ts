import request from 'supertest';

describe('Rider', () => {
  const app = 'http://localhost:3000';

  it(`Should get all riders`, () => {
    return request(app)
      .get('/riders')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(1);
      });
  });
  it('Should get a driver by id', () => {
    const riderId = '8522e224-492b-4eba-82d4-995c90a234b2';
    return request(app)
      .get(`/riders/${riderId}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body).toHaveProperty('id');
        expect(body.id).toBe(riderId);
      });
  });
});
