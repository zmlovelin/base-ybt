let objectProject = {
  geyn: {
    entry: 'src/views/index/main.js', // page 的入口
    template: 'src/public/geyn.html', // 模板来源
    // filename: 'ui.html', // 在 dist/geyn.html 的输出
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  ui: {
    entry: 'src/views/ui/main.js',
    template: 'src/public/ui.html',
    filename: 'ui.html',
    title: 'ui Page',
    chunks: ['chunk-vendors', 'chunk-common', 'ui']
  },
  gdfh: {
    entry: 'src/views/gdfh/main.js',
    template: 'src/public/gdfh.html',
    // filename: 'ui.html',
    title: 'gdfh Page',
    chunks: ['chunk-vendors', 'chunk-common', 'gdfh']
  }

}
let page = {}
let projectname = process.argv[3] // 获取执行哪个文件
if (process.env.NODE_ENV == 'development') {
  page = objectProject
} else {
  page[projectname] = objectProject[projectname]
}

module.exports = {
  outputDir: 'dist'+projectname, //标识是打包哪个文件
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  pages: page,
  lintOnSave: false,
  productionSourceMap: false,// 生产环境 sourceMap
  // publicPath: './', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://flsc.ycb51.cn',
        target: 'http://mkt-wechat-test.ycb51.cn/',
        // target: 'http://192.168.1.103:8080',
        // target: 'http://mkt-wechat.whecb.com/',
        changeOrigin: true
      }
    },
    // open: true, // 项目构建成功之后，自动弹出页面
    // host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
    // port: 8080, // 端口号，默认8080
    // https: false, // 协议
    // hotOnly: false // 没啥效果，热模块，webpack已经做好了
  },
}
