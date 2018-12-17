module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: ['url-loader'],
      },
    ],
  },
};
