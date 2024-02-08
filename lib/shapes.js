class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  render() {
    // To be implemented in each shape class
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
      <!-- Triangle SVG code with this.color -->
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
      <!-- Circle SVG code with this.color -->
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
      <!-- Square SVG code with this.color -->
    </svg>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
