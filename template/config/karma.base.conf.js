const webpack = require('webpack')

const webpackConfig = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/dist/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: '#inline-source-map'
}

module.exports = {
  basePath: '',
  files: [
    '../test/unit/index.js'
  ],
  exclude: [
  ],
  frameworks: ['mocha'],
  preprocessors: {
    '../test/unit/index.js': ['webpack', 'sourcemap']
  },
  webpack: Object.assign({
    mode: 'development',
  }, webpackConfig),
  webpackMiddleware: {
    noInfo: true
  }
}
