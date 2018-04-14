'use strict'

module.exports = {
  entry: './index.js', // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

// 'use strict';

// const { resolve } = require('path')

// module.exports = {
//   entry: './app/main',
//   output: {
//     path: __dirname,
//     filename: './bundle.js'
//   },
//   context: __dirname,
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         test: /jsx?$/,
//         include: resolve(__dirname, './app'),
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// };
