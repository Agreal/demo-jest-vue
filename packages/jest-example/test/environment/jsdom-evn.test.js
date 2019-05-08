/**
 * @jest-environment jsdom
 */
test('jsdom env test', function() {
  expect(global).toBe(window);
  expect(global).toHaveProperty('document');
});
