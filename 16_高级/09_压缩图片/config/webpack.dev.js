/*
 * @Author: 张玉婷
 * @Date: 2022-09-21 15:04:03
 * @LastEditTime: 2022-10-08 14:28:01
 * @LastEditors: JunFan Hang
 * @Description: webpack 配置文件
 * @FilePath: \webpack\16_高级\08_减少babel生成文件体积\config\webpack.dev.js
 */
// 开发环境不需要压缩处理

/**
 * 所有构建工具是基于node.js 运行的， 模块化默认采用common.js
 */
// 使用resolve拼接绝对路径的方法
const os = require("os");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const threads = os.cpus().length;
module.exports = {
  // webpack 配置
  // 入口起点
  entry: "./src/main.js",
  // 输出
  output: {
    // 入口文件输出文件名
    filename: "./js/main.js",
    // 开发模式不需要输出路径、所有文件输出路径
    // __dirname: node.js的变量， 代表当前文件的目录路径
    path: undefined,
  },
  // loader 配置
  module: {
    rules: [
      {
        // 每个文件只能被一个处理
        oneOf: [
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
          {
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.styl$/,
            use: ["style-loader", "css-loader", "stylus-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
              },
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: "static/imgs/[hash:8][ext][query]",
            },
          },
          {
            test: /\.(ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
              filename: "static/media/[hash:8][ext][query]",
            },
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            include: resolve(__dirname, "../src"), // 也可以用包含 处理src下的全部文件 include和exclude只能使用一种，否则回报错
            // 处理多个 使用use
            use: [
              {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, // 开启babel编译缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // Plugins的配置
  plugins: [
    new HtmlWebpackPlugin({
      // 模板, 以public/index.html文件创建新的html文件
      // 新的文件特点: 1. 结构和原来一致 2. 自动引入打包后的资源
      template: resolve(__dirname, "../public/index.html"),
    }),
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: resolve(__dirname, "../src"),
      exclude: "node_modules", // 默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: resolve(__dirname, "../node_modules/.cache/.eslintcache"),
      threads, // 开启多进程
    }),
  ],
  // 开启服务器: 不会输出资源,内存中编译打包的
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "8088", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    // hot: false, // 关闭HMR 改变程序的时候 整个页面都胡刷新
    hot: true, //默认值 重新打包更改模块代码
  },
  // 开发模式development 或者 productionn
  mode: "development",
  devtool: "cheap-module-source-map",
};
