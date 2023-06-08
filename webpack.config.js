const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './build/static/js/main.9d020298.js',  // Replace '<hash>' with the actual hash
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chatWidget.js',
    libraryTarget: 'var',
    library: 'ChatWidget'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'build/index.html', to: 'index.html' },
      ],
    }),
  ],
};
