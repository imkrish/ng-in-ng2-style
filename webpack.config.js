module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'ts-loader' },
       { test: /\.html$/, loader: 'raw-loader' },
       { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url-loader' }
    ]
  }
}