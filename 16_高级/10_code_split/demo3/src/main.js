/*
 * @Author: JunFan Hang
 * @Date: 2022-10-08 17:16:21
 * @LastEditTime: 2022-10-09 13:30:28
 * @LastEditors: JunFan Hang
 * @Description: 按需引入
 * @FilePath: \webpack\16_高级\10_code_split\demo3\src\main.js
 */
import { sum, } from './math.js';
console.log('我是main.js')
console.log(sum(1, 2, 3))

document.getElementById("count").onclick = function () {
  //动态导入 即使只被引用了一次，也会代码分割
  import("./count.js")
  .then((res) => {
    console.log('成功', res);
  })
  .catch((error) => {
    console.log('失败', error);
  })
};
