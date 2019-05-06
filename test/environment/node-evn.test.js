/**
 * @jest-environment node
 */
test('node env test', function() {
  expect(global).not.toHaveProperty('document');
});
