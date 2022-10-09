/*
 * @Author: JunFan Hang
 * @Date: 2022-10-08 17:38:50
 * @LastEditTime: 2022-10-08 17:42:12
 * @LastEditors: JunFan Hang
 * @Description: any
 * @FilePath: \webpack\16_高级\10_code_split\demo2\src\math.js
 */

export function sum (...args) {
  return args.reduce((a, b) => a + b, 0);
}