const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: "./src/app.module.ts",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
       { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts-loader' },
       { test: /\.html$/, loader: 'raw-loader' },
       { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
       { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url-loader' }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  }
}
