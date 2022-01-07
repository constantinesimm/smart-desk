const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const { mergeSassVariables } = require('@vuetify/cli-plugin-utils')

module.exports = {
  lintOnSave: false,
  assetsDir: './assets/',
  outputDir: 'public',
  configureWebpack: config => {
    config.devServer = {
      host: 'localhost',
      port: 8080,
      compress: true,
      disableHostCheck: true,
      clientLogLevel: 'info',
      https: true,

      watchOptions: {
        poll: true,
      },
    }

    config.optimization = {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 249856,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    }
    config.plugins.push(
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
      }),
    )
  },
  chainWebpack: config => {
    config.entry('app').clear().add('./client/main.js').end()
    config.resolve.alias.set('@', path.join(__dirname, './client'))

    // удаляем предварительную загрузку
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // change html template path and add minify
    config
      .plugin('html')
      .tap(args => {
        // eslint-disable-next-line no-param-reassign
        args[0] = {
          template: path.join(__dirname, './client/public/index.html'),
          minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeAttributeQuotes: false,
          },
        }

        return args
      })

    // Сжатый код
    config.optimization.minimize(true)

    // разделить код
    config.optimization.splitChunks({
      chunks: 'all',
      maxSize: 249856,
    })

    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal']
    modules.forEach(match => {
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/assets/styles/variables.scss';"))
    })
  },
}
