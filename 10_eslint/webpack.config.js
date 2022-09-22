/*
 * @Author: 张玉婷
 * @Date: 2022-09-21 15:04:03
 * @LastEditTime: 2022-09-22 11:13:16
 * @LastEditors: 张玉婷
 * @Description: webpack 配置文件
 * @FilePath: \webpack\10_eslint\webpack.config.js
 */


/**
 * 所有构建工具是基于node.js 运行的， 模块化默认采用common.js
 */
// 使用resolve拼接绝对路径的方法
const { resolve, } = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  // webpack 配置
  // 入口起点
  entry: './src/main.js',
  // 输出
  output: {
    // 入口文件输出文件名
    filename: 'js/main.js',
    // 所有文件输出路径
    // __dirname: node.js的变量， 代表当前文件的目录路径
    path: resolve(__dirname, 'build'),
    /*********************** S 清空上次打包内容 ************************************/
    // 清空上次打包内容, 打包请将path目录清空在打包
    clean: true,
    /*********************** E 清空上次打包内容 ************************************/
  },
  // loader 配置
  module: {
    rules: [
      // 详细loader配置
      {
        // 1. 解决样式资源加载问题
        // 配置哪些文件
        test: /\.css$/,
        // 使用哪些loader去处理, use中的数组执行是从下到上
        use: [
          // 创建style标签 将js中的样式资源插入进行, 添加到head中生效
          'style-loader',
          // 将css文件变成commonJs模块加载js中 里面样式是字符串
          'css-loader',
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      // 图片处理
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset', // asset会转换成base64
        // 将图片按要求解析成base64
        parser: {
          dataUrlCondition: {
            // 小于10kb的图片转换成base64
            //  优点: 减小请求数量 缺点: 体积更大
            maxSize: 10 * 1024 // 4kb
          }
        },
        generator: {
          // 输出图片名字 打包后图片名称太长 可以更改hash的长度， 如hash:10
          filename: 'static/[hash:10][ext][query]'
        }
      },
      // 字体配置
      {
        test: /\.(ttf|woff|woff2?)$/i,
        type: 'asset/resource', // 不会转换成base64
        generator: {
          // 输出位置以及字体名字 打包后图片名称太长 可以更改hash的长度， 如hash:10
          filename: 'static/media/[hash:10][ext][query]'
        }
      },
    ]
  },
  // Plugins的配置
  plugins: [
    new ESLintPlugin({
      // 检查哪些目录,当前值得是监测的是src下的目录
      context: resolve(__dirname, 'src'),
    })
  ],
  // 开发模式development 或者 production
  mode: 'development' 
}