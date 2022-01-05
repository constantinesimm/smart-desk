const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  lintOnSave: false,
  assetsDir: './client/assets/',
  outputDir: './client-build',
  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true,
    disableHostCheck: true,
    clientLogLevel: 'info',
    https: true,
    watchOptions: {
      poll: true,
    },
  },
  output: {
    filename: 'smart-bot.min.js'
  },
  chainWebpack: config => {
    // change main path name from 'client' to 'client'
    config.entry('app').clear().add('./client/main.js').end();
    config.resolve.alias.set('@', path.join(__dirname, './client'));

    // remove html hints
    config.optimization.minimize(true);
    // разделить код
    config.optimization.splitChunks({
      chunks: 'all',
      maxSize: 249856
    })


    // change html template path and add minify
    config
      .plugin('html')
      .tap(args => {
        args[0] = {
          template: path.join(__dirname, './public/index.html'),
          minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeAttributeQuotes: false
          }
        };

        return args;
      });
  },
  configureWebpack: config => {
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
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    };
    config.plugins.push(
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i
      })
    );
  }

};
