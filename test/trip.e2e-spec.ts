import request from 'supertest';

describe('Trip', () => {
  const app = 'http://localhost:3000';
  let tripId: string;

  it(`Should create a trip`, () => {
    const requestBody = {
      riderId: '8522e224-492b-4eba-82d4-995c90a234b2',
      driverId: 'cbc249fb-68fc-4687-8f7d-134dd35fb14a',
      fromCoordinate: {
        latitude: 19.406072,
        longitude: -99.1709473,
      },
      toCoordinate: {
        latitude: 19.4357922,
        longitude: -99.0829486,
      },
    };
    return request(app)
      .post('/trips')
      .send(requestBody)
      .expect(201)
      .expect(({ body }) => {
        console.log(body);
        expect(body).toBeDefined();
        expect(body).toHaveProperty('tripId');
        tripId = body.tripId;
      });
  });
  it('Should get all active trips (before finishing)', () => {
    return request(app)
      .get('/trips/active')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(1);
      });
  });
  it('Should finish a trip', () => {
    return request(app).patch(`/trips/${tripId}/finish`).expect(200);
  });
  it('Should get all active trips (after finishing)', () => {
    return request(app).get('/trips/active').expect(200);
  });
});
