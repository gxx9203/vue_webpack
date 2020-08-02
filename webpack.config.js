const path = require('path') // 文件跟目录
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    VueLoaderPlugin
} = require('vue-loader')
/* import webpack from 'webpack'
@type{webpack.Configuration} */

const config = {
    entry: './src/main.js',
    output: { //输出文件位置
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello word',
            minify: { // 压缩HTML文件
                caseSensitive: true, //是否对大小写敏感，默认false
                collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                minifyJS: true, //是否压缩html里的js（使用uglify-js进行的压缩）
                preventAttributesEscaping: true,
                removeCommentsFromCDATA: true, //从脚本和样式删除的注释 默认false
                removeRedundantAttributes: true, //删除多余的属性
                removeScriptTypeAttributes: true, //删除script的类型属性
                removeStyleLinkTypeAttributes: true, //删除style的类型属性
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true, // 压缩内联css
                useShortDoctype: true //使用短的文档类型，默认false
            },
            filename: 'index.html',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {test:/\.png$/,use:[{loader: "file-loader",
                                   options:{
                                      eSModule:false},
                                   }
                                ]
              }
      ]
    },

    resolve: {
        alias: {
            '@':path.resolve(__dirname,"./src")
        }
    }
}
module.exports = config
