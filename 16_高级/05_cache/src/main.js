/*
 * @Author: 张玉婷
 * @Date: 2022-09-21 15:01:59
 * @LastEditTime: 2022-09-30 16:33:03
 * @LastEditors: JunFan Hang
 * @Description: any
 * @FilePath: \webpack\16_高级\02_HMR\src\main.js
 */

// 引入样式资源
import './css/index.css';
import './less/index.less'
import './scss/index.scss'
// 引入iconfont
import './font/iconfont.css'

import sum from './js/sum';

sum(1, 7);

// js HMR配置
// 判断是否支持HMR功能
if (module.hot) {
  // 需要热模块替换的js， 需要使用module.hot.accept配置
  module.hot.accept("./js/sum");
}