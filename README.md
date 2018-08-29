<<<<<<< HEAD
# saas教练端小程序
#### use
###### 克隆
```
git clone git@gitee.com:quxueche2016/saas_coach.git
```
###### 安装依赖
```
npm install
```
###### appid
```
wx49fb1c5f4fe95a95
```
###### 编译
```
wepy build --watch
```
#### 项目文件结构
```
|-- dist
 |-- node_modules
 |-- src
 |   |-- components
        |-- stu-item.wpy
        |-- tab-slider.wpy
        |-- ...
     |-- images
        |-- x.png
     |-- pages
        |-- student.wpy
        |-- exam.wpy
        |-- ...
     |-- store
        |-- actions
            |-- studentAction.js
            |-- examAction.js
        |-- reducers
            |-- sdudentReducer.js
            |-- examReducer.js
            |-- index.js //合并reducer
        |-- types
            |-- index.js
     |-- styles
        |-- weui.scss
        |-- global.scss
        |-- style.scss
     |-- utils
        |-- http.js
        |-- ...
     |-- app.wpy
     |-- config.js
 |-- package.json
```
#### 数据请求
* 使用 promise
* 使用 async await
#### 权限
* 使用globaldata保存登陆后的session_key
* 使用localStorage保存登陆后数据

#### 组件传值
* 静态传值
* 动态传值
#### 状态管理
* redux
* redux-actions
* wepy-redux
#### 事件
* 父组件事件
* 子组件事件触发父组件
#### 样式
* weui.scss (样式库)
* global.scss (全局样式)
* style.scss (入口)
=======
# wepy-demo
wepy项目实战
>>>>>>> 743801e7ea100c4ca2d41f5fa67a1606c9b81464
