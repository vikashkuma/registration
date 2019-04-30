/* eslint max-len: ["error", { "ignoreComments": true }]*/

const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devServerConfig = require('./mock-server/webpack.devserver.config');
const autoprefixerPlugin = require('autoprefixer')({
  'browsers': ['> 1%', 'last 2 versions']
});

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';
  return {
    context: __dirname,
    entry: {
      main: ['babel-polyfill',
        './src/index.js',
        './src/components/BrowserDetect/browserDetect.js'],
    },
    output: {
      path: __dirname + '/build/',
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].chunk.[chunkhash].js',
      publicPath: '/',
    },
    devtool: devMode ? 'cheap-module-source-map' : 'none',
    // stats: 'minimal',
    optimization: {
      splitChunks: {
        chunks: 'all', // "initial" and "async"
      },
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        src: __dirname + '/src/',
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', { 'modules': false }], // "import" statements should be processed by webpack for chunk optimization
                  'react',
                  'flow',
                ],
                plugins: [
                  'syntax-dynamic-import',
                  'transform-class-properties',
                  'transform-object-rest-spread',
                ],
                cacheDirectory: true,
              }
            },
            // Disable ESLint check for the local deveopment
            // {
            //     loader: 'eslint-loader',
            //     options: {
            //         cache: true,
            //     }
            // }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: !devMode,
                sourceMap: devMode,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: !devMode,
                sourceMap: devMode,
                localIdentName: '[local]--[hash:base64:10]'
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: devMode,
                plugins: () => [autoprefixerPlugin],
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode,
              }
            }
          ],
        },
        {
          test: /\.module\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: !devMode,
                sourceMap: devMode,
                localIdentName: '[local]--[hash:base64:10]'
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: devMode,
                plugins: () => [autoprefixerPlugin],
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: devMode,
              }
            }
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          include: /src\/img/,
          exclude: /\.inline\.(png|jpg|jpeg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash].[ext]',
            }
          }
        },
        {
          test: /\.(woff2?|ttf|eot|svg)$/,
          include: /src\/font/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'font/[name].[hash].[ext]',
            }
          }
        },
        {
          test: /\.inline\.svg$/,
          include: /src\/img/,
          use: [
            {
              loader: '@svgr/webpack?-prettier,-svgo![path]'
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['./build/*']),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.png',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].chunk.[chunkhash].css',
      }),
      new CopyWebpackPlugin([
        // The "to:" paths are relative to the "output.path:" directory
        { from: './public', to: './' },
      ]),
      new EnvironmentPlugin([
        'API_BASE_URL'
      ]),
    ],
    devServer: devServerConfig,
  };
};
