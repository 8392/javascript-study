// vitepress/config.js
module.exports = {
    title: "javascript核心语法",// 网站标题
    description: 'javascript核心语法.', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            { rel: 'icon', href: '/public/logo.jpg' } //图片放在public文件夹下 
        ],
    ],
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/basic/introduction' },
            { text: '关于', link: '/about/index' },
        ],
        //   侧边导航
        sidebar: [
            {   
                text: 'async',
                children: [
                    { text: 'general', link: '/async/general' },
                    { text: 'promise', link: '/async/promise' },
                    { text: 'timer', link: '/async/timer' }
                ]
            },{ 
                text: 'bom',
                children: [
                    { text: 'arraybuffer', link: '/bom/arraybuffer' },
                    { text: 'cookie', link: '/bom/cookie' },
                    { text: 'cors', link: '/bom/cors' },
                    { text: 'engine', link: '/bom/engine' },
                    { text: 'cors', link: '/bom/cors' },
                    { text: 'file', link: '/bom/file' },
                    { text: 'form', link: '/bom/form' },
                    { text: 'history', link: '/bom/history' },
                    { text: 'indexeddb', link: '/bom/indexeddb' },
                    { text: 'location', link: '/bom/location' },
                    { text: 'same-origin', link: '/bom/same-origin' },
                    { text: 'storage', link: '/bom/storage' },
                    { text: 'webworker', link: '/bom/webworker' },
                    { text: 'window', link: '/bom/window' },
                    { text: 'xmlhttprequest', link: '/bom/xmlhttprequest' },
                ]
            },{ 
                text: 'dom',
                children: [
                    { text: 'attributes', link: '/dom/attributes' },
                    { text: 'css', link: '/dom/css' },
                    { text: 'document', link: '/dom/document' },
                    { text: 'element', link: '/dom/element' },
                    { text: 'general', link: '/dom/general' },
                    { text: 'mutationobserver', link: '/dom/mutationobserver' },
                    { text: 'node', link: '/dom/node' },
                    { text: 'nodelist', link: '/dom/nodelist' },
                    { text: 'parentnode', link: '/dom/parentnode' },
                    { text: 'text', link: '/dom/text' },
                ]
            // },{ 
            //     text: 'elements',
            //     children: [
            //         // { text: 'a标签', link: '/elements/atext' },
            //         // { text: 'button', link: '/elements/button' },
            //         // { text: 'form', link: '/elements/form' },
            //         { text: 'image', link: '/elements/image' },
            //         { text: 'input', link: '/elements/input' },
            //         // { text: 'option', link: '/elements/option' },
            //         // { text: 'video', link: '/elements/video' },
                  
            //     ]
            },{ 
                text: 'events',
                children: [
                    { text: 'common', link: '/events/common' },
                    { text: 'drag', link: '/events/drag' },
                    { text: 'event', link: '/events/event' },
                    { text: 'eventtarget', link: '/events/eventtarget' },
                    { text: 'form', link: '/events/form' },
                    { text: 'globaleventhandlers', link: '/events/globaleventhandlers' },
                    { text: 'keyboard', link: '/events/keyboard' },
                    { text: 'model', link: '/events/model' },
                    { text: 'mouse', link: '/events/mouse' },
                    { text: 'progress', link: '/events/progress' },
                    { text: 'touch', link: '/events/touch' },
                  
                ]
            },{ 
                text: 'features',
                children: [
                    { text: 'console', link: '/features/console' },
                    { text: 'conversion', link: '/features/conversion' },
                    { text: 'error', link: '/features/error' },
                    { text: 'style', link: '/features/style' },
                ]
            },{ 
                text: '面向对象编程',
                children: [
                    { text: 'new', link: '/oop/new' },
                    { text: 'object', link: '/oop/object' },
                    { text: 'prototype', link: '/oop/prototype' },
                    { text: 'strict', link: '/oop/strict' },
                    { text: 'this', link: '/oop/this' },
                ]
            },{ 
                text: '运算符',
                children: [
                    { text: 'arithmetic', link: '/operators/arithmetic' },
                    { text: 'bit', link: '/operators/bit' },
                    { text: 'boolean', link: '/operators/boolean' },
                    { text: 'comparison', link: '/operators/comparison' },
                    { text: 'priority', link: '/operators/priority' },
                ]
            },{ 
                text: 'stdlib',
                children: [
                    { text: 'array', link: '/stdlib/array' },
                    { text: 'attributes', link: '/stdlib/attributes' },
                    { text: 'boolean', link: '/stdlib/boolean' },
                    { text: 'date', link: '/stdlib/date' },
                    { text: 'json', link: '/stdlib/json' },
                    { text: 'math', link: '/stdlib/math' },
                    { text: 'number', link: '/stdlib/number' },
                    { text: 'object', link: '/stdlib/object' },
                    { text: 'regexp', link: '/stdlib/regexp' },
                    { text: 'string', link: '/stdlib/string' },
                    { text: 'wrapper', link: '/stdlib/wrapper' },
                ]
            },{ 
                text: '数据类型',
                children: [
                    { text: 'array', link: '/types/array' },
                    { text: 'function', link: '/types/function' },
                    { text: 'general', link: '/types/general' },
                    { text: 'null-undefined-boolean', link: '/types/null-undefined-boolean' },
                    { text: 'number', link: '/types/number' },
                    { text: 'object', link: '/types/object' },
                    { text: 'string', link: '/types/string' },
                ]
            },{   
                text: 'basic',
                children: [
                    { text: 'grammar', link: '/basic/grammar' },
                    { text: 'history', link: '/basic/history' },
                    { text: 'introduction', link: '/basic/introduction' }
                ]
            }
        ]
    }
}

