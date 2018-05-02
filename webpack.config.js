const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/ts/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
	publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
            /*options: {
                transpileOnly: true
            }*/
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./src/ts/tsconfig.json"  })]
  }
};
