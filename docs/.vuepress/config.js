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
	configureWebpack: () => {
    const NODE_ENV = 'production1';
    if(NODE_ENV === 'production'){
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/liwuming/bookstack/dist/'
        },
        resolve: {
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }else{
      return {
        resolve: {
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }
  }
}