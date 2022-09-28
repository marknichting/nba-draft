const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './client/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLPlugin({
      title: 'webpack made html',
      template: path.resolve(__dirname, '/client/template.html'),
      filename: 'index.html'
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-react", "@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}