## Webpack 入门

### Webpack 是什么？
> WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

### 需要的基础知识
1. Linux 命令行知识
2. JS语言知识
3. 会一些英语或者有一个英语词典
4. 网页相关 API 的知识，如 DOM、XMLHttpRequest、BOM
5. 常见的编程套路，比如说面向对象

### Copy-Run-Modify -- 一种学习的方法

> 自行学习的一个套路 【先做在理解】

1. Copy - 抄一个官方的例子
2. Run - 在自己的机器上运行成功
3. Modify - 改一下这个例子，以理解这个例子

So ， 开始用 CRM 套路来学习 Webpack~

## 选择困难
在github 上搜索webpack 可以找的 webpack 在github上面的官网
[webpack](https://github.com/webpack/webpack)

**点击releaes 可以看到webpack的所有版本**
![image.png](http://upload-images.jianshu.io/upload_images/5137362-8a38a86bbbbcb29a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
目前官网的最新版本是3.5.3

我决定使用最新版本


## 找文档
google 搜索 webapck, 第一个webpack的官网，
 但是作为一个英语渣我选择了这个**[webpack中文网](https://doc.webpack-china.org/)**

打开**[webpack中文网](https://doc.webpack-china.org/)** 点击-> 指南 -> 起步
这个教程会教你一步一步自学 webpack

![image.png](http://upload-images.jianshu.io/upload_images/5137362-59fdb7b4cc6063e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## Copy

#### 再copy文档代码之前，打开 Git Bash，我们要设置一个 npm，让 npm 下载得更快一些

 1. 运行 `npm config set loglevel http`，让你知道 npm 发的每一个请求
 2. 运行 `npm config set progress false`，关闭那个无聊的进度条
 3. 运行 `npm config set registry https://registry.npm.taobao.org/` ， 从淘宝的服务器下载各种包。不过这会让-
 你在运行 `npm adduser` 的时候出问题，想要恢复成原样，只需要运行 `npm config delete registry` 即可。
 4. 运行 `touch ~/.bashrc; echo 'export 
PHANTOMJS_CDNURL="http://npm.taobao.org/mirrors/phantomjs"' >> ~/.bashrc` 让 npm 从淘宝下载 phantomjs
 5. 运行 `touch ~/.bashrc; echo 'export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"' >> ~/.bashrc` 让 npm 从淘宝下载 SASS
 6. 运行 `source ~/.bashrc`

- ok, 现在让我们开始按照文档的代码走

**首先我们创建一个目录，初始化 npm，以及[在本地安装 webpack](https://doc.webpack-china.org/guides/installation#local-installation)：**
~~~
// cd 到你喜欢的一个地方，比如 ~/code/ 目录
mkdir webpack-demo && cd webpack-demo
// 好了，现在我身处 webpack-demo 目录
npm init -y
// 上面命令创建了一个 package.json 文件
npm install --save-dev webpack
// 本地安装webpack
~~~
最后一句话运行后，如果你看到满满一屏幕英文，那就是 webpack 安装成功了。

然后根据文档创建以下目录和内容：
project
~~~
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
~~~
src/index.js
~~~
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
~~~
index.html
~~~
<html>
  <head>
    <title>webpack 3 demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
~~~

目前的文件结构：（注意 index.html 不在 app 里）
~~~
.├── src
 │    └── index.js
 ├── index.html
 └── package.json
~~~
~~~
<html>
 <head>
 <title>webpack 3 demo</title>
 <script src="https://unpkg.com/lodash@4.16.6"></script> 
</head> 
<body>
<script src="src/index.js"></script>
 </body>
</html>
~~~
为了使用 lodash，HTML 使用 script 引入了 lodash v4.16.6。
教程里说这样引用逼格太低，我们可以用更高端的方法引入 lodash。
~~~
// 请先确保命令行当前所在目录是 webpack-demonpm 
install --save lodash
// 上面命令可以简写成 npm i -S lodash
~~~

好了，lodash 的源代码就被下载到 ./node_modules/lodash/ 目录中。
然后在 app/index.js 的第一行添加
~~~
import _ from 'lodash';
function component () { ...
~~~
这个 import 语法自己看 [MDN36](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)，以后所有的新语法，都需要你自己看 MDN。
import _ from 'lodash' 的意思是从 lodash 里得到默认导出，并将默认导出命名为 _，这个 _ 可以换成任何一个其他的变量名。
然后教程说要把 src/index.html 改掉
~~~
<html>
 <head> 
<title>webpack 3 demo</title>
- <script src="https://unpkg.com/lodash@4.16.6"></script>
 </head> 
<body>
- <script src="src/index.js"></script>
+ <script src="dist/bundle.js"></script>
 </body>
 </html>
~~~
~~~
- 表示删除这一行，
+ 表示新增一行
~~~
然后运行
~~~
./node_modules/.bin/webpack src/index.js dist/bundle.js
~~~
浏览器打开 index.html， 如果你看到这样的界面，说明你运行成功了：


![image.png](http://upload-images.jianshu.io/upload_images/5137362-786828dcfbfd66b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 结论

现在让我们来看看目录的整体结构

project
~~~
webpack-demo
|- package.json
|- webpack.config.js
|- /dist
  |- bundle.js
  |- index.html
|- /src
  |- index.js
|- /node_modules
~~~
> 如果你使用的是 npm 5，你可能还会在目录中看到一个 package-lock.json 文件。

1. ./node_modules/.bin/webpack app/index.js dist/bundle.js 将 src/index.js 变成 dist/bundle.js
2. index.html 引用的是 dist/bundle.js
3. lodash 被安装在 node_modules 里
4. webpack 也被安装在 node_modules里，./node_modules/.bin/webpack 就是一个可执行文件
5. webpack、lodash 的版本号都被写在 package.json 里了

## CRM 中的 Modify（改）
通过修改官方给出的例子，来理解webpack 的运行原理

## 引入jQuery
~~~
# 确定你在 webpack-demo 目录
npm i -S jquery
~~~

这样一来 jquery 就会被下载到 node_modules 里面。

然后我们在 src/index.js 里面引入 jquery
~~~
import _ from 'lodash';
+import $ from 'jquery';

function component() {
  // var element = document.createElement('div');
+  var element = $('<div></div>');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // 
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+  element.html(_.join(['Hello', 'webpack'], ''));

  // return element;
+  return element.get(0);
}

document.body.appendChild(component());
~~~

然后再次运行
~~~
./node_modules/.bin/webpack src/index.js dist/bundle.js
~~~ 

打开 index.html。如果你看到 Hello webpack，那就说明 jquery 也引入成功了，只不过我们把它命名为$

## 使用webpack 配置文件
每次运行webpack 时我们需要输入下面这段代码
~~~
./node_modules/.bin/webpack src/index.js dist/bundle.js
~~~
这显然不是令人愉悦的事情，官网给出了解决办法，使用webpack 配置文件

在webpack-demo 目录新建并编辑文件 webpack.config.js : 
~~~
const path = require('path');  // 导入路径模块

module.exports = {
  entry: './src/index.js',   //入口
  output: {
    filename: 'bundle.js',    // 导出文件名
    path: path.resolve(__dirname, 'dist')  // 导出目录
  } 
};
~~~

你不用在意这个文件里写了什么，你只需要找到 app/index.js 、dist 和 bundle.js 这三个关键词在哪就行，方便我们后面改（CRM 的 M！）

然后
` ./node_modules/.bin/webpack app/index.js dist/bundle.js` 
就可以换成
`./node_modules/.bin/webpack --config webpack.config.js`
不过这句话依然很长，每次输入很麻烦，教程又教了一个办法：修改 package.json
~~~
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
~~~
你看它加了一个 build，build 的内容是 webpack。

然后运行 npm run build
~~~
$ npm run build

> webpack-demo@1.0.0 build F:\gitlab\react-power\webpack 入门\webpack-demo
> webpack

Hash: 1c863ce404216525f6a0
Version: webpack 3.5.3
Time: 1225ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  813 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 446 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 2 hidden modules
~~~

那么说明运行 npm run build 就等于运行 node_modules 里的 webpack 可执行文件，这个可执行文件会自己去 webpack.config.js 里找 src/index.js、dist 和 bundle.js 三个关键词。

## 优化
 
### 用webpack内置组件UglifyJsPlugin来压缩
webpack已经内嵌了uglifyJS来完成对JS与CSS的压缩混淆，无需引用额外的插件。压缩代码如下：
~~~
plugins: [
    new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
  ]
~~~

这里需要注意的是压缩的时候需要排除一些关键字，不能混淆，比如$或者require，如果混淆的话就会影响到代码的正常运行。webpack.config.js代码改为如下：
~~~
const path = require('path');  // 自定义路径模块
const webpack = require('webpack');  // 引入webpack

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
~~~
最后运行webpack
~~~
$ npm run build

> webpack-demo@1.0.0 build F:\gitlab\react-power\webpack 入门\webpack-demo
> webpack

Hash: 406553eeec2b5b59b5c9
Version: webpack 3.5.3
Time: 4284ms
    Asset    Size  Chunks             Chunk Names
bundle.js  160 kB       0  [emitted]  main
   [0] ./src/index.js 447 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 2 hidden modules
~~~
再看看 `bundle.js` 文件大小是不是小多了呢？