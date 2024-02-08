const { Triangle, Circle, Square } = require('./shapes'); // Adjust the path if needed

test('Triangle render method', () => {
  const triangle = new Triangle('triangle', '#FF0000');
  expect(triangle.render()).toContain('<svg');
});

test('Circle render method', () => {
  const circle = new Circle('circle', '#00FF00');
  expect(circle.render()).toContain('<svg');
});

test('Square render method', () => {
  const square = new Square('square', '#0000FF');
  expect(square.render()).toContain('<svg');
});
