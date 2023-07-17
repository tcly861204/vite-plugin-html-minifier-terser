import { minify } from 'html-minifier-terser'
import { PluginOption, Plugin } from 'vite'

interface Options {
  removeAttributeQuotes?: boolean,
  collapseWhitespace?: boolean,
  [attr: string]: any
}

const HtmlMinifierTerser = (options?: Options): Plugin | PluginOption => {
  return {
    name: 'vite-plugin-html-minifier-terser',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_options: any, outBundle: any) {
      try {
        const config = Object.assign({}, {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        }, options)
        for (const bundle of Object.values(outBundle)) {
          if ((bundle as any).type === 'asset' && /\.html$/i.test((bundle as any).fileName)) {
            (bundle as any).source = await minify((bundle as any).source, config)
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
  }
}

export default HtmlMinifierTerser