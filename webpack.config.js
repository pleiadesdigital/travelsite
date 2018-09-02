var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

// FIX OUTDATED WEBPACK - BABEL CONFIG
// 1. Replace 'loaders' with 'rules'
// 2. Install "sudo npm install babel-loader@7 --save-dev"
// 3. Take it for a spin!
