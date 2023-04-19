# vite-plugin-html-minifier-terser

Vite 打包 HTML 压缩组件。

## install

```bash
npm i vite-plugin-html-minifier-terser -D
```

or

```bash
yarn add vite-plugin-html-minifier-terser -D
```

## use

```js
// vite.config.js
import htmlMinifierTerser from 'vite-plugin-html-minifier-terser'

export default {
  plugin: [
    htmlMinifierTerser({
      removeAttributeQuotes: true, 
      collapseWhitespace: true,
    })
  ]
}
```

## params

默认配置

```js
{
  removeAttributeQuotes: true,
  collapseWhitespace: true
}
```

更多：参考 [html-minifier-terser](https://github.com/terser/html-minifier-terser#options-quick-reference) 文档参数配置
