const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: __dirname + "/src/index.js",//已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            }
        ]},
    devServer: {
        hot: true,
        // 开启服务器的模块热替换（HMR）
    
        contentBase: path.resolve(__dirname, 'dist'),
        // 输出文件的路径
    
        publicPath: '/'
        // 和上文output的"publicPath"值保持一致
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
  
};