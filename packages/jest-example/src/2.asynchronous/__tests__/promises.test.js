import { fetchData, fetchDataFail } from '../promises'

describe('fetchData', function () {
  test('should get the correct response data', function (done) {
    fetchData('number').then(function(response) {
      expect(response.data).toBe(1);

      done();
    })
  });

  test('should get the correct response data', function () {
    return fetchData('number').then(function(response) {
      expect(response.data).toBe(1);
    })
  });

  test('should get the correct response data', async function () {
    const response = await fetchData('number');
    expect(response.data).toBe(1);
  });

  test('should get the correct response data', async function () {
    const response = await fetchData('number');
    expect(response.data).toBe(1);
  });

});

describe('fetchDataFail', function () {
  test('should get error message', function () {
    expect.assertions(1);
    return fetchDataFail().catch(function (error) {
      expect(error.message).toBe('error');
    })
  });
});
