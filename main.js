const { minify } = require('html-minifier-terser')
module.exports = function (options = null) {
  return {
    name: 'vite-plugin-html-minifier-terser',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_options, outBundle) {
      try {
        const config = Object.assign({}, {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        }, options)
        for (const bundle of Object.values(outBundle)) {
          if (bundle.type === 'asset' && /\.html$/i.test(bundle.fileName)) {
            bundle.source = await minify(bundle.source, config)
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
  }
}
