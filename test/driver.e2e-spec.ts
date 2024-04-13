import request from 'supertest';
import { Driver } from '../src/driver/driver.entity';

describe('Driver', () => {
  const app = 'http://localhost:3000';

  it(`Should get all drivers`, () => {
    return request(app)
      .get('/drivers')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(4);
      });
  });

  it('Should get all available drivers', () => {
    return request(app)
      .get('/drivers')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(4);
        body.forEach((driver: Driver) => {
          expect(driver.isAvailable).toEqual(true);
        });
      });
  });

  it('Should get all drivers available in a 3km radius', () => {
    return request(app)
      .get('/drivers/available-at?radius=3000&coor=19.406072,-99.1709473')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(2);
        body.forEach((driver: Driver) => {
          expect(driver.isAvailable).toEqual(true);
        });
      });
  });

  it('Should get a driver by id', () => {
    const id = 'aed67ad1-e0db-4064-a2b7-18a06ae95ad9';
    return request(app)
      .get(`/drivers/${id}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body).toHaveProperty('id');
        expect(body.id).toBe(id);
      });
  });

  it('Should get the 3 closest drivers', () => {
    return request(app)
      .get('/drivers/closest-to?coor=19.406072,-99.1709473&limit=3')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body).toHaveLength(3);
      });
  });
});
