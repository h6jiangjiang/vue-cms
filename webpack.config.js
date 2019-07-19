const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin') 
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.js'), // 入口，表示要使用webpack打包哪个文件 
    output: { // 输出文件相关配置
       path:path.join(__dirname, './dist'), // 指定打包好的文件，输出到哪个目录中去
       filename: 'bundle.js' // 指定输出的文件名称
    },
    devServer: {
        // 
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        // contentBase: 'src', // 指定托管的目录
        hot: true // 启用热更新 的第一步 
    },
    plugins: [ // 配置插件的节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点，用于配置所有第三方模块加载器
        rules: [ // 所有第三方的模块的 匹配规则
            // 调用loader是从后往前的顺序
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, 
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: "image/[hash:8]-[name].[ext]"
                }
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }
}