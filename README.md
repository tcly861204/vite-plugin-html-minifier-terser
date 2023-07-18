# vite-plugin-html-minifier-terser <a href="https://npmjs.com/package/vite-plugin-html-minifier-terser" target="_blank"><img src="https://badgen.net/npm/v/vite-plugin-html-minifier-terser" alt="npm package"></a>
vite打包html压缩组件

## install
> npm i vite-plugin-html-minifier-terser -D

or


> yarn add vite-plugin-html-minifier-terser -D

## use
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

## params
默认启用了
```
removeAttributeQuotes: true 
collapseWhitespace: true
```
更多：参考html-minifier-terser 文档参数配置

## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好 👋

<img style="display: block;" src="https://tcly861204.github.io/static/wepay.jpg" width="240px" />

## 技术反馈和交流群 | Technical feedback and communication

微信：cobill2008

## License

[MIT](http://opensource.org/licenses/MIT)