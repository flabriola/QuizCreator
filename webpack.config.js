const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Entry point for the bundle
  entry: './src/index.js',
  // Output bundle location
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // Add any other configuration as needed
  module: {
    rules: [
      // Loaders for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
  ],
};
