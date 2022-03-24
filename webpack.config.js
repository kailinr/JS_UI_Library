const path = require('path');

module.exports = {
 entry: './src/index.js',
 output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',
    devMiddleware: {
      publicPath: '/assets/'
   },
    port: 8081,
  },
    module:{
      rules:[{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]}
};
