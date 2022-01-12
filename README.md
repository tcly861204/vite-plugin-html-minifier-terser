# vite-plugin-html-minifier-terser
vite打包html压缩组件

## 安装
> npm i vite-plugin-html-minifier-terser -D or yarn add vite-plugin-html-minifier-terser -D

## 使用
```
// vite.config.js
import htmlMinifierTerser from 'vite-plugin-html-minifier-terser'
plugin:[
  htmlMinifierTerser({
    removeAttributeQuotes: true, 
    collapseWhitespace: true,
    ...
  })
]
```

## 参数
默认启用了
> removeAttributeQuotes: true 
> collapseWhitespace: true
更多：参考html-minifier-terser 文档参数配置