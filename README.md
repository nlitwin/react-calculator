# React Calculator

## Running the app

1. Please use the latest version of Chrome for this application
2. To get started, run `git clone https://github.com/nlitwin/react-calculator.git` and cd into the directory
3. Next, run `npm install`
4. `npm start` will start the Webpack server
5. Head over to `http://localhost:3000/` to see the app

## Tests
Tests are using the Enzyme library, and are in `src/Components/CalculatorDisplay/index.test.js`

## Known Bugs
1. Long strings of commands end up giving the wrong result
2. Hit delete twice to fully clear the calculator state and try out new combinations

## Additional Scripts

`npm test` launches the test runner in interactive watch mode

`npm run build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
