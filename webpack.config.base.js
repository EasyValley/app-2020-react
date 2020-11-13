const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let LogDemo = require('./webpack-plugin/log');
const webpack = require('webpack');

const resolve = (dir) => path.join(__dirname, dir);

let commonLib = [
  'react',
  'react-dom',
  'react-three-fiber',
  'three',
  'mobx-react',
  'mobx',
];
let cacheGroups = {};
commonLib.forEach((name) => {
  let modulePath = path.join(__dirname, `./node_modules/${name}/package.json`);
  // version
  let version = require(modulePath).version;

  cacheGroups[name] = {
    test: new RegExp(`\/node_modules\/${name}\/`),
    name: `${name}~v${version}~`,
  };
});
// cacheGroups['business'] = {
//   test: new RegExp(`\/src\/`),
//   name: 'business',
// };
// console.log(cacheGroups);

module.exports = {
  entry: {
    app: resolve('./src/index'),
  },
  externals: {
    // 'react':'react',
    // 'react-dom':'react-dom',
  },
  target:'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@src': resolve('./src'),
      '@view': resolve('./src/view/'),
      "@utils": resolve('./src/utils/')
    },
  },
  output: {
    path: resolve('./dist/'),
    publicPath: '/',
    filename: 'js/bundle.[name].[contenthash].js',
    chunkFilename: 'chunk/[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          'babel-loader',
          {
            loader: path.resolve(__dirname,'./webpack-loader/foo-text-loader'),
            options:{},
          }
        ]
      },
      {
        test: /.tsx?$/,
        include: [resolve('./src')],
        exclude: [resolve('./node_modules')],
        use: ['ts-loader'],
      },
      {
        test: /.jsx?$/,
        include: [resolve('./src')],
        exclude: [resolve('./node_modules')],
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        include: resolve('./src'),
        exclude: resolve('./node_modules/'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // [
                  //   'autoprefixer',
                  //   {
                  //     // browsers: [
                  //     //   '>1%',
                  //     //   'last 4 versions',
                  //     //   'Firefox ESR',
                  //     //   'not ie < 9', // React doesn't support IE8 anyway
                  //     // ],
                  //   },
                  // ],
                ],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: resolve('./node_modules/antd/'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // browsers: [
                      //   '>1%',
                      //   'last 4 versions',
                      //   'Firefox ESR',
                      //   'not ie < 9', // React doesn't support IE8 anyway
                      // ],
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: resolve('./src'),
        exclude: resolve('./node_modules/'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2|otf)$/i,
        use: ['file-loader?name=assets/[hash].[ext]'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html'),
      title:'app 2020 react lol'
    }),
    new LogDemo({})
  ],

  optimization: {
    runtimeChunk: {
      name: (entrypoint) => {
        return `runtime~${entrypoint.name}`;
      },
    },
    // splitChunks: {
    //   chunks: 'all',
    //   name: true,
    //   cacheGroups: {
    //     // vendors:false,
    //     ...cacheGroups,
    //   },
    // },
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',

      cacheGroups: {
        default: false,
        defaultVendors: false,
        // vendors:false,
        ...cacheGroups,
      },
    },
  },
};
