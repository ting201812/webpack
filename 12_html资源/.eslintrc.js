/*
 * @Author: 张玉婷
 * @Date: 2022-09-22 11:11:03
 * @LastEditTime: 2022-09-22 11:18:52
 * @LastEditors: 张玉婷
 * @Description: any
 * @FilePath: \webpack\10_eslint\.eslintrc.js
 */
module.exports = {
  env: {
    node: true,  // 启用node中的全局变量
    browser: true, // 启用浏览器中全局变量
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 6, // es6
    sourceType: 'module' // es6 module
  },
  rules: {
    "no-var": 2,  // 不能使用var定义变量
  }
};
