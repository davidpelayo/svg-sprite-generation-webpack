const path = require('path');
const SpritePlugin = require('svg-sprite-loader/plugin');

const config = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'sprite.svg',
        }
      },
    ]
  },
  plugins: [
    new SpritePlugin(),
  ],
};

module.exports = config;