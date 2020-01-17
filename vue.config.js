module.exports = {
  publicPath: './',
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
        minSize: 1,
        minChunks: 2
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/variables.scss"; @import "@/assets/css/normalize.scss"; @import "@/assets/css/grid-flex.scss";'
      },
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {}
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  }
}
