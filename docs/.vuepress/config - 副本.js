const path = require('path');
module.exports = {
    title: '爱书栈',
    description: '学习笔记',
    dest: './dist',
	base:'/',
    port: 80,
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true,
		// markdown-it-anchor 的选项
		anchor: { permalink: false },
		// markdown-it-toc 的选项
		toc: { includeLevel: [1, 2] },
		extendMarkdown: md => {
		  // 使用更多的 markdown-it 插件!
		 // md.use(require('markdown-it-toc')),
		  //md.use(require('markdown-it-container'))
		}
  },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 5,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
	/*
	webpack打包配置信息--使用cdn加速
	其中 configureWebpack 是用于修改 Vuepress 内部的 Webpack 配置的，可以是一个对象，也可以是一个函数，然后返回一个对象。
	*/
	configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV
    //判断是否是生产环境
    if(NODE_ENV === 'production'){
      return {
		alias: {
			//'@assets': path.resolve(__dirname,"./")
		},
        output: {
          publicPath: 'https://cdn.ibiancheng.net/vuepress/'
        },
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public') 
          }
        }
      }
    }else{
      return {
		alias: {
			//'@assets': path.resolve(__dirname,"./")
		},
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public') 
          }
        }
      }
    }
  }
}