module.exports = {
  outputDir: './../dist',
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      filename: 'static/js/ax-bundle-test.js'
    },
    optimization: {
      splitChunks: false,
      minimize: true
    }
  }
};
