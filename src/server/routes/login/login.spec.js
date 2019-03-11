/* eslint-disable arrow-body-style */
const MockRequest = require('mock-express-request');
const MockResponse = require('mock-express-response');
const middleware = require('./login.middleware');

describe('Middleware - clientRoutesMiddleware', () => {
  const req = new MockRequest();
  const res = new MockResponse();

  it('should found grant for the route', (done) => {
    const id = 123;
    middleware({ id })(req, res, (err) => {
      expect(err).toBe(undefined);
      done();
    });
  });
});
