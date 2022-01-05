const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: false,
  assetsDir: './assets/',
  outputDir: 'public',
  chainWebpack: config => {
    config.entry('app').clear().add('./client/main.js').end();
    config.resolve.alias.set('@', path.join(__dirname, './client'));

    if (isProduction) {
      // удаляем предварительную загрузку
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');

      // change html template path and add minify
      config
        .plugin('html')
        .tap(args => {
          args[0] = {
            template: path.join(__dirname, './client/public/index.html'),
            minify: {
              removeComments: true,
              collapseWhitespace: false,
              removeAttributeQuotes: false
            }
          };

          return args;
        });

      // Сжатый код
      config.optimization.minimize(true);
      // разделить код
      config.optimization.splitChunks({
        chunks: 'all',
        maxSize: 249856
      })
    }
  },
  configureWebpack: config => {
    config.devServer = {
      host: 'localhost',
        port: 8080,
        compress: true,
        disableHostCheck: true,
        clientLogLevel: 'info',
        https: false,

        watchOptions: {
        poll: true,
      },
    };

    if (isProduction) {
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
  }
};
