var ZipPlugin = require('zip-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../images',
        to: 'images',
      },
    ]),

    new ZipPlugin({
      filename: 'emoji.zip',
    }),
  ],
};
