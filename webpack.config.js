const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './client/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // publicPath: "/dist/",
  },
  plugins: [
    new HTMLPlugin({
      title: 'webpack made html',
      template: path.resolve(__dirname, '/client/template.html'),
      filename: 'index.html'
    }),
    new NodePolyfillPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": [["@babel/preset-env", {targets: {node: "current"}}],"@babel/preset-react" ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    compress: true,
    // host?
    proxy: {
      '/': 'http://localhost:3000'
    },
    // do you need to assing a port? NO default is 8080. you can if you want to though using port property
    // port: 8080,
  },
  // doesn't show performance warnings -- ultimately should address
  performance: {
    hints: false
  },
}