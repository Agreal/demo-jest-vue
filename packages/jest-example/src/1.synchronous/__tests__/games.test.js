import {getSnakeOrder} from '../games'

describe('get snake order', function () {
  test('final game', () => {
    const result = getSnakeOrder(2);
    expect(result).toEqual([1, 2]);
  });

  test('1/2 game', () => {
    const result = getSnakeOrder(4);
    expect(result).toEqual([1, 4, 3, 2]);
  });

  test('1/4 game', () => {
    const result = getSnakeOrder(8);
    expect(result).toEqual([1, 8, 5, 4, 3, 6, 7, 2]);
  });

});
