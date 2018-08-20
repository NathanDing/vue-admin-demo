# vue-admin-demo

> A Vue.js project。整合vuejs+vuex+vue-router+iview+axios+webpack构建项目（管理系统）

## Build Setup (vue-cli官方build步骤)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Install Setup (项目相关组件，clone本项目可以忽略此步骤)

``` bash
# install vuex (Vuex is a state management pattern + library for Vue.js applications)
npm install -g vuex

# install vivew （是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品）
npm install iview --save 

```

## 开发说明-模拟服务介绍
``` bash

```

## 开发说明-目录介绍
``` bash
vue-admin-demo
  |--build——[webpack配置]
     |--build.js——[生产环境构建代码]
     |--check-version.js——[检查node、npm的版本]
     |--logo.png——[图片]
     |--utils.js——[构建工具相关]
     |--vue-loader.conf.js——[css加载器配置]
     |--webpack.base.conf.js——[webpack基础配置]  
     |--webpack.dev.conf.js——[webpack开发环境配置]
     |--webpack.prod.conf.js——[webpack生产环境配置]
  |--config——[vue项目配置]：如监听端口、打包输出等配置
     |--index.js——[项目配置变量]
     |--dev.env.js——[开发环境变量]
     |--prod.env.js——[生产环境变量]
     |--test.env.js——[测试环境变量]
  |--node_modules——[依赖包]：项目的依赖包
  |--src——[项目核心文件]
     |--App.vue——[根组件]：跟页面代码
     |--main.js——[入口文件]：用于加载组件
     |--router——[路由配置]：配置页面跳转
        |--index.js
     |--assets——[静态资源]：如.js\.css之类的文件
        |--js
        |--css
     |--components——[组件]：公共组件代码（内部可以创建不同目录对组件分类）
     |--pages——[页面]：页面代码，组件拼装出来的.vue文件（内部可以创建不同目录对页面分类）
     |--store——[vuex配置]：配置 state、getters、mutations、actions、modules等
        |--index.js
        |--mutations.js
        |--actions.js
        |--modules
  |--static——[静态文件]：静态资源，如图片、json数据等
  |--test——[测试相关]：单元测试、测试代码
  |--.babelrc——[ES6语法编译配置]
  |--.editorconfig——[定义代码格式]
  |--eslint[*]——[eslint代码开发规范配置]
  |--.gitignore——[git上传时忽略的文件（格式）]
  |--.postceerc.js——[转换css的工具]
  |--index.html——[主页]：入口页面
  |--package.json——[项目基本信息]：项目说明、依赖包说明等
  |--README.md——[阅读说明，本文档]
```

  ## 开发说明-功能(路由)介绍
``` bash
./login——[用户登录]

./main/index——[首页]

./main/system/userInfo——[用户管理]

./main/system/roleInfo——[角色管理]

./main/system/paramsInfo——[参数管理]

```
