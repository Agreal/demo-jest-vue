import { fetchData, ready } from '../callbacks'

describe('callbacks', function () {
  test('should invoke fetchData', function (done) {
    fetchData('number', function (response) {
      expect(response.data).toBe(1);

      done();
    })
  });
});
