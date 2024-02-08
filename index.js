const { getShapeInput } = require('./lib/inquirerPrompts');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

async function generateLogo() {
  try {
    const userInput = await getShapeInput();

    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle(userInput.shape, userInput.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(userInput.shape, userInput.shapeColor);
        break;
      case 'square':
        shape = new Square(userInput.shape, userInput.shapeColor);
        break;
      default:
        console.log('Invalid shape');
        return;
    }

    const svgCode = shape.render();
    fs.writeFileSync('logo.svg', svgCode);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

generateLogo();
