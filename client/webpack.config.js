const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = {
  entry: ['./client/index.js', './client/styles/index.scss'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        FB_API_KEY: JSON.stringify(process.env.FB_API_KEY),
        FB_AUTH_DOMAIN: JSON.stringify(process.env.FB_AUTH_DOMAIN),
        FB_DB_URL: JSON.stringify(process.env.FB_DB_URL),
        FB_PROJECT_ID: JSON.stringify(process.env.FB_PROJECT_ID),
        FB_BUCKER: JSON.stringify(process.env.FB_BUCKER),
        FB_MESSAGING_SENDER_ID: JSON.stringify(process.env.FB_MESSAGING_SENDER_ID),
        FB_APP_ID: JSON.stringify(process.env.FB_APP_ID)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
