/*
 * @Author: 张玉婷
 * @Date: 2022-09-21 15:04:03
 * @LastEditTime: 2022-09-21 17:14:42
 * @LastEditors: 张玉婷
 * @Description: webpack 配置文件
 * @FilePath: \webpack\03_webpack样式资源2\webpack.config.js
 */


/**
 * 所有构建工具是基于node.js 运行的， 模块化默认采用common.js
 */
// 使用resolve拼接绝对路径的方法
const { resolve, } = require('path')
module.exports = {
  // webpack 配置
  // 入口起点
  entry: './src/main.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'main.js',
    // 输出路径
    // __dirname: node.js的变量， 代表当前文件的目录路径
    path: resolve(__dirname, 'build')
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
    ]
  },
  // Plugins的配置
  // plugins: {
  // },
  // 开发模式development 或者 production
  mode: 'development' 
}