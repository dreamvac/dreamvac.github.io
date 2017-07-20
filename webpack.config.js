const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: '../css/[name].css',
// disable: process.env.NODE_ENV === "development"
})

module.exports = {
  devtool: 'eval-source-map inline-source-map', // 配置生成Source Maps，选择合适的选项
  entry: {
    index: './src/js/index.js',
    index2: './src/js/index2.js',
    index3: './src/js/index3.js',
    common: ["jquery", "vue", "bootstrap"],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ],
          // 在开发环境使用 style-loader
          fallback: 'style-loader'
        })
      // use: [{
      //         loader: "style-loader" // creates style nodes from JS strings
      //     }, {
      //         loader: "css-loader" // translates CSS into CommonJS
      //     }, {
      //         loader: "sass-loader" // compiles Sass to CSS
      //     }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "vue": "vue/dist/vue.min.js"
    }
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    // new webpack.ProvidePlugin({
    //   Vue: ['vue/dist/vue.esm.js', 'default']
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // Specify the common bundle's name.
      minChunks : Infinity  
      // 随着 entrie chunk 越来越多，
      // 这个配置保证没其它的模块会打包进 vendor chunk
    }),
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],
  devServer: {
    // hot: true, // 告诉 dev-server 我们在使用 HMR
    // contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: false, // 不跳转
    inline: true,  // 实时刷新
    port: 3001,
    publicPath: '/'
  },
}
