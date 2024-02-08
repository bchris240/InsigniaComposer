InsigniaComposer

InsigniaComposer is a command-line application that allows users to create simple SVG logos by providing input for text, text color, shape, and shape color. The application uses Node.js, Inquirer for user prompts, and Jest for unit testing.

Getting Started
Follow the steps below to set up and run the InsigniaComposer application on your local machine.

Prerequisites
Make sure you have Node.js installed on your machine. You can download it from https://nodejs.org/.

Installation
Clone the repository:
git clone https://github.com/bchris240/InsigniaComposer.git

Navigate to the project directory:
cd InsigniaComposer

Install dependencies:
npm install
Usage

Run the application using the following command:
node index.js

Follow the prompts to enter text, text color, choose a shape, and specify the shape's color. The application will generate an SVG file named logo.svg based on your input.

Testing
To run the unit tests using Jest, use the following command:

bash
Copy code
npm test
Project Structure
go
Copy code
.
├── examples/           // Example SVG file(s) created with the app
├── lib/                // Folder for classes or functions
|   ├── inquirerPrompts.js  // User input prompts using Inquirer
|   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
|   ├── shapes.test.js  // Jest tests for shapes
|   └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, setup, and usage instructions
Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and create a pull request.

License
This project is licensed under the ISC License.

Acknowledgments
Inquirer: https://www.npmjs.com/package/inquirer
Jest: https://jestjs.io/