const adição = require('./script');

test('adicionar mais 1', () => {
  expect(script(contador++)).toBe(1);
});