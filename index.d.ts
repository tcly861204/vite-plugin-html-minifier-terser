import { Plugin } from 'vite';
interface VitePluginHtmlMinifierTerser {
  removeAttributeQuotes?: boolean,
  collapseWhitespace?: boolean,
}
export default function vitePluginHtmlMinifierTerser(options?: VitePluginHtmlMinifierTerser):Plugin;