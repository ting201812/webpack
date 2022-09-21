/*
 * @Author: 张玉婷
 * @Date: 2022-09-21 14:17:41
 * @LastEditTime: 2022-09-21 14:54:56
 * @LastEditors: 张玉婷
 * @Description: 程序入口文件
 * @FilePath: \webpack\02_webpack初体验\src\index.js
 */

/**
 * 程序入口文件
 * 1. 开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
 * 表示： webpack 会以./src/index.js作为程序入口文件开始打包， 打包后输出到./build/build.js； 整体打包环境是开发环境
 * 2. 生产环境 webpack ./src/index.js -o ./build/built.js --mode=production
 * 表示： webpack 会以./src/index.js作为程序入口文件开始打包， 打包后输出到./build/build.js； 整体打包环境是生产环境
 * 
 * 3. 结论
 * 1). webpack可以处理js/json文件， 不能处理css/img等
 * 2). 生产环境和开发环境将ES6模块化编译成浏览器能够识别的模块化
 * 3). 生产环境比开发环境多一个压缩js代码
 * 
 */
// import './index.css';
import data from './data.json';

function add (x, y) {
  return x + y;
}
console.log(data);
console.log(add(1, 3));