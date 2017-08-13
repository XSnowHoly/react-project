const path = require('path');  // 自定义路径模块
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',   //入口
  output: {
    filename: 'bundle.js',    // 导出文件名
    path: path.resolve(__dirname, 'dist')  // 导出目录
  },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
  ]
};